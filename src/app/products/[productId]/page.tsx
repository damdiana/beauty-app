import Button from "@/components/Button-Link/Button/Button";
import Header from "@/components/Header/Header";
import ProductImages from "@/components/ProductImages/ProductImages";
import { Product, fetchProduct } from "@/services/ProductAPI";
import { use, useState } from "react";
import "./product.css";
import { Metadata } from "next";
import { ProductScreen } from "@/components/ProductScreen";

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> {
  let resp = await fetchProduct(params.productId);

  if (resp.ok) {
    return {
      title: resp.product.name,
    };
  }

  return {
    title: "Not Found!",
  };
}

export default async function Page({
  params,
}: {
  params: { productId: string };
}) {
  let resp = await fetchProduct(params.productId);

  return (
    <div>
      <Header
        nav={[
          {
            href: "#",
            title: "Body",
          },
          {
            href: "#",
            title: "Face",
          },
          {
            href: "#",
            title: "New",
          },
          {
            href: "#",
            title: "Trending",
          },
        ]}
      />
      {resp.ok === true ? (
        <ProductScreen product={resp.product} />
      ) : (
        <p> {resp.message} </p>
      )}
    </div>
  );
}
