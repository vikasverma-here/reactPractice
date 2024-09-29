import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './product.css'
function Product() {
    const navigate = useNavigate()
    const [cartDetails , setcartDetails]=useState([])
   
    function handlechange(){
        navigate("/")
    }
   async function cartsitems(){
        const json = await fetch('https://fakestoreapi.com/products')
        const data = await json.json()
        setcartDetails(data)
        console.log(data)
    }
    useEffect(()=>{
        cartsitems()
    },[])
  
  return (
    <div>
      {/* <h1>produnct is here</h1> */}
      <button onClick={handlechange} ><h1>GO BACK TO HOME</h1></button>
       <div className="container">
           {cartDetails.length > 0 ? (
            cartDetails.map((product, index) => (
              <div key={index} className="product">
                 
                <img src={product.image} alt={product.title}  /> 
                <h1>{product.title}</h1> 
                <p>{product.description}</p>
                <h3>{product.category}</h3>
                <p>{product.rating.rate} Stars,   Toral:{product.rating. count}</p>
                <h1>${product.price}</h1>
              </div>
            ))
          ) : (
            <h1>Loading products...</h1>  // Loading message while data is being fetched
          )}
      
        </div>
       </div>
    
  )
}

export default Product
