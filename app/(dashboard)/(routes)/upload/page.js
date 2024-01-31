// Import necessary libraries and modules
"use client"
import { useEffect, useState } from 'react'
import UploadForm from './_components/UploadForm'
import { app } from '../../../../FirebaseConfig'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { useUser } from '@clerk/nextjs';
import generateRandomString from '../../../utils/GenerateRandomString'
import { useRouter } from 'next/navigation'

function Upload() {
  // Set up necessary states and hooks
  const { user } = useUser();
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState();
  const [fileDocId, setFileDocId] = useState();
  const [uploadCompleted, setUploadCompleted] = useState(false);
  const router = useRouter();
  const storage = getStorage(app);
  const db = getFirestore(app);

  // Function to upload file
  const uploadFile = async (file) => {
    try {
      const metadata = {
        contentType: file.type
      };
      const storageRef = ref(storage, 'file-upload/' + file?.name);
      const uploadTask = uploadBytesResumable(storageRef, file, file.type);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          setProgress(progress);

          if (progress === 100) {
            getDownloadURL(uploadTask.snapshot.ref)
              .then((downloadURL) => {
                console.log('File available at', downloadURL);
                saveInfo(file, downloadURL);
              })
              .catch(error => {
                console.error('Error getting download URL:', error);
              });
          }
        },
        (error) => {
          console.error('Upload error:', error);
        }
      );
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  // Function to save file information to Firestore
  const saveInfo = async (file, fileUrl) => {
    try {
      const docID = generateRandomString().toString();
      console.log(docID);
      await setDoc(doc(db, "uploadedFile", docID), {
        fileName: file?.name,
        fileSize: file?.size,
        fileType: file?.type,
        fileUrl: fileUrl,
        userEmai: user?.primaryEmailAddress.emailAddress,
        userName: user?.fullName,
        password: '',
        id: docID,
        shortUrl: process.env.NEXT_PUBLIC_BASE_URL + docID
      });

      console.log('Firestore document created successfully');
      setFileDocId(docID);
      setUploadCompleted(true);
    } catch (error) {
      console.error('Error creating Firestore document:', error);
    }
  };

  // useEffect to handle redirection after uploadCompleted
  useEffect(() => {
    if (uploadCompleted) {
      setTimeout(() => {
        setUploadCompleted(false);
        router.push('/file-preview/' + fileDocId);
      }, 2000);
    }
  }, [uploadCompleted]);

  // Return JSX for the component
  return (
    <div className='p-5 px-8 md:px-28'>
      <h2 className='text-[20px] text-center m-5'>
        Start <strong className='text-primary'>Uploading</strong> Files and share
      </h2>
      <UploadForm
        uploadBtnClick={(file) => uploadFile(file)}
        progress={progress}
      />
    </div>
  );
}

export default Upload;
