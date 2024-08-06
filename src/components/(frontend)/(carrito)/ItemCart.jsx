import Image from "next/image";
import comida from "../../../../public/comida.jpg";
import Cantidad from "@/components/(frontend)/(carrito)/Cantidad";
import { X } from "lucide-react";
import { useCart } from "@/hooks/useCart";

function ItemCart({ product }) {
  const comidaImg = comida;
  const { addToCart, removeFromCart } = useCart();

  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };

  return (
    <div className="flex mt-5 items-center border-b-2 text-white bg-gray-800 rounded-xl m-3 justify-around md:w-full">
      <div className="w-1/2">
      <Image
        src={comidaImg}
        width={160}
        height={160}
        className="rounded-xl m-10"
        alt="img"
      ></Image>
      </div>
      <div className="flex flex-col w-1/2">
        <div className="flex justify-between  m-4">
          <div className="flex-col flex">
          <span className=" my-3 capitalize text-2xl">{product.marca.marcaName}</span>
            <span className=" my-3">{product.productName}</span>
            <span>{product.description}</span>
          </div>

          <X
            className="rounded-xl p-0.5 bg-red-500  hover:bg-red-400"
            width={30}
            height={30}
            onClick={handleRemoveFromCart}
          />
        </div>

        <div className="mt-2 flex items-center">
          <Cantidad productId={product.id} />
        </div>
      </div>
    </div>
  );
}

export default ItemCart;
