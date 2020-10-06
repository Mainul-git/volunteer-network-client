import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext, VolunteerContext } from '../../App';
import './Register.css'
import tree from '../../logos/Group 1329.png'

// const volunteerTask=[{
//     name:'Child Support ',
//     pic:'https://i.ibb.co/NrgRX3M/child-Support.png',id:1},
    
//     {
//         name:'Animal Shelter',
//         pic:'https://i.ibb.co/8cBJLbx/animal-Shelter.png',id:2
//     },
//     {
// name:'Bird House',
// pic:'https://i.ibb.co/bHdtGgc/bird-House.png'  ,id:3   },
// {
//    name:'Good Student',
//    pic:'https://i.ibb.co/C5Z89Sq/good-Education.png',id:4
// }
// ,
// {
//     name:'Study Group',
//     pic:'https://i.ibb.co/xmBhJCG/study-Group.png',id:5
// },
//     {
//         name:'give a Seminar on driving safety',pic:'https://i.ibb.co/rmpzmcZ/drive-Safety.png'

//         ,id:6
//     },
//     {
//         name:'Host a Clothing Swap',
//         pic:'https://i.ibb.co/j4zZ1hx/cloth-Swap.png'
//         ,id:7
//     },
//     {
//         pic:'https://i.ibb.co/ZJD41Tw/library-Books.png',
//         name:'libraryBooks.png',id:8

//     },
// {
//     name:'Clean up your local park',pic:'https://i.ibb.co/yPyjL0S/clearn-Park.png',id:9
// },
// {
//     name:'Teach people to vote',pic:'https://i.ibb.co/ysWRFrN/vote-Register.png',id:10
// },{
//     name:'Collect school supplies',pic:'https://i.ibb.co/mJZRC4k/school-Suffiles.png',id:11
// },{
//     name:'Collect shuffled animals',pic:'https://i.ibb.co/Wnj4ZXw/stuffed-Animals.png',id:12
// },{
//     name:'Host a river clean-up',pic:'https://i.ibb.co/SN61Hbz/river-Clean.png',id:13
// },{
//     name:'newBooks for children',pic:'https://i.ibb.co/3MddzBR/newBooks.png',id:14
// },{
//     pic:'https://i.ibb.co/gPgHLZ9/ITHelp.png',name:'IT Help',id:15
// },{
//     name:'Clean Water for children',pic:'https://i.ibb.co/C1Jqr2q/clean-Water.png',id:16
// },{
//     name:'Refugee Shelter',pic:'https://i.ibb.co/bFtZdxk/refuse-Shelter.png',id:17
// },{
//     name:'food Charity',pic:'https://i.ibb.co/nMG1JwZ/food-Charity.png',id:18
// },{
//     name:'give free music lessons',pic:'https://i.ibb.co/pR8PCQy/music-Lessons.png',id:19
// },{
//     name:'babySit during pta meetings',pic:'https://i.ibb.co/gVsr6t1/babySit.png' ,id:20
// }]

const Register = () => {
    const[volunteer,setVolunteer]=useContext(VolunteerContext)
    const[loggedInUser,setLoggedInUser]=useContext(UserContext)
    const history=useHistory()

    const{id}=useParams()
    
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
            
            console.log(data)
        
        }
      )
    
        
    
      history.push('/showData')
        
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