import React from 'react'

export default function Modal({children, onClose}) {
  return (
    <>
        <div className='backdrop' onClick={onClose} ></div>
        {/* dialog opens the pop up */}
            <dialog className='modal' open> 
            {children}
            </dialog>
        
    </>
  )
}