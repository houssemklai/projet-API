import React from 'react'
import{useState,useEffect} from 'react'
import Moviecard from './moviecard'
import axios from 'axios'
function Userlist() {
    const [users, setUsers]=useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>setUsers(res.data))
        .catch(err=>console.log(err))
    } ,[] );
    return (
        <div className='hk'>
            {users.map(el=> <Moviecard  user={el} key={el.id}/>)}     
        </div>
    )
}

export default Userlist;

