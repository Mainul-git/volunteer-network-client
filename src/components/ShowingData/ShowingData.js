import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

import Showitem from '../Showitem/Showitem';
import VolunteerTask from '../VolunteerTask/VolunteerTask';
;

const ShowingData= () => {
    const[loggedInUser,setLoggedInUser]=useContext(UserContext)
    const[load,setLoad]=useState(false)
    // const[registered,setRegistered]=useState({})
    // const[use,setUse]=useState(volunteerTask)
    // const s=use.find(reg=>reg.id==registered.id)
const[user,setUser]=useState([])
    useEffect(()=>{
        fetch('https://limitless-sands-81610.herokuapp.com/getVolunteerInfo?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>{setUser(data)
        if(!data){
            alert('Go to the home page and Select a task')
        }
    }
        )
  
    },[load])


    const handleDelete=(id)=>{
        fetch(`https://limitless-sands-81610.herokuapp.com/deleteItem/${id}`,{
            method:'DELETE'
    
    
        })
        .then(res=>res.json())
        .then(data=>{
            
            console.log(data)
            setLoad(!load)
        
        } )
      }
    // console.log(registered.name)
    console.log(user);
    return (
        <div className="row">
             
                {
                    user.map(data=><Showitem datas={data} handleDelete={handleDelete}></Showitem>)
                } 
             
        </div>
    );
};

export default ShowingData;