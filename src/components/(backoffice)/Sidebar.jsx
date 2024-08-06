"use client";
import {
  BookOpen,
  LayoutGrid,
  Package2Icon,
  Settings,
  Store,
  StoreIcon,
  Users,
  LogOutIcon,
  ChevronRight,
  Layers,
  Tags,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import StoreLogo from "@/assets/storelogo.png";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { signOut } from "next-auth/react";

export default function Sidebar({ showSidebar, setShowSidebar }) {
  const logo = StoreLogo;
  const pathName = usePathname();
  const [showSubMenu, setShowSubMenu] = useState(false);
  const handleSubMenuToggle = () => {
    setShowSubMenu(!showSubMenu);
  };

  const router = useRouter();

  const handleSignOut = async () => {
    const data = await signOut({ callbackUrl: '/' });

    if (!data?.error) {
      // Redirige a la página "/"
      router.push('/');
    }
  };
  return (
    <div
      className={
        showSidebar
          ? "md:block mt-16 md:mt-0 bg-opacity-85 md:text-black bg-slate-500 space-y-6  w-52 h-screen ps-4 fixed top-0 left-0 "
          : " hidden md:block  bg-slate-700 space-y-6  w-52 h-screen ps-4 fixed top-0 left-0 "
      }
    >
      <div className="justify-center w-full flex pe-4 pt-2 ">
        <Link href="/">
          <Image
            src={logo}
            className="pt-2 "
            alt="Logo"
            width={40}
            height={40}
          />
        </Link>
      </div>

      <div className="flex flex-col h-4/5  justify-between  text-gray-300 pt-12">
        <div className="space-y-5">
          <Link
            href="/dashboard"
            className={
              pathName === "/dashboard"
                ? "flex gap-3 bg-slate-500 p-2 rounded-xl hover:mr-2 text-blue-300 mr-3"
                : "flex gap-3 hover:bg-slate-500 hover:p-2 hover:rounded-xl  hover:text-blue-300"
            }
          >
            <LayoutGrid /> <span>Dashboard</span>
          </Link>

          <button
            className={
              showSubMenu
                ? "flex gap-3 bg-slate-500 p-2 rounded-xl hover:mr-2 text-blue-300 mr-3"
                : "flex gap-3 hover:bg-slate-500 hover:p-2 hover:rounded-xl  hover:text-blue-300"
            }
            onClick={handleSubMenuToggle}
          >
            <BookOpen />
            Catalogue
            <ChevronRight />
          </button>

          {showSubMenu && (
            <div className="flex flex-col bg-slate-500 rounded-xl p-2 mx-2 text-gray-200 ps-4 items-start">
              <button
                className={
                  pathName === "/dashboard/categories"
                    ? "flex gap-3 w-full bg-slate-700 p-2 rounded-xl hover:mr-2 text-blue-50 mr-3"
                    : " flex gap-3 m-3"
                }
              >
                <Layers />
                <Link href="/dashboard/categories">Categories</Link>
              </button>
              <button
                className={
                  pathName === "/dashboard/coupons"
                    ? "flex gap-3 w-full bg-slate-700 p-2 rounded-xl hover:mr-2 text-blue-50 mr-3"
                    : " flex gap-3 m-3"
                }
              >
                <Tags />
                <Link href="/dashboard/coupons">Coupons</Link>
              </button>
            </div>
          )}
          <Link
            href="/dashboard/staff"
            className={
              pathName === "/dashboard/staff"
                ? "flex gap-3 bg-slate-500 p-2 rounded-xl hover:mr-2 text-blue-300 mr-3"
                : "flex gap-3 hover:bg-slate-500 hover:p-2 hover:rounded-xl hover:mr-2 hover:text-blue-300"
            }
          >
            <Users /> <span>Staff</span>
          </Link>
          <Link
            href="/dashboard/orders"
            className={
              pathName === "/dashboard/orders"
                ? "flex gap-3 bg-slate-500 p-2 rounded-xl hover:mr-2 text-blue-300 mr-3"
                : "flex gap-3 hover:bg-slate-500 hover:p-2 hover:rounded-xl hover:mr-2 hover:text-blue-300"
            }
          >
            <Package2Icon /> <span>Orders</span>
          </Link>
          <Link
            href="/dashboard/markets"
            className={
              pathName === "/dashboard/markets"
                ? "flex gap-3 bg-slate-500 p-2 rounded-xl hover:mr-2 text-blue-300 mr-3"
                : "flex gap-3 hover:bg-slate-500 hover:p-2 hover:rounded-xl hover:mr-2 hover:text-blue-300"
            }
          >
            <Store /> <span>Markets</span>
          </Link>
          <Link
            href="/dashboard/settings"
            className={
              pathName === "/dashboard/settings"
                ? "flex gap-3 bg-slate-500 p-2 rounded-xl hover:mr-2 text-blue-300 mr-3"
                : "flex gap-3 hover:bg-slate-500 hover:p-2 hover:rounded-xl hover:mr-2 hover:text-blue-300"
            }
          >
            <Settings /> <span>Settings</span>
          </Link>
          <Link
            href="/"
            className={
              pathName === "/dashboard/store"
                ? "flex gap-3 bg-slate-500 p-2 rounded-xl hover:mr-2 text-blue-300 mr-3"
                : "flex gap-3 hover:bg-slate-500 hover:p-2 hover:rounded-xl hover:mr-2 hover:text-blue-300"
            }
          >
            <StoreIcon />
            <span>Store</span>
          </Link>
        </div>
      </div>
      <button
      
      onClick={handleSignOut}
      className="flex justify-evenly bg-slate-400 w-5/6 rounded-full p-2 hover:text-white hover:bg-blue-600">
        <LogOutIcon />
        Logout
      </button>
    </div>
  );
}
