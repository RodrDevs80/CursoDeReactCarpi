import React, { useEffect, useState } from 'react';
import ItemList from '../componentes/ItemList'
import { useParams } from 'react-router-dom';
//firebase
import { collection,getDocs,query,where } from 'firebase/firestore';
import { db } from '../firebase/config';

function ItemListContainer() {
const [productos,setProductos]=useState([]);
const [titulo,setTitulo]= useState('Productos');
const categoria = useParams().categoria;
//firebase
 useEffect(()=>{
   const productosRef = collection(db,"Productos");

  const q= categoria? query(productosRef,where("categoria","==",categoria)):productosRef;
  categoria? setTitulo(categoria):setTitulo('Productos');

   getDocs(q)
   .then((resp)=>{
     setProductos(resp.docs.map((doc)=>{
         return {...doc.data(), id:doc.id};
        }));  
   });
    
 },[categoria])


  return (
    <div>
        <ItemList productos={productos} titulo={titulo} />
    </div>
  )
}

export default ItemListContainer