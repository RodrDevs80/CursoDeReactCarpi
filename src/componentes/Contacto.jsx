import React from 'react';
import { useForm } from 'react-hook-form';

function Contacto() {
    const {register,handleSubmit}= useForm();
    const enviar =(data)=>{
        console.log(data);
    }

  return (
    <div className='container'>
        <h2 className='main-title'>Contacto</h2>
        <form className='formulario' onSubmit={handleSubmit(enviar)}>
        <input type="text" placeholder='Ingresa tu Nombre' {...register("nombre")}/>
        <input type="email" placeholder='Ingresa tu email'{...register("email")}/>
        <input type="phone" placeholder='Ingresa tu teléfono'{...register("telefono")}/>
        <button className='enviar' type='submit'>Enviar</button>
        </form>
        
    </div>
  )
}

export default Contacto