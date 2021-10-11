import React,{useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import "./Register.css"
const Register = ({isUser}) => {
    const [username,setusername] = useState('');
    const[password,setpassword]  = useState('');
    const[userStatus,setuserStatus] = useState('');
    const [phoneNumber,setphoneNumber] = useState('');
    
    const history =useHistory();


    const handleSubmit= (e)=>{
        e.preventDefault()
        console.log(username,password,phoneNumber,userStatus);

        axios.post('https://salty-forest-37625.herokuapp.com/register',{
            username,
            password,
            userStatus,
            phoneNumber,         
        }).then((res)=>console.log(res.data))
        .catch((err)=>{console.log(err)})
        history.push('/login')
        
    }


    return <>
    <div className='register-page'>
        <form onSubmit={handleSubmit} className="register-form">
            <div  className="register-form-top">
            <input 
            type="text"
             name="userName" 
             value={username} 
             placeholder='Username'
             onChange={(e)=>{setusername(e.target.value)}} />
            <input 
            type="password" 
            name="password" 
            value={password} 
            placeholder ='Password'
            onChange={(e)=>{setpassword(e.target.value)}} />
            <input type="tel"
             name="phoneNumber" 
             value={phoneNumber} 
             placeholder= 'Phone Number'
             onChange={(e)=>{setphoneNumber(e.target.value)}} />
            </div>
            
            {/* <div className='radios-seller'>
            <p>how do you want to use this platform:</p>
            <input type="radio" id ='seller' name="status" value={userStatus} onClick={(e)=>{setuserStatus(e.target.id)}} />
             <label htmlFor="seller">Seller</label><br/>
             </div>
             <div>
             <input type="radio" id ='buyer' name="status" value={userStatus} onClick={(e)=>{setuserStatus(e.target.id)}} />
            <label htmlFor="buyer">Buyer</label>
            </div> */}

            <button type='submit' className='register btn btn-lg btn-primary btn-block' >Register</button>
            {/*  eslint-disable-next-line */}
            <p className="register-bottom">Already have an account? <a  href='/login'>Log In</a> </p>
        </form>
    </div>

</>}

export default Register;
