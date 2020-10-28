import React, { useEffect, useState } from 'react';
import EmailChild from '../EmailChild/EmailChild';

const EmailShow = () => {

    const[admin,setAdmin]=useState([])
    const[loaded,setLoaded]=useState(false)
    useEffect(()=>{
        fetch('https://limitless-sands-81610.herokuapp.com/getVolunteerInfos')
       .then(res=>res.json())
       .then(data=>setAdmin(data))
       },[loaded])

       const handleDelete=(id)=>{
        fetch(`https://limitless-sands-81610.herokuapp.com/deleteItem/${id}`,{
            method:'DELETE'
    
    
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                setLoaded(!loaded)
                
            }
            
           
        
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