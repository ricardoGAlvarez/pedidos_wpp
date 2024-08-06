import Navbar from "@/components/(frontend)/Navbar";
import Footer from "@/components/(frontend)/Footer";

import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mt-16 ">
      <CartProvider>
        <Navbar />
        {children}
      </CartProvider>
      <Footer />
    </div>
  );
}
