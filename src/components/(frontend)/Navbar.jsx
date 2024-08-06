"use client";
import { useCart } from "@/hooks/useCart";
import { LogIn, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
function Navbar() {
  const { cart } = useCart();
  const isCartEmpty = cart.length === 0;
  const totalItems = cart.length;

  return (
    <div className="relative">
      <div
        className="w-full flex md:px-32
      items-center justify-around md:justify-between
       bg-cyan-800 text-gray-300 h-16 
       fixed top-0 z-20"
      >
        <div className="">
          <Link
            href="/"
            className="text-center text-2xl text-white font-bold font-serif  lg:flex"
          >
            Tienda Online
          </Link>
        </div>

        <div className="flex gap-3">
          <Link href="/products">Products</Link>
          <Link href="/profile">
            <User />
          </Link>

          <div className="flex relative">
            <Link href="/shoppingcart">
              <ShoppingBag />
            </Link>
            <span className="absolute -top-2 -right-2.5 bg-red-500 text-white rounded-full px-2 text-xs">
              {totalItems}
            </span>
          </div>
          <Link href="/dashboard">
            <LogIn />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
