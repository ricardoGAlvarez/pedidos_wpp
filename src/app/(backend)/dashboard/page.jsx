"use client";
import Header from "@/components/(backoffice)/Header";
import LargeCard from "@/components/(backoffice)/LargeCard";
import SmallCard from "@/components/(backoffice)/SmallCard";
import CustomDataTable from "@/components/(backoffice)/CustomDataTable";
import Footer from "@/components/(backoffice)/Footer";

import {
  ArchiveRestore,
  ShoppingCart, 
} from "lucide-react";
import AddForm from "@/components/addForm";
import { useSession } from "next-auth/react";



export default function Dashboard() {
  const icon = <ArchiveRestore />;
  const Sicon = <ShoppingCart />;

  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>Loading...</p>;
  }
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const username = capitalizeFirstLetter(session.user.name)  ;
  
  return (
    <div className="md:ml-60 ">
      <Header title="Dashboard Overview"username={username} />
      <div className="flex flex-col mt-10 items-center md:grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4  ">
        
        <LargeCard
          title="Entregados"
          detail="100"
          icon={icon}
          className="bg-emerald-400 "
        />

      </div>
      <div className="mt-10 flex flex-col items-center  gap-2 md:grid md:grid-cols-2 lg:grid-cols-4 ">
        <SmallCard icon={Sicon} title="Orders Pending" detail="30" />
      </div>
      <CustomDataTable apiUrl={"/api/products"} columns={["id", "productName", "price", "stock"]} titleTable={"Mis Productos"} ComponenteProp={AddForm}/>
      <Footer />
    </div>
  );
}
