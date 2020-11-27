import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext, VolunteerContext } from '../../App';
import './Register.css'
import tree from '../../logos/Group 1329.png'

const Register = () => {
    const[volunteer,setVolunteer]=useContext(VolunteerContext)
    const[loggedInUser,setLoggedInUser]=useContext(UserContext)
    
    const history=useHistory()


    const{id}=useParams()
    if(!id){
        alert('please go to the home page and select a task')
    }
    // useEffect(()=>{
    //     fetch('https://limitless-sands-81610.herokuapp.com/getVolunteer?id'+id)
    //    .then(res=>res.json())
    //    .then(data=>setVolunteerDouble(data))
    //    },[])
      const selectedDetails=volunteer.find(task=>task.id == id)

      


      
      
       



    
       
    const [detail,setDetail]=useState({date:'',
description:'',name:loggedInUser.name,
email:loggedInUser.email, data:selectedDetails.name,id:selectedDetails.id,image:selectedDetails.pic

})

    
    




const handleBlur=(e)=>{
    if(e.target.name==='date'){
    const newUserInfo={...detail}
    newUserInfo.date=e.target.value
    setDetail(newUserInfo)
    }
    if(e.target.name==='description'){
        const newUserInfo={...detail}
        newUserInfo[e.target.name]=e.target.value
        setDetail(newUserInfo)
    
    }
    
   
}
const handleAddTask=(e)=>{
    

        fetch('https://limitless-sands-81610.herokuapp.com/addVolunteer',{
            method:'POST',
            headers:{'Content-TYPE':'application/json'},
            body:JSON.stringify(detail)
    
    
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
             
      history.push('/showData')  
       
            }
         
            
        
        }
      )
    
        
    
        
    e.preventDefault()
    
    
    }
    

    return (
    < div style={{textAlign:'center'}}>
        <img style={{height:'100px'}} src={tree}/>
        <div className="form-container">
            
            
            <h4>Register as a Volunteer</h4>
            <form onSubmit={handleAddTask}  >
    <div className="md-form form-sm" > <input type="text" name="name"id="inputSMEx"value={loggedInUser.name} placeholder="Full Name"className="form-control form-control-sm w-10" /></div><br/>
    <input type="text"name="email"className="form-control form-control-sm w-10" value={loggedInUser.email}   placeholder="Email orUsername"  required/> 
 <br/> <div className="md-form form-sm"><input type="date"name="date" placeholder="Date"onBlur={handleBlur}className="form-control form-control-sm w-10" required /></div><br/>
 <div className="md-form form-sm" > <input type="text" name="description" onBlur={handleBlur} id="inputSMEx"required placeholder="Description"className="form-control form-control-sm w-10"  required/></div>
<br/><div className="md-form form-sm" > <input type="text" value={selectedDetails.name} name="data" className="form-control form-control-sm w-10"  /></div><br/>
 <input type="submit"className="submit-button btn btn-primary" value="Register Now"/> 

 </form>
 
        </div>
        </div>
    );
};

export default Register;