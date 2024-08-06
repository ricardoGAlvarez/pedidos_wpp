"use client";
import Image from "next/image";
import Link from "next/link";
function Card({ productName, precio, marcaName, id, description }) {
  return (
    <div className="flex justify-center  ">
      <div className="rounded-xl relative  pb-2  shadow-md shadow-cyan-700 h-80 flex flex-col justify-between ">
        <div className=" relative overflow-hidden rounded-t-xl">
          {/* <div className="absolute top-2 right-3 z-10">
              <span className={`${className} rounded-full p-1 px-2 text-white`}>
                {estado}
              </span>
            </div> */}
          <Image
            src="/comida.jpg"
            alt="Imagen de plato"
            width={350}
            height={250}
            className="object-contain"
          />
        </div>
        <div className="px-2">
          <h3 className=" text-2xl font-semibold text-gray-200 capitalize">
            {marcaName}
          </h3>
          <span className="text-lg text-gray-300">{productName}</span>
          <span className="text-lg text-gray-300">{description}</span>
          <div className="flex justify-between mt-2 text-gray-200">
            <span>$ {precio}</span>
          </div>
          <Link href={`/products/detail/${id}`}>
            <div className="w-full text-center mt-4 px-4 py-2 bg-cyan-700 text-white rounded-full">
              VER
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
