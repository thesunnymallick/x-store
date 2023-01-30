import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import CartBox from './CartBox'

function Cart() {
  const {cartItems}=useSelector((state)=>state.cart)
  const {subTotal,shiping,tax,total} =useSelector((state)=>state.cart)
  
  const dispatch=useDispatch()

   const increment=(id)=>{
    dispatch({
      type:"ADD_TO_CART",
      payload:{data:{id}}
    })
    dispatch(
      {
        type:"CALCULATE_PRICE",
   
      }
   )
   }
   const decrement =(id)=>{

     dispatch(
        {
          type:"DECREMNET",
          payload:id
        }
     )
     dispatch(
      {
        type:"CALCULATE_PRICE",
   
      }
   )

    
   }

   const deleteItem=(id)=>{
    

    dispatch(
      {
        type:"REMOVE_TO_CART",
        payload:id
      }
   )
   dispatch(
    {
      type:"CALCULATE_PRICE",
 
    }
 )


   }

  return (
     cartItems.length >0 ? (<>
      <div className="cart">
       <div className="cartItems">
       {
        cartItems.map((i)=>(
         <CartBox
         key={i.data.id}
         id={i.data.id}
         title={i.data.title}
         img={i.data.image}
         price={i.data.price}
         quantity={i.quantity}
         increment={increment}
         decrement={decrement}
         deleteItem={deleteItem}
         
         />
        ))
      }

       </div>
     <div className="priceBox">
      
       <div className='total'>
         <h4>SubTotal</h4>
         <p>$ {subTotal}</p>
       </div>

       <div className='total'>
         <h4>Shiping Charge</h4>
         <p>$ {shiping}</p>
       </div>
       <div className='total'>
         <h4>Tax</h4>
         <p>$ {tax}</p>
       </div>
       <div className='total'>
         <h4>Total</h4>
         <p>$ {total}</p>
       </div>
     </div>

    </div>
      </>) : 
      <div style={{ 
        width:"100%",
        height:"100vh",
        display:"flex", alignItems:"center", justifyContent:"center"}}>
            <h4  style={{fontSize:"2.20rem"}}>No Items Select</h4>
      </div>
 
  )
}

export default Cart