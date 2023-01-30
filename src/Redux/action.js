import axios from "axios"

export const cartAction=(id, quantity)=>async(dispatch)=>{

    const {data}=await axios.get(`https://fakestoreapi.com/products/${id}`)
   

    dispatch({
        type:"ADD_TO_CART",
        payload:{data,quantity,}
    })

    dispatch({
        type:"CALCULATE_PRICE",
      
    })

 }