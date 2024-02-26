import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { selectAllUsers } from './usersSlice'
import { fetchUser } from './usersSlice';

import User from '../User/User';

export default function List() {
    
    const response=useSelector(selectAllUsers)
    const dispatch=useDispatch()
    
    useEffect(()=>{
        dispatch(fetchUser('users'))
    },[])

  return (
    <>
        {response.loading && <div className='container'>Loading ...</div>}
        {response.users.length>0 && response.users.map((user)=>(
            <User name={user.login} githubUrl={user.url} pic={user.avatar_url}/>
        ))}
        
    </>
  )
}
