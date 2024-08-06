import Image from "next/image";
import comida from "../../../../public/comida.jpg";

import { useEffect, useState } from "react";

import {useCart} from '@/hooks/useCart'

function ProductCard({ product,marca}) {
  const comidaImg = comida;

  const [cantidad, setCantidad] = useState(1);
  const handleCantidadChange = (nuevaCantidad) => {
    setCantidad(nuevaCantidad);
  };
  const total = cantidad * product.price;

  const {addToCart }=useCart()

  return (
    <div className="flex flex-col items-center mt-10 md:flex-row md:justify-between text-white">
      <div className=" w-full md:w-1/2">
        <Image
          src={comidaImg}
          alt="Imagen de plato"
          layout="responsive"
          width={300}
          height={200}
          className="object-cover w-1/2 h-1/2 rounded-xl"
        />
      </div>
      <div className="flex flex-col ps-5 mt-4  w-full md:w-1/2">
      <span className=" my-3 capitalize text-2xl">{marca}</span>
        <h4 className="font-bold text-xl ">{product.productName}</h4>
        <p className="">Capacidad: {product.description}</p>
        <div className="flex flex-col items-center mt-10">
          <div className=" w-full flex flex-col mt-6">
            <div className="flex gap-x-4">
              <span className="text-lg ">Precio Unidad:</span>
              <span className="text-lg"> ${total}</span>
            </div>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="w-full text-center mt-4 px-4 py-2 bg-green-500 rounded-full"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
