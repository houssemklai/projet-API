import React from 'react'
import axios from 'axios'
import{useState,useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'


function Details() {
    const{id}=useParams()
    const navigate=useNavigate();
    
    const [user, setUsers]=useState({})
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=>setUsers(res.data))
        .catch(err=>console.log(err))
    } ,[] );
    return (
        <div>
       
       <h2>  {user.email} </h2>
       <button onClick={()=> navigate(-1)}>   go back</button>
        </div>
    )
}

export default Details;
