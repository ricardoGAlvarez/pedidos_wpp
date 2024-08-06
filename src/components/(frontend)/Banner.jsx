"use client";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import img from "@/../public/fondo.jpg"
function Banner() {
  const fondo = img
  return (
    <div className="relative ">
      <div className="flex md:justify-between justify-center items-center text-black p-4 flex-col lg:flex-row h-96">
          <Image
            src={fondo}
            alt="Descripción"
            layout="fill"
            objectFit="fill"
            className="blur-sm md:blur-none"
          />

        <div className="flex flex-col items-center  md:items-center lg:w-1/2 relative z-10 ">
          <h3 className="text-cyan-600 text-4xl font-semibold lg:text-4xl border-blue-300 ">
           PAUL STORE
          </h3>
          <ul className="text-white">
            <li className="flex gap-4 my-2">
              <CheckCircle className="text-cyan-400" />
              <p>Envios a domicilio</p>
            </li>
            <li className="flex gap-4 my-2">
              <CheckCircle className="text-cyan-400" />
              <p>Pedidos por encargo</p>
            </li>
            <li className="flex gap-4 my-2">
              <CheckCircle className="text-cyan-400" />
              <p>Entrega rapida y confiable</p>
            </li>
            <li className="flex gap-4 my-2">
              <CheckCircle className="text-cyan-400" />
              <p>Aceptamos transferencias</p>
            </li>
          </ul>
          <Link
            href={"/products"}
            className="bg-cyan-700 text-white rounded-xl py-2 px-4 w-64 font-bold text-center"
          >
            VER CARTA
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
