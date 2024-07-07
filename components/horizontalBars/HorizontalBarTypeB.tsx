"use client";
import React, { useEffect, useState } from "react";
import Card1in1 from "../cards/Card1in1";

type Product = {
  title: string;
  image: string;
  id: number;
  price: number;
  description: string;
  category: string;
  rating: { rate: number; count: number };
};

const HorizontalBarTypeB = () => {
  // Empty dependency array to ensure the effect runs only once
  const cards: { title: string, cardHeading: string, url: string }[] = [
    { title: "", cardHeading: "Up to 60% | Styles for men", url: "/images/products/Bar1/a1.jpeg" },
    { title: "", cardHeading: "Up to 60% | Styles for men", url: "/images/products/Bar1/a2.jpeg" },
    { title: "", cardHeading: "Up to 60% | Styles for men", url: "/images/products/Bar1/a3.jpeg" },
    { title: "", cardHeading: "Up to 60% | Styles for men", url: "/images/products/Bar1/a4.jpeg" },
  ];

  return (
    <>
      <div className="grid grid-cols-4 gap-4 backdrop-blur">
        {
          cards.map((card, index) => {
            return <Card1in1 title={card.title} url={card.url} cardHeading={card.cardHeading} key={index} />
          })
        }

      </div>
    </>
  );
};


export default HorizontalBarTypeB;

