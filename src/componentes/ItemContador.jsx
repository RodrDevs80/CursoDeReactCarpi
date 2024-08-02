import React from 'react'

function ItemContador({contador,restarContador,sumarCantidad, manejarAgregar}) {
    

  return (
    <div>
        <div className='item-contador'>
          <button onClick={restarContador}>-</button>
          <p>{contador}</p>
          <button onClick={sumarCantidad}>+</button>
        </div>
        <button className='agregar-al-carrito'onClick={manejarAgregar}>Agregar al Carrito</button>
    </div>
  )
}

export default ItemContador