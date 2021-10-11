import React,{useEffect, useState} from 'react';
import jwt from 'jsonwebtoken'
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { useParams} from 'react-router-dom'


import Posts from '../Post/Posts';
import DashboradNav from '../DashboardNav/DashboradNav';


const Home = () => {

    const {category} = useParams();

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
    // }, [history,category])



         return <>
        <DashboradNav />
        <Posts  category ={category}/>
            
        </>
    







  
   

    

   
}


export default Home;
