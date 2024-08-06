"use client";
import Categories from "@/components/(frontend)/Categories";
import Card from "@/components/(frontend)/Card";
import Separador from "@/components/(frontend)/Separador";
import { useEffect, useState } from "react";

function Products() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/products`
        );

        const result = await res.json();
        setProductList(result); // Set the fetched data to the state
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);
  const handleCategorySelect = (marca) => {
    setSelectedCategory(marca);
  };
  const filteredProducts = selectedCategory
    ? productList.filter((product) => product.marca === selectedCategory)
    : productList;

  return (
    <div className="p-4   flex justify-center text-white">
      <div className="w-11/12 ">
        <h2 className="text-black font-mono text-2xl ">Products</h2>
        <div className="">
          <Categories
            onCategorySelect={handleCategorySelect}
            selectedCategory={selectedCategory}
          />
          <div className="flex flex-col  ">
            <Separador
              title={
                selectedCategory
                  ? `${selectedCategory
                      .charAt(0)
                      .toUpperCase()}${selectedCategory.slice(1)}`
                  : "Todos los productos"
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 p-4 ">
              {filteredProducts.map((product) => (
                <div key={product.id}>
                  <Card
                productName={product.productName}
                marca={product.marca}
                precio={product.price}
                id={product.id}
                marcaName={product.marcaName}
              />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
