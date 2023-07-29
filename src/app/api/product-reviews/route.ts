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
    typeof body.user_id !== "string" ||
    typeof body.product_name !== "string" ||
    typeof body.review !== "string" ||
    typeof body.title !== "string" ||
    typeof body.rating !== "number"
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
        message: "rating maximum of 5",
      },
      {
        status: 400,
      }
    );
  }

  try {
    let review = await getProductReviewByUser(body.user_id, body.product_id);
    console.log(body);
    if (review === undefined) {
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
