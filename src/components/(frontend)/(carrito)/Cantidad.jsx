"use client";
import { Minus, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/hooks/useCart";

function Cantidad({ productId }) {
  const minimo = 1;
  const [cantidad, setCantidad] = useState(1);
  const [total, setTotal] = useState(0);
  const { cart, updateQuantity } = useCart();

  // Función para obtener el precio del producto
  const getProductPrice = (productId) => {
    const product = cart.find((p) => p.id === productId);
    return product ? product.price : 0;
  };


  useEffect(() => {
    // Obtener la cantidad actual del producto desde el carrito
    const currentQuantity = cart.find((p) => p.id === productId)?.cantidad || 1;

    // Inicializar el estado con la cantidad actual
    setCantidad(currentQuantity);

    // Inicializar el estado total al cargar el componente
    const precio = getProductPrice(productId);
    setTotal(currentQuantity * precio);
  }, [productId, cart]);


  const incrementarCantidad = () => {
    const precio = getProductPrice(productId);
    const nuevaCantidad = cantidad + 1;
    setCantidad(nuevaCantidad);
    setTotal(nuevaCantidad * precio);
    updateQuantity(productId, nuevaCantidad);
  };

  const decrementarCantidad = () => {
    if (cantidad > minimo) {
      const precio = getProductPrice(productId);
      const nuevaCantidad = cantidad - 1;
      setCantidad(nuevaCantidad);
      setTotal(nuevaCantidad * precio);
      updateQuantity(productId, nuevaCantidad);
    }
  };

  return (
    <div className="flex gap-8 items-center p-2">
      <div className="flex justify-around gap-x-4 ">
      <button disabled={cantidad === minimo} onClick={decrementarCantidad}>
        <Minus className="border p-1 hover:text-black hover:bg-blue-300 cursor-pointer" />
      </button>
      {cantidad}
      <button onClick={incrementarCantidad}>
        <Plus className="border p-1 hover:text-black hover:bg-blue-300 cursor-pointer" />
      </button>
      <span className="me-4">${total}</span>
      </div>

    </div>
  );
}

export default Cantidad;
