import React from 'react'

function AlertMsg({msg}) {
  return (
    <div className='p-4 bg-red-500 mt-5 text-white rounded-md flex gap-5 items-center text-center'>
       
        {msg}
    </div>
  )
}

export default AlertMsg