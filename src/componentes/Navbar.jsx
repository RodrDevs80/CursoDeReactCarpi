/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../main.css';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function Navbar() {
  return (
    <nav className='navbar'>
       <Link to="/" className='logo'><h1>PracticaShop</h1></Link> 
       <ul className='menu'>
           <li><Link className='menu-link' to="/">Inicio</Link></li>
           <li><Link className='menu-link' to="/nosotros">Nosotros</Link></li>
           <li><Link className='menu-link' to="/productos">Productos</Link></li>
           <li><Link className='menu-link' to="/productos/pantalones">Pantalones</Link></li>
           <li><Link className='menu-link' to="/productos/buzos">Buzos</Link></li>
           <li><Link className='menu-link' to="/productos/remeras">Remeras</Link></li>
           <li><Link className='menu-link' to="/contactos">Contacto</Link></li>  
           <CartWidget/>         
       </ul>
    </nav>
  )
}

export default Navbar