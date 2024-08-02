import React, { useState } from "react";
import { useContext } from "react";
import { CardContext } from "./CartContext";
import { useForm } from "react-hook-form";
//firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

function Checkout() {
  const [pedidoId, setPedidoId] = useState("");
  const { carrito, precioTotal, vaciar } = useContext(CardContext);
  const { register, handleSubmit } = useForm();
  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      precioTotal: precioTotal(),
    };

    const pedidosRef = collection(db, "Pedidos");
    addDoc(pedidosRef, pedido)
    .then((doc) => {
        setPedidoId(doc.id);
        vaciar();
    }
  );
  };

  if (pedidoId) {
    return (
      <div className="container">
        <h1 className="main-title">Muchas gracias por su compra!!!😀</h1>
        <p>El numero de tu pedido es: {pedidoId}</p>
      </div>
    );
  }
  return (
    <div className="container">
      <h2 className="main-title">Finalizar Compra</h2>
      <form className="formulario" onSubmit={handleSubmit(comprar)}>
        <input
          type="text"
          placeholder="Ingresa tu Nombre"
          {...register("nombre")}
        />
        <input
          type="email"
          placeholder="Ingresa tu email"
          {...register("email")}
        />
        <input
          type="phone"
          placeholder="Ingresa tu teléfono"
          {...register("telefono")}
        />
        <button className="enviar" type="submit">
          Comprar
        </button>
      </form>
    </div>
  );
}

export default Checkout;
