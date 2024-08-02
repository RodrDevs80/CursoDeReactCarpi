import React, { useContext } from 'react';
import { CardContext } from './CartContext';
import { Link } from 'react-router-dom';

function Carrito() {
    const {carrito,precioTotal,vaciar} = useContext(CardContext);
    
    
  return (
    <div className='container'>
        <h1 className='main-title'>Carrito</h1>
        {carrito.map((producto)=>
            <div key={producto.id}>
               <h3>{producto.titulo}</h3>
               <p>Precio por Unidad: ${producto.precio}</p>
               <p>Precio Total: ${producto.precio*producto.cantidad}</p>
               <p>Cantidad:{producto.cantidad}</p>
               <br />
            </div>
    )}
    {   
    //al ser toda la expresión verdadera no muestra nada!
     carrito.length > 0 && <h2>Precio Total:${precioTotal()}</h2>
    }
    {
     carrito.length > 0?
     <div className='botones'>
      <button className='vaciar-carrito' onClick={vaciar}>Vaciar Carrito</button>
      <Link className='btn-finalizar' to="/checkout">Finalizar Compra</Link>
     </div>
     :<h2 className='sin-producto'>No se agrego ningún producto al carrito😥</h2>
    }
    
    </div>
  )
}

export default Carrito