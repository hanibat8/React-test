import React, { useState } from 'react';
import ReactModal from 'react-modal';

export default function User({pic,name,githubUrl}) {

    const [isModalOpen,setIsModalOpen]=useState(false)

  return (
    <>
        <div className='container user-container' onClick={()=>setIsModalOpen(true)}>
            <div><img className='user-pic' src={pic}/></div>
            <h2>{name}</h2>
            <div> {githubUrl}</div>
        </div>
        <ReactModal isOpen={isModalOpen} onRequestClose={()=>setIsModalOpen(false)} style={{overlay:{backgroundColor: 'rgba(0, 0, 0, 0.8)'},content:{margin:'5rem auto',height:'15rem'}}}>
        <div className='container user-container' >
            <div><img className='user-pic' src={pic}/></div>
            <h2>{name}</h2>
            <div> {githubUrl}</div>
        </div>
        </ReactModal>
    </>
  )
}
