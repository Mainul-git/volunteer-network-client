import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import tree from '../../logos/Group 1329.png'

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
      const history = useHistory();
      const location = useLocation();
      const { from } = location.state || { from: { pathname: "/" } };
      
      if(firebase.apps.length === 0){
          firebase.initializeApp(firebaseConfig);
      }
    const handleSignIn = () => {
      
        
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email} 
            setLoggedInUser(signedInUser)
            history.replace(from);
            // ...
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    return (
        <div>
        <img src={tree} style={{height:'100px'}}/>
  
      <p className="login"onClick={handleSignIn}><span><img src="https://img.icons8.com/color/48/000000/google-logo.png"/></span>Continue With Google </p>} 
        </div>
    );
};

export default Login;