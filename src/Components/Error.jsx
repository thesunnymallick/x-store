import React from 'react'

function Error({message}) {
  return (
    <div style={{ 
        width:"100%",
        height:"100vh",
        display:"flex", alignItems:"center", justifyContent:"center"}}     className='error'>
        <h4 style={{fontSize:"2.20rem"}}>{message}</h4>
    </div>
  )
}

export default Error