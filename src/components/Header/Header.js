import React from 'react';
import { Link } from 'react-router-dom';
import tree from '../../logos/Group 1329.png'
const Header = () => {
    return (
        <div>
            <img style={{height:'100px',flooat:'left'}} src={tree}/>
        <div style={{float:'right'}}>
            <ul float="right">
                <li>Home</li>
                <li>Donations</li>
                <li>Event</li>
                <li>Blog</li>
            </ul>
            <button  style={{float:'right'}} type="button"className="btn btn-primary">Register</button>
      <Link to="/emailShow">  <button style={{float:'right'}} type="button" className="btn btn-dark">Admin</button></Link>
        </div></div>
    );
};

export default Header;