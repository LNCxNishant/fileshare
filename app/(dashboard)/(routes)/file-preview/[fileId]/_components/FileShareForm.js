"use client"
import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { Copy } from 'lucide-react';
import GlobalApi from './../../../../../utils/GlobalApi';

const FileShareForm = ({ file, onPasswordSave }) => {
  const [isPasswordEnable, setIsPasswordEnable] = useState(true);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { user } = useUser();

  const sendEmail = () => {
    const data = {
      emailToSend: email,
      userName: user?.fullName,
      fileName: file.fileName,
      fileSize: file.fileSize,
      fileType: file.fileType,
      shortUrl: file.shortUrl,
    };

    GlobalApi.SendEmail(data).then(response => {
      console.log(response);
    });
  };

  return (
    <div className='flex flex-col gap-2'>
      <div>
        <label className='text-[14px] text-gray-500 font-semibold'> URL</label>
        <div className='flex justify-between gap-2 p-2 border rounded-md'>
          <input
            type="text"
            value={file?.shortUrl}
            disabled
            className='w-full disabled:text-gray-500 bg-transparent outline-none'
          />
          <Copy className='text-gray-400 hover:text-gray-300' />
        </div>
      </div>

      <div className='flex gap-3 mt-5'>
        <input type="checkbox" onChange={(e) => setIsPasswordEnable(e.target.checked)} />
        <label>Password</label>
      </div>

      {isPasswordEnable ? (
        <div className='flex items-center gap-3'>
          <div className='border rounded-md w-full p-2'>
            <input
              type='password'
              className='disabled:text-gray-500 bg-transparent outline-none'
              onChange={(e) => setPassword(e.target.value)}
              value={password} 
            />
          </div>
          <button
            className='p-2 bg-primary text-white rounded-md disabled:bg-gray-300 hover:bg-blue-600'
            disabled={password.length < 3}
            onClick={() => onPasswordSave(password)}
          >
            Next
          </button>
        </div>
      ) : null}

      <div className='w-full h-auto border rounded-md p-2 mt-5'>
        <label className='text-[14px] text-gray-500 font-semibold'>Receiver's Email</label>
        <div className='border rounded-md w-full p-2'>
          <input
            type='email'
            className='disabled:text-gray-500 bg-transparent outline-none'
            placeholder='example@gmail.com'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          className='w-full p-2 bg-primary text-white rounded-md disabled:bg-gray-300 hover:bg-blue-600 mt-2'
          onClick={sendEmail}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default FileShareForm;
