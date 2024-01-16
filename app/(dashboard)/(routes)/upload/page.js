import React from 'react'
import UploadForm from './_components/UploadForm'

function Upload() {
  return (
    <div className='p-5 px-8 md:px-28'>
      <h2 className='text-[20px] text-center m-5'>
        Start <strong className='text-primary'>Uploading</strong>  Files and share
      </h2>
      <UploadForm/>
    </div>
  )
}

export default Upload