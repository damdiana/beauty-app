import { getProduct } from "@/model/ProductModel";
import {
  getProductReviewByUser,
  insertReview,
} from "@/model/ProductReviewsModel";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body = undefined;
  try {
    body = await request.json();
  } catch (err) {
    return NextResponse.json(
      {
        message: "Incorect format",
      },
      {
        status: 400,
      }
    );
  }
  if (
    typeof body.product_id !== "string" ||
    typeof body.review !== "string" ||
    typeof body.title !== "string" ||
    typeof body.rating !== "number" ||
    typeof body.recommending !== "boolean"
  ) {
    return NextResponse.json(
      {
        message: "Incorect format",
      },
      {
        status: 400,
      }
    );
  }

  if (body.rating > 5) {
    return NextResponse.json(
      {
        message: "Rating maximum of 5",
      },
      {
        status: 400,
      }
    );
  }

  try {
    let product = await getProduct(body.product_id);
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
    let review = await getProductReviewByUser(body.user_id, body.product_id);
    if (review === undefined) {
      // IMPORTANT: this is hardcoded because we don't yet have user management.
      // TO BE DELETED once we integrate authentication
      body.user_id = "Diana13";
      body.product_name = "test";
      await insertReview(body);
      const insertedReview = await getProductReviewByUser(
        body.user_id,
        body.product_id
      );
      return NextResponse.json(
        {
          message: "Review added in the database.",
          product_review: insertedReview,
        },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        {
          message: "You can only add one review per product.",
        },
        {
          status: 409,
        }
      );
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      {
        message: "Unable to add review",
      },
      {
        status: 400,
      }
    );
  }
}
