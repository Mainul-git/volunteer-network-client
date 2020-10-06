import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

import Showitem from '../Showitem/Showitem';
import VolunteerTask from '../VolunteerTask/VolunteerTask';
;
// const volunteerTask=[
//     {
//     name:'Child Support ',
//     pic:'childSupport.png',id:1},
    
//     {
//         name:'Animal Shelter',
//         pic:'animalShelter.png',id:2
//     },
//     {
// name:'Bird House',
// pic:'birdHouse.png'  ,id:3   },
// {
//    name:'Good Student',
//    pic:'goodEducation.png',id:4
// }
// ,
// {
//     name:'Host a Study group',
//     pic:'studyGroup.png',id:5
// },
//     {
//         name:'give a Seminar on driving safety',pic:'driveSafety.png'

//         ,id:6
//     },
//     {
//         name:'Host a Clothing Swap',
//         pic:'clothSwap.png'
//         ,id:7
//     },
//     {
//         name:'Organize book at library',
//         pic:'libraryBooks.png',id:8

//     },
// {
//     name:'Clean up your local park',pic:'clearnPark.png',id:9
// },
// {
//     name:'Teach people to vote',pic:'voteRegister.png',id:10
// },{
//     name:'Collect school supplies',pic:'schoolSuffiles.png',id:11
// },{
//     name:'Collect shuffled animals',pic:'stuffedAnimals.png',id:12
// },{
//     name:'Host a river clean-up',pic:'riverClean.png',id:13
// },{
//     name:'newBooks for children',pic:'newBooks.png',id:14
// },{
//     name:'give IT help to local adults',pic:'ITHelp.png',id:15
// },{
//     name:'Clean Water for children',pic:'cleanWater.png',id:16
// },{
//     name:'Refugee Shelter',pic:'refuseShelter.png',id:17
// },{
//     name:'food Charity',pic:'foodCharity.png',id:18
// },{
//     name:'give free music lessons',pic:'musicLessons.png',id:19
// },{
//     name:'babySit during pta meetings',pic:'babySit.png',id:20
// }]
const ShowingData= () => {
    const[loggedInUser,setLoggedInUser]=useContext(UserContext)
    const[load,setLoad]=useState(false)
    // const[registered,setRegistered]=useState({})
    // const[use,setUse]=useState(volunteerTask)
    // const s=use.find(reg=>reg.id==registered.id)
const[user,setUser]=useState([])
    useEffect(()=>{
        fetch('http://localhost:9000/getVolunteerInfo?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[load])


    const handleDelete=(id)=>{
        fetch(`http://localhost:9000/deleteItem/${id}`,{
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
        <div>
             
                {
                    user.map(data=><Showitem datas={data} handleDelete={handleDelete}></Showitem>)
                } 
             
        </div>
    );
};

export default ShowingData;