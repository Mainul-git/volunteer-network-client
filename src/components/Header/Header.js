import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import tree from '../../logos/Group 1329.png';
import{useState}from 'react'


const Header = ({loggedInUser}) => {


const[logging,setLogging]=useState(false)

  const history=useHistory()

  

  const logIn=()=>{
    history.push("/login")
  }


  
  const logOut=()=>{
   sessionStorage.clear()
   setLogging(true)
  }
    return (
        
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <img style={{height:'50px'}} src={tree}/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
     <Link to="/home" className='text-secondary' style={{textDecoration:'none'}}><li class="nav-item active mr-2">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li></Link> 
     <Link to="/donation" className="text-secondary"style={{textDecoration:"none"}}> <li class="nav-item mr-2" >
        <a class="nav-link" href="#">Donations</a>
      </li>
      </Link>
      
   <Link className='text-secondary' style={{textDecoration:'none'}}  to="/emailShow"> 
      <li class="nav-item mr-2 mt-2">
       Dashboard
      </li>
       </Link>
       {sessionStorage.length == 0 ?  <li class="nav-item mr-2">
        <button className="btn btn-success" onClick={logIn}>Sign In</button></li>: <li  class="nav-item  mr-2 " >
<button onClick={logOut}  id="logOut" class=" btn  btn-danger " href="#">Sign Out</button>
</li> }
      
      
     
  {/* {!sessionStorage.length == 0 ? <li  class="nav-item  mr-2 " >
       <button onClick={logOut}  id="logOut" class=" btn  btn-danger " href="#">Log Out</button>
      </li> : logging ===true? " ":<li  class="nav-item  mr-2 " >
       <button onClick={logOut}  id="logOut" class=" btn  btn-danger " href="#">Log Out</button>
      </li> }  */}
      {/* {sessionStorage.length == 0 &&
      
      logging===false ? " ":" "
      }
      {!sessionStorage.length == 0 &&
logging === false? <li  class="nav-item  mr-2 " >
<button onClick={logOut}  id="logOut" class=" btn  btn-danger " href="#">Log Out</button>
</li>:''
      } */}
    </ul>
    
  </div>
</nav>
       
      
    );
};

export default Header;