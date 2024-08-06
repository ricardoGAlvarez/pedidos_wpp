// api/products/detail/[id]/route.js
import { NextResponse } from "next/server";
import db from "@/libs/prisma";

export async function GET(req) {
  const parts = req.url.split('/');

  const id = parts[parts.length - 1];

  if (isNaN(id)) {
    return NextResponse.json({
      error: "El ID no es válido",
    });
  }

  try {
    // Realizar una consulta a la base de datos utilizando Prisma
    const product = await db.product.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        marca: {
          select: {
            marcaName: true,
          },
        },
      },
    });

    if (!product) {
      return NextResponse.json({
        error: "Producto no encontrado",
      });
    }

    return NextResponse.json({
      message: "Endpoint de detalle de producto",
      product,
    });
  } catch (error) {
    console.error("Error al consultar la base de datos:", error);
    return NextResponse.json({
      error: "Error interno del servidor",
    });
  }
}
