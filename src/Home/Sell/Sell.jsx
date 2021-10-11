import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import jwt  from 'jsonwebtoken'
import './Sell.css'
import CurrencyInput from 'react-currency-input-field'

const Sell = () => {

    const[permission,setpermission] = useState(false)

    const history = useHistory();

      useEffect(()=>{
        const token = localStorage.getItem('token')
        
        if(token){
        setpermission(true)    
       
        }
        
        
    },[])


    const token = localStorage.getItem('token');
    
    let name;
    if(token){
        const decodedToken = jwt.decode(token);
        name = decodedToken.name
    }
    

    const [image,setImage] = useState("")
    const [post,setpost] = useState({
        username: name,
        heading:'',
        details: '',
        price: '',
        category:'',

    })
    

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const formData =new FormData();
        
        console.log(post);
        formData.append('file',image)
        formData.append('username',post.username)
        formData.append('heading',post.heading)
        formData.append('details',post.details)
        formData.append('price',post.price)
        formData.append('category',post.category)
      
        console.log(formData)
    
         await axios.post('https://salty-forest-37625.herokuapp.com/post', formData)
        .then ((res)=>console.log(res))
        .catch((err)=>console.log(err))
         history.push(`/feed/${post.category}`)       
    }

    // const handleImage = async(e)=>{
    //     e.preventDefault();    
    //     const posts =new FormData();
        
      
    //     posts.append('file',post.image)
    //     posts.append('object',post)
    //     await axios.post('http://localhost:5000/image',posts)
    //     .then(res => console.log(res))
    //     .catch(err=>console.log(err))
    // }


       if(!permission){
         return <div className='error'>
             <h1>You Must Login to Proceed :)</h1>
             <img src={`/error.jpg`} alt="Error"  className='error-img'/>
         </div>
    }

 

    return <> 
    <div className = 'sell'>
        <form className='sell-form' encType="multipart/form-data">
            <label htmlFor="heading" >Title</label>
            <input 
            type="text" 
             name='heading' 
             value={post.heading} 
             onChange={(e)=>setpost({...post,heading:e.target.value})} 
             required
              />

            <label htmlFor="details">Description</label>

            <textarea 
            name="details"  
            cols="50" rows="10" 
            className ='textarea'
            value={post.details} 
            onChange={(e)=>setpost({...post,details:e.target.value})} required>

            </textarea>
            <label htmlFor="price">Price</label>
          <CurrencyInput
            id="input-example"
            name="input-name"
            placeholder="Please enter a number"
            prefix='₹'
            decimalsLimit={2}
            defaultValue={post.price} 
             onValueChange={(value) =>setpost({...post,price:value})}
            />

            <label htmlFor="Category">Choose a category</label>
            <select name="category" className='select' onChange={(e)=>setpost({...post,category:e.target.value})} value ={post.category} required>
                <option >select category</option>
                <option >Car</option>
                <option >Bike</option>
                <option >gadgets</option>
                <option >others</option>
            </select>
   
          <input type="file" 
            name="file" 
            onChange={(e)=>setImage(e.target.files[0])}
            // onChange={(e)=>setpost({...post,image:e.target.files[0]})}
              
            />
          
            <button  type ='submit' className='btn btn-dark btn-lg' onClick ={handleSubmit}>Submit</button>
        </form>

    </div>
    
    
    </>
}

export default Sell



         {/* <FileBase 
            type='file'
            multiple ={false}
            
            onDone = {(base64)=>setpost({...post,image:base64})}
        
            /> */}
            {/* 
        <form action="">
           
           <input type="file" 
            name="image" 
            
            onChange={(e)=>setImage(e.target.files[0])}
              
            /> 
            <input type="submit" onClick={handleImage} />
        </form> */}