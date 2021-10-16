import React,{useEffect,useState} from 'react'
import { fetchProducts,fetchNumber } from '../../components/redux/Action';
import {connect} from 'react-redux'
import './Posts.css'
import { useParams} from 'react-router-dom'


const Posts = ({posts,fetchProducts,fetchNumber,number}) => {

    const[permission,setpermission] = useState(false)
    const {category} = useParams();

    useEffect(()=>{
        const token = localStorage.getItem('token')
        
        if(token){
        setpermission(true)    
        fetchProducts(category)
        fetchNumber()
        }
        
        console.log(permission);
    },[category])

 

    if(!permission){
         return <div className='error'>
             <h1>You Must Login to Proceed :)</h1>
             <img src={`/error.jpg`} alt="Error"  className='error-img'/>
         </div>
    }

     return <div className='post'>
            {/* <img src={`data:image/png;base64,${base64String}`} alt="" className='product-image'/> */}
          {posts.map((post)=>{
              const {username,price,_id,image,details,heading} = post;
       
               
               
               return <div key={_id} className='card'>
                <div>
                    <img src={`/uploads/${image}`} alt={image} className='product-image'/>
               
               </div>
                <div className='product-body'>

                 <h4 className='product-heading'>{heading}</h4>
                 <hr />
                <p className='user-name'> Posted by :{username}</p>
                <hr />
                <label htmlFor="details-title" className="details-title">DESCRIPTION:</label>
                <p className='details'> {details}</p>
                <hr />
                <p className='product-price'> Price :{price}</p>
                <hr />
                <p className='user-number btn dark btn-lg '><a href={'https://wa.me/'+number} className='contact-seller  btn btn-dark btn-lg' >Chat with Selller</a></p>
                </div>
              
                
              </div>
          })}

        </div>
       
    
   

    
   

    
    
}

const mapStateToProps = (state) =>{
    return{
        posts: state.reducer.posts,
        number: state.reducer.number
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        fetchProducts:(category)=>dispatch(fetchProducts(category)),
        fetchNumber:()=>dispatch(fetchNumber())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);



