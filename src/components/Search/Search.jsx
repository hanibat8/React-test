import React, { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux';
import { fetchUser } from '../List/usersSlice';

export default function Search() {
    const [searchInput,setSearchInput]=useState('');

    const dispatch=useDispatch();

    const handleSearchInput=(e)=>{
        setSearchInput(e.target.value)
    }

    useEffect(()=>{
        const id=setTimeout(()=>{
            if(searchInput.trim()==='')
            dispatch(fetchUser('users'))
        else
            dispatch(fetchUser(`users/${searchInput}`))
        },1000)

        return()=>clearTimeout(id)
        
    },[searchInput])

  return (
    <div className='container search-container'>
        <label className='search-container-label'>Search: <input className='search-container-input' name='Search' onChange={handleSearchInput}/></label>
    </div>
  )
}
