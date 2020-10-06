import React, { useContext, useEffect } from 'react';
import { VolunteerContext } from '../../App';
import Header from '../Header/Header';
import VolunteerTask from '../VolunteerTask/VolunteerTask';
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



const Home = () => {

const[volunteer,setVolunteer]=useContext(VolunteerContext)

console.log(volunteer)

useEffect(()=>{
 fetch('http://localhost:9000/getVolunteer')
.then(res=>res.json())
.then(data=>setVolunteer(data))
},[])







    return(
<div>
    <Header></Header>
    <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
     <input type="text" name="" id="" style={{width:'650px'}}  placeholder="Search..."className="form--control"/>
    <button className="btn btn-primary" type="button" id="button-addon2">Search</button><br/><br/>
  

  
  
        
        <div className="row"style={{}} >
            {
                volunteer.map(volunteerTask=><VolunteerTask volunteerTask={volunteerTask}></VolunteerTask>)
            }
        </div>
        </div>
        
    );
};

export default Home;