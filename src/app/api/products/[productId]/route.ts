import { getProduct } from "@/model/ProductModel";
import { db } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { productId: string };
  }
) {
  try {
    let product = await getProduct(params.productId);
    if (product === undefined) {
      return NextResponse.json(
        {
          message: "Product not found.",
        },
        {
          status: 404,
        }
      );
    } else {
      return NextResponse.json(
        {
          data: product,
        },
        {
          status: 200,
        }
      );
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      {
        message: "Interal server error",
      },
      {
        status: 500,
      }
    );
  }
}
