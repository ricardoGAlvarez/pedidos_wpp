"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function AddForm() {
  const [mostrarContenido, setMostrarContenido] = useState(false);
  const [listaCategories, setListaCategories] = useState([]);
  const [selectedMarcaId, setSelectedMarcaId] = useState(null);

  const addProduct = () => {
    setMostrarContenido(true);
  };

  const hideModal = () => {
    setMostrarContenido(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/category`
        );
        const result = await res.json();
        setListaCategories(result); // Set the fetched data to the state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    // Verifica que selectedCategoryId esté definido antes de enviar
    if (selectedMarcaId !== null) {
      const res = await fetch("/api/products", {
        method: "POST",
        body: JSON.stringify({
          productName: data.productName,
          description: data.description,
          price: parseInt(data.price),
          stock: parseInt(data.stock),
          marcaId: parseInt(selectedMarcaId), // Asegúrate de incluir el ID de la categoría
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        hideModal();
      }
    } else {
      console.error("Error: selectedCategoryId es null");
    }
  });
  return (
    <div className="my-4">
      <button
        onClick={addProduct}
        className="bg-blue-500 p-2 rounded-xl text-white"
      >
        Agregar Producto
      </button>
      {mostrarContenido && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none  ">
          <div className="relative w-auto max-w-md mx-auto my-6">
            <div className="bg-gray-200 rounded-xl shadow-lg p-6 mx-3">
              <h3 className="text-center text-2xl mb-4 text-gray-600">
                Agregar Producto
              </h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  placeholder="Nombre del Producto"
                  id="productName"
                  name="productName"
                  className="rounded-xl w-full text-black p-2 my-3"
                  {...register("productName", {
                    required: {
                      value: true,
                      message: "Campo requerido",
                    },
                  })}
                />
                {errors.productName && (
                  <span className="text-red-500">
                    {errors.productName.message}
                  </span>
                )}
                <select
                  name="marca"
                  className="rounded-xl w-full text-black p-2 my-3"
                  onChange={(e) => setSelectedMarcaId(e.target.value)}
                >
                  <option>Seleccionar Categoria</option>
                  {listaCategories.map((marca) => (
                    <option key={marca.id} value={marca.id}>
                      {marca.marcaName}
                    </option>
                  ))}
                </select>

                <input
                  type="number"
                  placeholder="Precio del Producto"
                  id="price"
                  name="price"
                  className="rounded-xl w-full text-black p-2 my-3"
                  {...register("price", {
                    required: {
                      value: true,
                      message: "Campo requerido",
                    },
                  })}
                />
                {errors.price && (
                  <span className="text-red-500">{errors.price.message}</span>
                )}
                <input
                  type="number"
                  placeholder="Stock"
                  id="stock"
                  name="stock"
                  className="rounded-xl w-full text-black p-2 my-3"
                  {...register("stock", {
                    required: {
                      value: true,
                      message: "Campo requerido",
                    },
                  })}
                />
                {errors.stock && (
                  <span className="text-red-500">{errors.stock.message}</span>
                )}
                <textarea
                  type="text"
                  placeholder="Description"
                  id="description"
                  name="description"
                  className="rounded-xl w-full text-black p-2 my-3"
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Campo requerido",
                    },
                  })}
                />
                {errors.description && (
                  <span className="text-red-500">
                    {errors.description.message}
                  </span>
                )}
                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="bg-blue-500 p-2 rounded-xl text-white mt-4 w-full mx-4"
                  >
                    Guardar
                  </button>
                  <button
                    onClick={hideModal}
                    className="bg-red-500 p-2 rounded-xl text-white mt-4 w-full mx-4"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddForm;
