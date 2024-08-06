import { Bell, Menu, X } from "lucide-react";
import Image from "next/image";

function Navbar({ setShowSidebar, showSidebar }) {
  return (
    <div
      className="w-full flex ps-3 
      items-center justify-between
       bg-slate-500 text-gray-300 h-16
       fixed top-0 md:left-52 z-10
       "
    >
      <button
        className="md:hidden"
        onClick={() => {
          setShowSidebar(!showSidebar);
        }}
      >
        <Menu />
      </button>
      <div className="flex md:items-center gap-x-4 justify-end items-center  md:w-4/6  me-3">
        <button
          type="button"
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white border-none hover:bg-blue-700 hover:rounded-full"
        >
          <Bell />
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500   rounded-full -top-1 -end-2 dark:border-gray-900">
            20
          </div>
        </button>

        <button>
          <Image
            src="/user.jpg"
            alt="userProfile"
            width={200}
            height={200}
            className="w-8 h-8 rounded-full"
          ></Image>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
