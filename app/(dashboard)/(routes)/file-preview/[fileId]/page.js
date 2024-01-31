"use client"
import React, { useState, useEffect } from 'react'
import { app } from '../../../../../FirebaseConfig';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { ArrowLeftSquare } from 'lucide-react';
import FileInfo from './_components/FileInfo'
import Link from 'next/link'

function FilePreview({params}) {
  const db = getFirestore(app);
  const [file, setFile] = useState();
    useEffect(()=>{
        console.log(params?.fileId)
        params?.fileId&&getFileInfo();
    },[])
    const getFileInfo=async()=>{
      const docRef = doc(db, "uploadedFile", params?.fileId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setFile(docSnap.data());
        
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
      const onPasswordSave=(password)=>{

      }

       
    }
  return (
    <div className='py-10 px-20'>
    <Link href='/upload' className='flex gap-3' >
    <ArrowLeftSquare />Go to Upload
    </Link>
    <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
      <FileInfo file={file} />
      {/* <FileShareform file={file}
      onPasswordSave={(password)=>onPasswordSave(password)}/> */}


    </div>

    </div>
  )
}

export default FilePreview
