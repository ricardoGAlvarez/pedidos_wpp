import { CreditCard, ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
function Steps() {
  return (
    <div className="mt-24 w-full p-4 flex justify-center items-center">
      <div className="p-4 shadow-cyan-800  shadow-sm bg-cyan-900 text-white   rounded-xl  w-11/12">
        <h2 className="text-center text-2xl font-bold my-5">
          Renueva tu equipo en tres simples pasos
        </h2>
        <div className="flex flex-col items-center   gap-y-10 lg:flex-row lg:justify-center">
          <div className="flex  flex-col items-center w-80">
            <CreditCard width={100} height={100} />
            <div className=" p-3 mx-4">
              <h3 className="font-bold text-xl">1. Elegir</h3>
              <p className="ms-3">
                Aceptamos todos los metodos de pago.
              </p>
            </div>
          </div>
          <div className="flex  flex-col items-center w-80">
            <Truck width={100} height={100} />
            <div className=" p-3 mx-4">
              <h3 className="font-bold text-xl">2. Recibe</h3>
              <p className="ms-3">
                Recibe tu equipo en la puerta de tu domicilio.
              </p>
            </div>
          </div>
          <div className="flex  flex-col items-center w-80">
            <ShieldCheck width={100} height={100} />
            <div className=" p-3 mx-4">
              <h3 className="font-bold text-xl">3. Disfruta</h3>
              <p className="ms-3">
                Recuerda todos nuestros productos cuentan con garantia.
              </p>
            </div>
          </div>
        </div>
        <div className=" flex justify-center mt-10">
          <Link
            href={"/products"}
            className="bg-cyan-600 text-white rounded-xl py-2 px-4 w-64 font-bold text-center"
          >
            REALIZAR UN PEDIDO
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Steps;
