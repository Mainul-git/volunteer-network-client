import React, { useEffect, useState } from 'react';
import './Sidebar.css'

const Sidebar = () => {
    const[admin,setAdmin]=useState(true)
    const getEmail= sessionStorage.getItem('email')

    useEffect(() => {
        fetch(`https://limitless-sands-81610.herokuapp.com/check-admin`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: getEmail }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.admin === true) {
              setAdmin(true);
            } else if (data.admin === false) {
              setAdmin(false);
            }
          });
      }, []);

    return (
        <div  className="sidebar d-flex flex-column justify-content-start  py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
             {
                admin === true ? <div> <li>Volunteer RegisterList</li>
                   <li>Add Event</li>
                   </div>
                   :' '
               } 
            
       {admin === false ? <li >Your list</li> : ' ' }    
  
            </ul>
        </div>
    );
};

export default Sidebar;