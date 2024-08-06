import { useEffect, useState } from "react";

function Categories({ onCategorySelect, selectedCategory }) {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/category`
        );

        const result = await res.json();
        setProductList(result); // Set the fetched data to the state
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const uniqueCategories = [
    ...new Set(
      productList
        .filter((marca) => marca !== null && marca !== undefined)
        .map((marca) => marca.marcaName.toLowerCase())
    ),
  ];

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="border-b-2 pb-4 overflow-x-auto w-full">
      <div className="flex items-start gap-x-2 pt-4">
        <button
          className={`rounded-xl py-2 px-4 text-white ${
            selectedCategory === null ? "bg-green-500" : "bg-slate-400"
          }`}
          onClick={() => onCategorySelect(null)}
        >
          Todos
        </button>
        {uniqueCategories.map((marca, index) => (
          <button
            key={index}
            className={`rounded-xl py-2 px-4 text-white bg-slate-400 hover:text-white hover:bg-green-500 ${
              selectedCategory === marca && "bg-green-500"
            }`}
            onClick={() => onCategorySelect(marca)}
          >
            {capitalizeFirstLetter(marca)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;
