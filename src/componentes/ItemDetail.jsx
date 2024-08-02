import React, {useContext, useState} from 'react'
import ItemContador from './ItemContador'
import { CardContext } from './CartContext';

function ItemDetail({item}) {
  
  const {carrito,manejarAgregar} = useContext(CardContext);
 console.log(carrito);
 
  const[contador,setContador]= useState(1);
    
    const sumarCantidad = ()=>{
        contador<item.stock && setContador(contador+1)
    }
    const restarContador=()=>{
       contador>1 && setContador(contador-1);
    }
    
    
  return (
    <div className='container'>
        <div className='producto-detalle'>
         <img src={item.imagen} alt={item.titulo} />
         <div className=''>
              <h3 className='titulo'>{item.titulo}</h3>
              <p className="descripcion">{item.descripcion}</p>
              <p className="categoria">{item.categoria}</p>
              <p className="precio">Precio: ${item.precio}</p>
              <ItemContador 
              contador={contador}  
              sumarCantidad={sumarCantidad} 
              restarContador={restarContador} 
              manejarAgregar={()=>{manejarAgregar(item,contador)}} />
         </div>
        </div>
    </div>
  )
}

export default ItemDetail