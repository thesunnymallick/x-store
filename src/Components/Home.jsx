import React, { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'
import { useDispatch } from "react-redux"
import Productscart from './Productscart';
import { toast } from 'react-hot-toast';
import { cartAction } from '../Redux/action';
import Error from './Error';
import Loader from './Loader';
function Home() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get('https://fakestoreapi.com/products')
        setProducts(data)
        setLoading(false)

      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }
    fetchProduct();
  }, [])

  if (error) {
    <Error message={"Something worng !!"} />
  }

  const addToCardHandelr = (id, quantity = 1) => {

    dispatch(cartAction(id, quantity))

    dispatch({ type: "CALCULATE_PRICE", })
    toast.success("Add To Cart")

  }

  return (
    <div className="home">
      {
        loading ? <Loader /> :
          (
            <>
              <h2>Products</h2>
              <div className="products">

                {
                  products.map((product) => (
                    <Productscart
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      img={product.image}
                      price={product.price}
                      addToCardHandelr={addToCardHandelr}
                    />
                  ))
                }
              </div>
            </>)
      }

    </div>
  )
}

export default Home