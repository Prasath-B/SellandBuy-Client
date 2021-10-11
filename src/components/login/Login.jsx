import React,{useState} from 'react';
import axios from 'axios';
import "./Login.css";
import { useHistory } from 'react-router';





const Login = ({isUser}) => {

    const [username,setusername] = useState('');
    const [password,setpassword] = useState('')
    const [result,setresult] = useState('');
    const[user,setuser] = useState('');
    const [token,settoken] = useState('')

    const history = useHistory()

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("https://salty-forest-37625.herokuapp.com/login",{
            username,
            password
        })
        .then((res)=> {
            setresult(res.data.result)
            setuser(res.data.user)
            settoken(res.data.token)
            console.log(res);
            if(res.data.result === 'success'){
                localStorage.setItem('token',res.data.token)
                history.push('/')
            }else{
                console.log(res)
                history.push('/')
            }
        })
    }






    return  <> 
             <div className='login-page' >
            <form className="login-form">
                <input 
                type="text" 
                name="username" 
                value ={username} 
                placeholder='username'
                onChange={(e)=>{setusername(e.target.value)}} />
                <input
                 type="password" 
                 name ="password" 
                 value ={password}
                 placeholder='password'
                 onChange={(e)=>{setpassword(e.target.value)}}/>
                  <button type='submit' className='login btn btn-lg btn-dark' onClick={handleSubmit}>Log In</button>
                {/*  eslint-disable-next-line */}
                <p className='login-bottom'>do not have an account? <a  href='/register'>Sign up</a> </p>
            </form>
           
        </div>
        <div></div>
    
    
    </>
   

}



export default  Login;
