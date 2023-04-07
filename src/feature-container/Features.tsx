import React from "react";
import "./feature-container.css";

type Props = {
  image: string;
  title: string;
  subtitle: string;
};

const Features = ({ image, title, subtitle }: Props) => {
  return (
    <div className="Feature-Container">
      <img
        src={image}
        alt=""
        width={"72px"}
        height={"72px"}
        className="Feature-Image"
      />
      <span className="Feature-Title">{title}</span>
      <span className="Feature-Sub-Title">{subtitle}</span>
    </div>
  );
};
export default Features;
