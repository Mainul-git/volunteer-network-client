import React, { useContext, useEffect } from 'react';
import { VolunteerContext,UserContext } from '../../App';
import Header from '../Header/Header';
import './Home.css'
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
    <div className="">
     <input type="text" name="srch" id="srch" list="datalist1" style={{width:'650px'}}   placeholder="Search..."className="form--control"/>
     <datalist id="datalist1">
         <option value="Canada"></option>
         <option value="Bangladesh"></option>
         <option value="India"></option>
         <option value="Uruguay"></option>
         <option value="China"></option>
         <option value="Bankok"></option>
         <option value="oggy"></option>
         <option value="Tom"></option>
         <option value="Jerry"></option>
         <option value="Hong Kong"></option>
     </datalist>
      <button className="btn btn-primary ml-2" type="button" id="button-addon2">Search</button><br/><br/>
      </div>

  
  
        
        <div className="row"style={{}} >
            {
                volunteer.map(volunteerTask=><VolunteerTask volunteerTask={volunteerTask}></VolunteerTask>)
            }
        </div>
        </div>
        
    );
};

export default Home;