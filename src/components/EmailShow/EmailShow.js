import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import EmailChild from '../EmailChild/EmailChild';
import Sidebar from '../Sidebar/Sidebar';

const EmailShow = () => {

    const[userPanel,setUserPanel]=useState([])
    const[adminPanel,setAdminPanel]=useState([])
    const[admin,setAdmin]=useState(true)
    const[loaded,setLoaded]=useState(false)
    const[load,setLoad]=useState(false)
    const[loggedInUser,setLoggedInUser]=useContext(UserContext)
    const getEmail= sessionStorage.getItem('email')

    useEffect(()=>{
        fetch('https://limitless-sands-81610.herokuapp.com/getVolunteerInfo?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>{setUserPanel(data)
        if(!data){
            alert('Go to the home page and Select a task')
        }
    }
        )
  
    },[load])


    useEffect(()=>{
        fetch('https://limitless-sands-81610.herokuapp.com/getVolunteerInfos')
       .then(res=>res.json())
       .then(data=>setAdminPanel(data))
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
        <div className="row">
            <div className="col-md-3 col-3"><Sidebar/></div>
            <div className="col-md-8 col-9 ">
            <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Name</th>
                                <th>Email Id</th>
                                <th>Registered date</th>
                                <th>Registered task</th>
                                <th>Delete</th>
                                </tr>
                            </thead>
                            {admin===true && <tbody>{  adminPanel.map(data=><EmailChild data={data} handleDelete={handleDelete}></EmailChild>)
                           }  </tbody>}
                             {admin===false && <tbody>{  userPanel.map(data=><EmailChild data={data} handleDelete={handleDelete}></EmailChild>)
                           }  </tbody>}
                       
                            </Table>    
              
            
            </div>
        </div>
    );
};

export default EmailShow;