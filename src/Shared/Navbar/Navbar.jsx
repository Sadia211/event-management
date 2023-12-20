import React,{useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {AuthContext} from '../../../src/pages/Provider/AuthProvider';
import Login from '../../pages/Login/Login'
 import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import './styles.css';
const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)
  const handleSignout =()=>{
    logOut()
    .then()
    .catch();
  }
    const navLinks=<>
   
     <li>  
     <nav id="sidebar">
     <NavLink to="/" className="nav-link" > Home</NavLink></nav></li>   
       <li><NavLink to='/about' className="nav-link" >About</NavLink></li> 
       <li> <NavLink to='/career' className="nav-link">Contact us</NavLink></li>
      
      
    
    
    </>
    return (
        <div className="navbar bg-gray-100 font-serif text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             
              <li><a>Item 3</a></li>
            </ul>
          </div>
         
        </div>
        <div className="navbar-center hidden lg:flex">
         <ul className='menu menu-horizontal px-1'>
          
            {navLinks}
          
        
         </ul>
           
        
        </div>
        <div className="navbar-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        
        </div>
        </div>
{/**if the user is already logged in then show sign out else show login */}

        {
          user?
          <button onClick={handleSignout} className='btn'>Sign out</button>
          :
<Link to ='/login'><button className='btn px-3 bg-gray-100 text-black hover:bg-gray-100 hover:underline'>Login</button></Link>
        }
        
          
        </div>
      </div>
  );
};


export default Navbar;