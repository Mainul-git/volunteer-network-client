import React from 'react';
import {useContext} from 'react';
import './Donation.css';
import {UserContext} from"../../App";


const Donation = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)

    const donation=()=>{
        alert('Thanks for donating.')
    }
    return (
        <div className="donation-background">
            <div><h1 style={{color:"white"}}>Are you ready for Donation ?</h1></div>

            <form  onSubmit={donation} className="form-container" >
    <div className="md-form form-sm" > <input type="text" value={loggedInUser.name} name="name"id="inputSMEx" placeholder="Full Name"className="form-control form-control-sm w-10" required/></div><br/>
    <input type="text"name="email" value={loggedInUser.email} className="form-control form-control-sm w-10"    placeholder="Email "  required/> 
 <br/> <div className="md-form form-sm"><input type="date"name="date" placeholder="Date" className="form-control form-control-sm w-10" required /></div><br/>
 
<br/>
<input type="number" min="10" className="mb-5 form-control-sm w-100" placeholder="Price in $ (Less than 10$ is not acceptable)" required/>
<input type="submit" className="btn btn-danger submit-button "/>

 </form>
        </div>
    );
    }

export default Donation;