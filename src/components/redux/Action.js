import { NUMBER_FETCHED, PRODUCTS_FETCHED } from "./ActionTypes";
import axios  from "axios";
import jwt from 'jsonwebtoken'


 const GotProducts = (posts)=>{
    return {
        type: PRODUCTS_FETCHED,
        payload: posts
    }
}
 const GotNumber = (number)=>{
    return {
        type: NUMBER_FETCHED,
        payload: number
    }
}

export const fetchProducts =   (category) =>{
    
    return  async  dispatch => {
            
            try {
                const posts = await axios.post('https://salty-forest-37625.herokuapp.com/getpost',{
             category:category
            }).then((response) =>  response.data);
                console.log(posts);
                dispatch(GotProducts(posts))    
                
            } catch (error) {
                console.log(error)
            }
            
             
            
            
    }
}

export const fetchNumber = ()=>{

    return  (dispatch =>{
        const token = localStorage.getItem('token')
        const user = jwt.decode(token)
        
        axios.post('https://salty-forest-37625.herokuapp.com/getnumber', {
            username:user.name
        }).then((res)=>{
            
            const number = res.data.phonenumber;
            
            dispatch(GotNumber(number))
            
        })
        .catch((err)=>{
            console.log(err);
        })
        
          
        
       
    })
}























// export const fetchProducts =   (category) =>{
    
//     return  async (dispatch => {
            
            
//              const posts = await axios.post('http://localhost:5000/getpost',{
//              category:category
//             }).then((response) =>  {
//                 const posts = response.data;
//                 console.log(posts);
//                 dispatch(GotProducts(posts))
//             })
//             .catch(error =>{
//                 const err_msg = error.message
//                 console.log(err_msg);
//             })
//     })
// }

// export const fetchNumber = ()=>{

//     return  (dispatch =>{
//         const token = localStorage.getItem('token')
//         const user = jwt.decode(token)
  
//           axios.post('http://localhost:5000/getnumber', {
//             username:user.name
//         }).then((res)=>{
            
//             const number = res.data.phonenumber;
            
//             dispatch(GotNumber(number))
            
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
        
       
//     })
// }