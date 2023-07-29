import { getProduct } from "@/model/ProductModel";
import { getProductReviews } from "@/model/ProductReviewsModel";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { productId: string } }
) {
  const { productId } = params;

  try {
    let product = await getProduct(productId);
    if (product === undefined) {
      return NextResponse.json(
        {
          message: "There is no product with this ID",
        },
        {
          status: 400,
        }
      );
    }
    let reviews = await getProductReviews(productId);
    if (reviews !== undefined) {
      return NextResponse.json(
        {
          reviews,
        },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        {
          message: "There are no reviews",
        },
        {
          status: 400,
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
