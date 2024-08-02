import { createContext, useEffect, useState } from "react";

export const CardContext = createContext();

const carritoInicial= JSON.parse(localStorage.getItem('carrito')) || [];

export const CartProvider = ({children}) => {
  const [carrito, setCarrito] = useState(carritoInicial);

  const manejarAgregar = (item, contador) => {
    const itemAgregado = { ...item, cantidad: contador };
    const nuevoCarrito = [...carrito];
    const estaProducto = nuevoCarrito.find(
      (producto) => producto.id === itemAgregado.id
    );

    if (estaProducto) {
      estaProducto.cantidad += contador;
    } else {
      nuevoCarrito.push(itemAgregado);
    }
    setCarrito(nuevoCarrito);
   
  };

  const cantidadEnCarrito = () => {
    return carrito.reduce((a, prod) => a + prod.cantidad, 0);
  };

  const precioTotal = () => {
    return carrito.reduce((a, prod) => a + prod.precio * prod.cantidad, 0);
  };
  const vaciar = () => {
    setCarrito([]);
  };

  useEffect(() => {
    localStorage.setItem('carrito',JSON.stringify(carrito));
  }, [carrito])
  

  return  (
  <CardContext.Provider value={{ carrito, manejarAgregar, cantidadEnCarrito, precioTotal, vaciar }}>
   {children}
  </CardContext.Provider>
  )
};
