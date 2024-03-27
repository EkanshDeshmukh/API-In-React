import React, { useState } from 'react'
import axios from 'axios'

function App() {

  const [product, setProduct] = useState([])

  const getProducts = () => {
    const api = "https://fakestoreapi.com/products"
    axios.get(api)
      .then(product => {
        console.log(product);
        setProduct(product.data)
      })
      .catch(err => { console.log(err) })
  }
  const addProducts = () => {
    const api = 'https://fakestoreapi.com/products'
    axios.post(api, {
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    }).then(res => console.log(res))
      .catch(err => console.log(err))

  }

  return (
    <div className='p-[5%]'>
      <button onClick={getProducts} className='bg-red-300 px-4 rounded py-3'>Call API Products</button>
      <br /><br />
      <button onClick={addProducts} className='bg-red-300 px-4 rounded py-3'>All Products API</button>
      <hr className='mt-10' />
      <ul>
        {product.length > 0 ? product.map(p => <li key={p.id} className='rounded  mt-5 p-5 bg-red-200' >{p.title}</li>) : <h1>Loading ....</h1>}
      </ul>
       
    </div>
  )
}

export default App