import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import ShowingData from './components/ShowingData/ShowingData';
import EmailShow from './components/EmailShow/EmailShow';
import NoMatch from './components/NoMatch/NoMatch';
import Donation from './components/Donation/Donation';


export const UserContext = createContext();
export const VolunteerContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
const [volunteer,setVolunteer]=useState([])
  return (
    <div className="App">
<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
  <VolunteerContext.Provider value={[volunteer,setVolunteer]}>
<Router>
  <Switch>
    
    <Route  exact path="/home">
      
      <Home></Home>

    </Route>
    <Route exact path="/login">
      <Login></Login>
    </Route>
    <PrivateRoute path="/register/:id">
      <Register></Register>

    </PrivateRoute>
    <PrivateRoute path="/donation">
      <Donation></Donation>

    </PrivateRoute>
    <Route path="/showData">
      <ShowingData></ShowingData>


    </Route>
    <PrivateRoute path="/emailShow">
      <EmailShow></EmailShow>
    </PrivateRoute>
    
    <Route path="/">
      <Home></Home>
    </Route>
    <Route path="*">
      <NoMatch></NoMatch>
    </Route>
  </Switch>
</Router></VolunteerContext.Provider>
</UserContext.Provider>
    </div>
  );
}

export default App;
 