import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import imgCarrito from '../img/carrito.svg'
import { CardContext } from './CartContext';

function CartWidget() {
   const {cantidadEnCarrito}= useContext(CardContext);
  return (
    <div className='contenedor-carrito'>
        <li><Link className='menu-link' to="/carrito"><img className='carrito' src={imgCarrito} alt="carrito" /></Link></li> 
        <p>{cantidadEnCarrito()}</p>    
    </div>
  )
}

export default CartWidget