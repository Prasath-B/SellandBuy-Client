import { FETCH_PRODUCTS_REQUESTED,PRODUCTS_FETCHED,NUMBER_FETCHED } from "./ActionTypes";

const initialState   = {
    loading:false,
    posts:[],
    error:'',
    number:''
}


const reducer = (state = initialState,action) =>{
    switch(action.type){
        
        case FETCH_PRODUCTS_REQUESTED: 
            return{
                ...state,
                loading:true
            }

        case PRODUCTS_FETCHED: 
           
            return{
                 ...state,
                loading:false,
                posts: action.payload,
                error: ''
            }
        case NUMBER_FETCHED: 
            console.log(action.payload);
            return{
                 ...state,
                loading:false,
                number: action.payload,
                error: ''
            }

        default:return state;
    }
}

export default  reducer;