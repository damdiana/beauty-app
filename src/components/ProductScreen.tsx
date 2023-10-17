"use client";

import { useState } from "react";
import { Product } from "@/services/ProductAPI";
import ProductImages from "./ProductImages/ProductImages";
import Link from "next/link";

function ProductScreen({ product }: { product: Product }) {
  const [selectedTabId, setSelectedTabId] = useState<
    "description" | "ingredients"
  >("description");

  return (
    <>
      <div className="grid grid-cols-2 m-4 p-4">
        <div>
          <ProductImages
            images={product.images.map((src) => {
              return {
                src,
                alt: product.name,
              };
            })}
          />
        </div>
        <div className="flex-col">
          <p className="tracking-wide uppercase text-lg">
            {product.brand_name}
          </p>
          <h1 className="font-bold text-xl"> {product.name} </h1>
          <Link href={`/categories/${product.categ_id}`}>
            Category: {product.category_name}
          </Link>
          <a href="#description" className="mt-4 font-bold block">
            Find more
          </a>
        </div>
      </div>
      <div className="flex justify-evenly tabs-border-bottom pt-2 ">
        <button
          id="description"
          className={`font-bold px-2 w-full ${
            selectedTabId === "description" ? "tab--active" : ""
          }`}
          onClick={() => {
            setSelectedTabId("description");
          }}
        >
          Description
        </button>
        <button
          className={`font-bold px-2 w-full ${
            selectedTabId === "ingredients" ? "tab--active" : ""
          }`}
          onClick={() => {
            setSelectedTabId("ingredients");
          }}
        >
          Ingredients
        </button>
      </div>

      <div className="m-2 p-2">
        {selectedTabId === "description" && (
          <div
            className="mt-2 "
            dangerouslySetInnerHTML={{
              __html: product.description,
            }}
          />
        )}
        {selectedTabId === "ingredients" && (
          <>
            <div
              className="mt-2"
              dangerouslySetInnerHTML={{
                __html: product.ingredients,
              }}
            />
          </>
        )}
      </div>
    </>
  );
}

export { ProductScreen };
