import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { removeItem } from './CartSlice';
const MyCart = () => {
    const cartItems =useSelector(state=>state.cart)
    const dispatch=useDispatch()
    const removeCart=(id)=>{
        dispatch(removeItem(id))
    }
  return (
    <div >
    <div className='text-center h4'>My Cart</div>
    <div>
    <Link to={'/'}>
    <button className='btn btn-success my-3'>Continue to Shopping</button>
    </Link>
    </div>
    <table className='table table-bordered'>
    <tr className='text-center text-white bg-secondery'>
    <th>Cart Items</th>
    <th>Action</th>
    </tr>
    {
        cartItems.length > 0 ? cartItems.map((item)=>{
            return(
                <tr>
                <td>
                <Card.Img variant="top" src= {item.image} style={{ width: '100PX', height:'120PX' }} />
                <Card.Title> {item.title} </Card.Title>

                </td>
                <td>
                <Link className='btn btn-danger bg-danger' onClick={()=>removeCart(item.id)} >Remove Item</Link>
                </td>
                </tr>
            )
        }):(
            <tr>
            <td  colSpan='2' className='text-center py-3 '>
            Reseult No Found
            </td>
            </tr>
        )
    }
    </table>
    </div>
  );
}

export default MyCart;
