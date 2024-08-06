"use client"
import Link from "next/link";
import Card from "@/components/(frontend)/Card";
import { useEffect, useState } from "react";

function Cards({ apiUrl }) {
  const [productList, setProductList] = useState([]);
  const [marca, setMarca] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/${apiUrl}`
        );
        const result = await res.json();
        setProductList(result); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiUrl]);

  const topProducts = productList.slice(0, 6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/${apiUrl}`);
        const result = await res.json();  
        const marcaNames = result.map((product) => product.marcaName);  
        const uniqueMarcaNames = [...new Set(marcaNames)];
  
        setMarca(uniqueMarcaNames);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [apiUrl]);

  return (
    <div className="mt-10 flex justify-center text-white">
      <div className="md:w-4/5  w-full">
        <h2 className="text-center text-4xl font-bold my-5">Los mas elegidos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {topProducts.map((product) => (
            <div className="" key={product.id}>
              <Card
                productName={product.productName}
                marca={product.marca}
                precio={product.price}
                id={product.id}
                marcaName={marca}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center py-5">
          <Link href="/products" className="bg-cyan-600 text-center text-white rounded-xl py-2 px-4 w-56 font-bold">
            VER MAS
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cards;
