"use client"
import Image from 'next/image'
import Modal from '@/components/Modal';
import Link from 'next/link';
import { useState } from 'react';
import RegisterModal from '@/components/RegisterModal';
export default function Home() {

  const[isOpen,setIsopen] = useState(false)
  return (

    <div>
      <div className='auth-reg'>
          <button onClick={()=>setIsopen(true)} disabled={isOpen}>
            Create an account
          </button>
        <Modal isOpen={isOpen} onClose={()=>setIsopen(false)}>
          <RegisterModal/>
        </Modal>
      </div>
    </div>

  )
}
