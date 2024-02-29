import React, { useState } from 'react';
import ReactModal from 'react-modal';

export default function User({pic,name,githubUrl}) {

    const [isModalOpen,setIsModalOpen]=useState(false)

  return (
    <>
        <div className='container'>
          <div className='user-container' onClick={()=>setIsModalOpen(true)}>
          <div className='user-pic-container'><img className='user-pic' src={pic}/></div>
            <h3>{name}</h3>
            <h4 className='user-github-url'> {githubUrl}</h4>
          </div>
        </div>
        <ReactModal isOpen={isModalOpen} onRequestClose={()=>setIsModalOpen(false)} style={{overlay:{backgroundColor: 'rgba(0, 0, 0, 0.8)'},content:{margin:'5rem auto',height:'15rem'}}}>
          <div className='container' >
            <div className='user-container'>
              <div><img className='user-pic' src={pic}/></div>
              <h3 className='user-github-url'>{name}</h3>
              <h4 className='user-github-url'> {githubUrl}</h4>
            </div>        
          </div>
        </ReactModal>
    </>
  )
}
