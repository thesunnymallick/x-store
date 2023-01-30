import React from 'react'
import {Link} from "react-router-dom"
import {FaShopify} from "react-icons/fa"
import { useSelector } from 'react-redux'
function Header() {

  const {cartItems}= useSelector((state)=>state.cart)
  return (
     <div className="nav">
      <h2>Xstore</h2>

       <div>
        <Link to="/">Home</Link>
        <Link to="/cart">
          <FaShopify/>
          <p>{cartItems.length}</p>
        </Link>
       </div>
     </div>
  )
}

export default Header