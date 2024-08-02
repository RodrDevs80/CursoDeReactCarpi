/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

function Item({producto}) {
  return (
    <div className='producto'>
      <img src={producto.imagen} alt={producto.titulo} />
      <div className=''>
      <h4>{producto.titulo}</h4>
      <p>Precio: ${producto.precio}</p>
      <p>Categoria: {producto.categoria}</p>
      <Link className='ver-mas' to={`/item/${producto.id}`}>Ver Mas</Link>
      </div>
    </div>
  )
}

export default Item