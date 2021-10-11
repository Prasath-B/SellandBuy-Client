import React,{useEffect, useState} from 'react';
import jwt from 'jsonwebtoken'
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import DashboradNav from './DashboardNav/DashboradNav';
import Dashboard from './Dashboard/Dashboard';



const Home = () => {

    

    // const history = useHistory()
    // const [privacy,setprivacy] = useState(false);


    // useEffect(() => {
    //   const token = localStorage.getItem('token');
    //   if(token){
    //       const user = jwt.decode(token)
    //       if(!user){
    //           localStorage.removeItem('token')
                
    //       }else{
    //           setprivacy(true);
              
    //       }
    //   }
    // }, [history])


 
         return <>
        <DashboradNav />
        <div className='home'>
        <Dashboard />
        {/* <Menu /> */}
        </div>
    
            
        </>
    







  
        return (
        
        <div>
            You have no permission
        </div>
    )

    

   
}




export default Home;
