"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ItemCart from "@/components/(frontend)/(carrito)/ItemCart";
import { useCart } from "@/hooks/useCart";
import Pedido from "@/components/(frontend)/(wpp)/Pedido";

function Cart() {
  const { cart } = useCart();   
  return (
    <div className="flex justify-center pt-10 text-white">
      <div className="w-full md:w-2/3 justify-around flex ">
        <Link
          href="/products"
          className="flex gap-3 mb-4 absolute left-5 top-20"
        >
          <ArrowLeft />
          <p>Atras</p>
        </Link>
        <div className="flex flex-col items-center md:w-4/5">
          {cart.map((product) => (
            <section className="  " key={product.id}>
              <ItemCart  product={product} />
              
            </section>
          ))}
          <Pedido cart={cart} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
