import { Pencil } from "lucide-react";
import Image from "next/image";
function Profile() {
  return (
    <div className="flex justify-center md:justify-around p-4 ">
      <div className="bg-gray-300 w-11/12 shadow-md shadow-gray-400  flex flex-col items-center lg:w-1/2 md:flex-row md:justify-around rounded-xl">
        <div className="p-4 ">
          <Image
            src="/carne.webp"
            alt="Imagen de plato"
            width={250}
            height={200}
            className="object-cover rounded-full shadow-md shadow-black"
          />
        </div>
        <div className=" flex flex-col p-4 ">
          <div className="gap-2 my-2 items-start flex-col flex md:justify-between ">
            <span className="text-xl  ">Nombre:</span>{" "}
            <input
              type="text"
              placeholder="Ricardo Alvarez"
              className="rounded-xl"
            />
          </div>
          <div className="gap-2 my-2 items-start flex-col flex md:justify-between">
            <span className="text-xl text-start ">Calle:</span>{" "}
            <input
              type="text"
              placeholder="Suipacha 674"
              className="rounded-xl"
            />
          </div>
          <div className="gap-2 my-2 items-start flex-col flex md:justify-between">
            <span className="text-xl text-start ">Barrio:</span>{" "}
            <input type="text" placeholder="Florida" className="rounded-xl" />
          </div>
          <div className="gap-2 my-2 items-start flex-col flex md:justify-between">
            <span className="text-xl text-start ">Telefono:</span>{" "}
            <input type="text" placeholder="1231231" className="rounded-xl" />
          </div>

          <button className="shadow-sm mt-5 text-white shadow-black bg-orange-400 flex items-center justify-center gap-3 text-xl font-bold p-2 rounded-xl">
            <Pencil /> Editar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
