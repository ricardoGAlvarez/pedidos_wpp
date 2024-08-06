import { useCart } from "@/hooks/useCart";
import { useState } from "react";


function calcularTotal(cart) {
  return cart.reduce(
    (total, producto) => total + producto.price * producto.cantidad,
    0
  );
}
function enviar(detalle, nombreEmpresa, formData, clearCart, hideModal) {
  const numWpp = 543886035790;
  const domicilio = `%0ACalle: ${formData.calle}%0ABarrio: ${formData.barrio}%0A`;
  const mensajeDetalle = detalle
    .map((producto) => {
      const total = producto.price * producto.cantidad;
      return `${producto.product_name}%0A${producto.description}%0APrecio: ${producto.price}%0ACantidad: ${producto.cantidad}%0ATotal: ${total}%0ADireccion de envio: ${domicilio}%0A`;
    })
    .join("%0A%0A");

  const totalCarrito = calcularTotal(detalle);

  const mensajeFinal = `¡Hola! Me gustaría realizar el siguiente pedido de ${nombreEmpresa}:%0A%0A${mensajeDetalle}%0ATotal del pedido: ${totalCarrito}`;

  const urlWpp = `https://api.whatsapp.com/send?phone=${numWpp}&text=${mensajeFinal}`;
  window.open(urlWpp, "_blank");
  // clearCart();
  hideModal();
}



function test(cart){
  console.log(cart)
}


function Pedido({ cart }) {
  const nombreEmpresa = "OddyFood";
  const isCartEmpty = cart.length === 0;
  const { clearCart } = useCart();

  const [mostrarContenido, setMostrarContenido] = useState(false);

  const datosDomicilio = () => {
    setMostrarContenido(true);
  };

  const [formData, setFormData] = useState({
    calle: "",
    barrio: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const hideModal = () => {
    setMostrarContenido(false);
  };
  return (
    <div className="flex justify-center mt-10 w-full">
      <button
        className={
          isCartEmpty
            ? "bg-gray-500 w-full p-2 rounded-xl m-2 text-white font-semibold"
            : "bg-green-500 w-full p-2 rounded-xl m-2 text-white font-semibold"
        }
        disabled={isCartEmpty}
        onClick={() => datosDomicilio()}
      >
        
        {isCartEmpty ? "Carrito vacío" : "Realizar pedido"}
      </button>

      {mostrarContenido && (
        <div className="absolute top-40 rounded-xl items-center  pt-6 flex flex-col bg-cyan-800 text-white">
          <div className=" items-center">
            <h3 className="text-2xl text-white font-semibold top-0">
              Direccion de envio
            </h3>
          </div>
          <form
            action=""
            className="flex flex-col p-4 gap-y-5 items-center"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Calle con N°"
              name="calle"
              onChange={handleChange}
              className="rounded-xl w-full text-black"
            />
            <input
              type="text"
              placeholder="Barrio"
              name="barrio"
              onChange={handleChange}
              className="rounded-xl w-full text-black"
            />
            <div className="flex justify-between w-full items-center">
              <button
                type="submit"
                className={
                  isCartEmpty
                    ? "bg-gray-500 w-4/6 p-2 rounded-xl m-2 text-white font-semibold"
                    : "bg-green-500 w-4/6 p-2 rounded-xl m-2 text-white font-semibold"
                }
                disabled={isCartEmpty}
                onClick={() =>
                  enviar(cart, nombreEmpresa, formData, clearCart, hideModal)
                }
              >
                {isCartEmpty ? "Carrito vacío" : "Realizar pedido"}
              </button>
              <button
                className="rounded-xl flex  p-2 bg-red-500 text-white hover:bg-red-400"
                onClick={() => hideModal()}
              >
                {" "}
                Cancelar{" "}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Pedido;
