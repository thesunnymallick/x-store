import React from 'react'

function Productscart({id, img, price, title, addToCardHandelr}) {
   
  return (
     <div className="productCart">
        <img src={img} alt={title} />
          <h5>$ {price}</h5>
          <p>{title}</p>
          <button onClick={()=>addToCardHandelr(id)}>Add To Cart</button>
     </div>
  )
}

export default Productscart