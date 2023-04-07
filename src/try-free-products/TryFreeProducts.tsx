import React from "react";
import "./free-products.css";
import ProductCard from "./ProductCard";
import privacyPolicy from "../assets/privacy-policy.png";
import tnc from "../assets/tnc.png";
import domainName from "../assets/domain-name.png";
import invoice from "../assets/invoice.png";

type Props = {};

const TryFreeProducts = (props: Props) => {
  const products = [
    {
      title: "Privacy Policy Generator",
      subtitle:
        "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
      image: privacyPolicy,
    },
    {
      title: "Terms & Conditions Generator",
      subtitle:
        "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
      image: tnc,
    },
    {
      title: "Domain Name Generator",
      subtitle:
        "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
      image: domainName,
    },
    {
      title: "Invoice Generator",
      subtitle:
        "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
      image: invoice,
    },
  ];

  return (
    <div className="Try-Free-Products">
      <span className="Try-Free-Products-Title">
        Try our other free products
      </span>
      <div className="Try-Free-Products-Grid">
        {products.map((product, index) => {
          return (
            <ProductCard
              key={index}
              title={product.title}
              subtitle={product.subtitle}
              image={product.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TryFreeProducts;
