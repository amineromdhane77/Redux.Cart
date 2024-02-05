import React from 'react';
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch ,useSelector} from 'react-redux';
import { addItem } from './CartSlice';
import { removeItem } from './CartSlice';
const Products = () => {
    const [listProduct,setListProduct]=useState([])
    const dispatch=useDispatch()
    const cartItems =useSelector(state=>state.cart)
    useEffect(()=>{
fetch('https://fakestoreapi.com/products')
.then(
   data=>data.json()
).then(
    respanse=>setListProduct(respanse)
).catch((err)=>{
    console.log(err)
})
    },[])
   const addToCart=(input)=>{
    dispatch(addItem(input))
   }
   const removeItemToCart =(id)=>{
    dispatch(removeItem(id))
   }
  return (
    <div className='container my-3 bg-dark'>
     <h2>Products List</h2>
     <div className='row'>
    {
        listProduct.map((product)=>{
            return(
                <div key={product.id} className='col-lg-3 mb-3 text-center'>
                <Card style={{ width: '270PX' }} className='card mb-2'>
                <Card.Img variant="top" src= {product.image} style={{ width: '100PX', height:'120PX' }} />
                <Card.Body>
                  <Card.Title> {product.title} </Card.Title>
                  <Card.Text>
                  
                   <div className='h3 text-light border border-dark bg-danger rounded-2'>
                   {product.price} $
                   </div>
                  
                  </Card.Text>
                  <div className='card-footer'>
                  {cartItems.some(({id})=>id===product.id) ? ( <Button  variant="danger" onClick={()=>removeItemToCart(product.id)} >Remove Item</Button>) :
                  <Button  variant="primary" onClick={()=>addToCart(product)} >Add to cart</Button>
                }
                  </div>
                </Card.Body>
              </Card>
              
  </div>

                
              
            )
        })
    }
     </div>
    </div>

  );
}

export default Products;
