"use client";
import CustomDataTable from "@/components/(backoffice)/CustomDataTable";
import AddCategory from "@/components/addCategory";

export default function Category() {
  return (
    <div className="md:ml-52">
      <CustomDataTable
        apiUrl={"/api/category"}
        columns={["id", "marcaName"]}
        titleTable={"Mis Categorias"}
        ComponenteProp={AddCategory}
      />
    </div>
  );
}
