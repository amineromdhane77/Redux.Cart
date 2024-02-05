import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const cartItems =useSelector(state=>state.cart)
  return (
    <div className='container fluid bg-primary py-2'>
    <div className='container'>
    <div className='d-flex justify-content-between '>
    <div className='text-white h4'>E-Bazzar</div>
    <div>
    <Link to={'/mycart'}>
    <button className='btn btn-danger'>MyCart<span className='badges rounded-pill bg-warning px-2 '> { cartItems.length} </span></button>
    </Link>
    </div>
    </div>
    </div>
      
    </div>
  );
}

export default Navbar;
