"use client"
import { useState, useEffect } from "react";
import NextImage from "next/image"; // Cambié el nombre aquí
import img1 from "@/../public/fondo.jpg";
import img2 from "@/../public/fondo.jpg";
import img3 from "@/../public/item2.webp";
import { ArrowLeft, ArrowRight, Circle } from "lucide-react";

function Slider() {
    const [page, setPage] = useState(0);
    const lista = [img1, img2, img3];
    const intervalDuration = 5000;
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        goToNextPage();
      }, intervalDuration);
  
      return () => clearInterval(intervalId);
    }, []);
  
    const goToPrevPage = () => {
      setPage((prevPage) => Math.max(prevPage - 1, 0));
    };
  
    const goToNextPage = () => {
      setPage((prevPage) => (prevPage + 1) % lista.length);
    };
  
    return (
      <div className=" flex-col flex ">
    
        <div key={page} className="h-1/3 flex justify-center bg-red-50 rounded-xl transition-opacity duration-500 ease-in-out">
          <NextImage src={lista[page]} objectFit="contain" className="h-80" alt="img" />
        </div>
    
        <div className="flex justify-center space-x-4 relative bottom-10">
          <button className="bg-gray-500 rounded-xl px-3 opacity-50" onClick={goToPrevPage}>
            <ArrowLeft width={50}/>
          </button>
          <button className="bg-gray-500 rounded-xl px-3 opacity-50" onClick={goToNextPage}>
            <ArrowRight width={50}/>
          </button>
        </div>
      </div>
    
    );
}

export default Slider;