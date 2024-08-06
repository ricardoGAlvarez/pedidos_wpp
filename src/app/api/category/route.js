import { NextResponse } from "next/server";
import db from "@/libs/prisma";

export async function GET() {
  try {
    const data = await db.marca.findMany();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Ocurrió un error al procesar la solicitud.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request) {
  try {
    const data = await request.json();

    const marcaFound = await db.marca.findUnique({
      where: {
        marcaName: data.marcaName,
        id: data.id,
      },
    });

    if (marcaFound) {
      return NextResponse.json(
        {
          message: "categoria ya existe",
        },
        {
          status: 400,
        }
      );
    }
    const newMarca = await db.marca.create({
      data: {
        marcaName: data.marcaName,
        marcaId: data.marcaId, // Asegúrate de obtener este valor de tu solicitud
      },
    });

    const { ...marca } = newMarca;
    return NextResponse.json(marca);
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
    return NextResponse.json(
      {
        message: "Ocurrió un error al procesar la solicitud.",
      },
      {
        status: 500,
      }
    );
  }
}
