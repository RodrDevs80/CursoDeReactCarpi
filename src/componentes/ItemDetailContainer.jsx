import React, { useState,useEffect } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
//firebase
import { doc,getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

function ItemDetailContainer() {
  const [item,setItem]= useState(null);
  const id = useParams().id;
  useEffect(() => {
    const productoRef = doc(db,'Productos',id);
    getDoc(productoRef).then((resp)=>{
    setItem({...resp.data(),id:resp.id})
    })
  }, [id])
  
 
  return (
    item &&
   <ItemDetail  item={item}/>
  )
}

export default ItemDetailContainer