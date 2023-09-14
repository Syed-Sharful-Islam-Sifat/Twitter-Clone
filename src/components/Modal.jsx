import React from 'react'
import  './modals.css'
const Modal = ({isOpen,onClose,children}) => {

    console.log(isOpen)

    if(!isOpen)return null;
  return (
    <div className='modal-overlay'>
       <div className='modal'>
        <button onClick={onClose}>X</button>
       </div>
        {children}
    </div>
  )
}

export default Modal