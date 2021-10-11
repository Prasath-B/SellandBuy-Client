import React,{useEffect, useState} from 'react'
import './DashboardNav.css'







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
        <a className="nav-link dashboard-link-items" href="/createpost">Post</a>
      </li>
      <li className="nav-item dashboard-link ">
        <a className="nav-link dashboard-link-items" href="/">Dashboard</a>
      </li>
      <li className="nav-item dashboard-link ">
        <a className="nav-link dashboard-link-items" href="/feed/Car">Car</a>
      </li>
      <li className="nav-item dashboard-link">
        <a className="nav-link dashboard-link-items" href="/feed/Bike">Bike</a>
      </li>
      <li className="nav-item dashboard-link">
        <a className="nav-link dashboard-link-items" href="/feed/gadgets">Gadgets</a>
      </li>
    
      <li className="nav-item dashboard-link ">
        <a className="nav-link dashboard-link-items" href="/feed/others">Others</a>
      </li>

              {token?<li  className="nav-item dashboard-link ">
         <a className="nav-link dashboard-link-items login-button" onClick={logout}>Logout</a>
      </li>  :  <div>  <li  className="nav-item dashboard-link ">
         <a className="nav-link dashboard-link-items login-button" href="/login">Login</a>
      </li>
      <li  className="nav-item dashboard-link register-button-li ">
         <a className="nav-link dashboard-link-items register-button " href="/register" >SignUp</a>
      </li></div>}
      <br />
      <br />
    </ul>
   </div>
    </nav>
 
    )

}

export default DashboradNav
