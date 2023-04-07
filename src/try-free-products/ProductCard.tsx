import React from "react";
import "./product-card.css";
type Props = {
  image: string;
  title: string;
  subtitle: string;
};

const ProductCard = ({ image, title, subtitle }: Props) => {
  return (
    <div className="Product-Card">
      <img src={image} alt="" className="Product-Card-Image" />
      <span className="Product-Card-Title">{title}</span>
      <span className="Product-Card-Sub-Title">{subtitle}</span>
    </div>
  );
};

export default ProductCard;