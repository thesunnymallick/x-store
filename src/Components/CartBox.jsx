import React from 'react'
import{AiFillDelete} from "react-icons/ai"

function CartBox({id, title,img, price, quantity,increment,decrement,deleteItem}) {
  return (
     <div className="cartBox">
        
        <div className='cart-Box1'>
            <img src={img} alt={title} />
              <div className="title">
              <p>{title}</p>
              </div>
        </div>
        <div>
            <h4> $ {price}</h4>
        </div>
        <div>
          <button onClick={()=>decrement(id)} >-</button>
          <p className='quantity'>{quantity}</p>
          <button onClick={()=>increment(id)}>+</button>
          <a onClick={()=>deleteItem(id)}><AiFillDelete/></a>

        </div>
         
     </div>
  )
}

export default CartBox