import React,{useEffect, useState} from 'react'
import './DashboardNav.css'
import {Link} from 'react-router-dom'






const DashboradNav = () => {

 const tok = localStorage.getItem('token')
  
  const[token,settoken] = useState(tok);

  const logout = (e) =>{
      localStorage.clear();
      window. location. reload()
  }


     return (

    <nav className='navbar navbar-expand-lg  navbar-dark bg-dark dashboard-brand-name'>
    <a  className='navbar-brand brand-name'  href=" ">SellandBuy</a>
    <button class="navbar-toggler collapsed"  type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
      <span class="icon-bar"></span>

  </button>
  
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <ul className="navbar-nav  dashboard-link-items ">
    <li className="nav-item dashboard-link">
    
        <Link className="nav-link dashboard-link-items" to='/createpost' >Post</Link>
      
    </li>
      <li className="nav-item dashboard-link ">
      <Link  className="nav-link dashboard-link-items" to='/' >Dashboard</Link>
    
      </li>
      <li className="nav-item dashboard-link ">
      <Link exact className="nav-link dashboard-link-items" to='/feed/Car' >Car</Link>
        
      </li>
      <li className="nav-item dashboard-link">
       <Link exact  className="nav-link dashboard-link-items" to='/feed/Bike' >Bike</Link>
      </li>
      <li className="nav-item dashboard-link">
       <Link className="nav-link dashboard-link-items" to='/feed/gadgets' >Gadgets</Link>
      </li>
    
      <li className="nav-item dashboard-link ">
       <Link  className="nav-link dashboard-link-items"  to='/feed/others' >Others</Link>
      </li>

              {token?<li  className="nav-item dashboard-link ">
         <a className="nav-link dashboard-link-items login-button" onClick={logout}>Logout</a>
      </li>  :  <div>  <li  className="nav-item dashboard-link ">
       <Link className="nav-link dashboard-link-items login-button" to='/login' >Login</Link>
      </li>
      <li  className="nav-item dashboard-link register-button-li ">
       <Link to='/register' className="nav-link dashboard-link-items register-button " >Register</Link>
      </li></div>}
      <br />
      <br />
    </ul>
   </div>
    </nav>
 
    )

}

export default DashboradNav
