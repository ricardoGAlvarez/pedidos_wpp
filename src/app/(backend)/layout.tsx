"use client";
import Navbar from "@/components/(backoffice)/Navbar";
import Sidebar from "@/components/(backoffice)/Sidebar";
import { useState } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="  bg-slate-100 min-h-screen">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <main className=" bg-gray-300 min-h-screen mt-16 ">
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        {children}
      </main>
    </div>
  );
}
