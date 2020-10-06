import React, { useEffect, useState } from 'react';
import EmailChild from '../EmailChild/EmailChild';

const EmailShow = () => {

    const[admin,setAdmin]=useState([])
    const[loaded,setLoaded]=useState(false)
    useEffect(()=>{
        fetch('http://localhost:9000/getVolunteerInfos')
       .then(res=>res.json())
       .then(data=>setAdmin(data))
       },[])

       const handleDelete=(id)=>{
        fetch(`http://localhost:9000/deleteItem/${id}`,{
            method:'DELETE'
    
    
        })
        .then(res=>res.json())
        .then(data=>{
            
            console.log(data)
            setLoaded(!loaded)
        
        } )
      }

    return (
        <div>
            {
                admin.map(data=><EmailChild data={data} handleDelete={handleDelete}></EmailChild>)
            }
        </div>
    );
};

export default EmailShow;