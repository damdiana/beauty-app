"use client";
import Header from "@/components/Header/Header";
import ProductCard from "@/components/ProductCard/ProductCard";

export default function Home() {
  return (
    <>
      <Header
        nav={[
          {
            href: "https://github.com/damdiana?tab=repositories",
            title: "Body",
          },
          {
            href: "https://github.com/damdiana?tab=repositories",
            title: "Face",
          },
          {
            href: "https://github.com/damdiana?tab=repositories",
            title: "New",
          },
          {
            href: "https://github.com/damdiana?tab=repositories",
            title: "Trending",
          },
        ]}
      />
      <div className="grid card-grid-cols-3   mt-4 gap-4">
        <ProductCard
          product={{
            brand: "NIOD",
            title: "Survival 20 Serum 30ml",
            nrReviews: 9,
            alt: "NIOD Survival 20 Serum 30ml",
            src: "https://static.thcdn.com/images/small/webp/productimg/1600/1600/11833538-9874625311016868.jpg",
            href: "https://www.cultbeauty.com/niod-survival-20-serum-30ml/11833538.html",
            height: 250,
            width: 250,
          }}
        />
        <ProductCard
          product={{
            brand: "Lancôme",
            title: "Advanced Génifique Serum 20ml",
            nrReviews: 9,
            alt: "serum",
            src: "https://www.sephora.ro/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw57c2ffcb/images/hi-res/all/SKU/308937_swatch.jpg",
            href: "https://www.sephora.ro/p/advanced-genifique-serum---serum-activator-de-tinerete-P10007363.html",
            height: 250,
            width: 250,
          }}
        />
        <ProductCard
          product={{
            brand: "ALGENIST",
            title: "GENIUS Liquid Collagen 30ml",
            nrReviews: 9,
            alt: "ALGENIST GENIUS Liquid Collagen 30ml",
            src: "https://static.thcdn.com/images/small/webp//productimg/1600/1600/12676219-6914796886851550.jpg",
            href: "https://www.cultbeauty.com/algenist-genius-liquid-collagen-supersize-60ml/13222920.html",
            height: 250,
            width: 250,
          }}
        />
      </div>
    </>
  );
}
