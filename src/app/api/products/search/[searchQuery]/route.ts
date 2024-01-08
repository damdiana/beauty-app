import { response500 } from "@/app/utils";
import { searchProducts } from "@/model/ProductModel";
import { getPostgresClient } from "@/services/server/database";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { searchQuery: string };
  }
) {
  try {
    const products = await searchProducts(params.searchQuery);
    return NextResponse.json({
      data: products,
    });
  } catch (err) {
    console.error(err);
    return response500("Interal server error");
  }
}
