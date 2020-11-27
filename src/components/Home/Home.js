import React, { useContext, useEffect } from 'react';
import { VolunteerContext,UserContext } from '../../App';
import Header from '../Header/Header';
import VolunteerTask from '../VolunteerTask/VolunteerTask';



const Home = () => {

const[volunteer,setVolunteer]=useContext(VolunteerContext)
const [loggedInUser,setLoggedInUser]=useContext(UserContext)
console.log(volunteer)

useEffect(()=>{
 fetch('https://limitless-sands-81610.herokuapp.com/getVolunteer')
.then(res=>res.json())
.then(data=>setVolunteer(data))
},[])







    return(
<div>
    <Header loggedInUser={loggedInUser}></Header>
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