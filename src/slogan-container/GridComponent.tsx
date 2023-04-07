import React from "react";
import "./slogan-grid-component.css";
type Props = {
  title: string;
};

const GridComponent = ({ title }: Props) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const [isCopied, setIsCopied] = React.useState<boolean>(false);

  return (
    <div
      className="Slogan-Grid-Component-Item"
      onClick={(e) => {
        const text = document.querySelector(
          ".Slogan-Grid-Component-Item-Content"
        )?.innerHTML as string;
        navigator.clipboard.writeText(text);
        setIsCopied(true);
      }}
      onMouseEnter={(e) => {
        setIsHovered(true);
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
      }}
    >
      <span className="Slogan-Grid-Component-Item-Content">{title}</span>
      {isHovered ? (
        <div className="Slogan-Grid-Component-Item-Copy">
          <span> {!isCopied ? `Click to copy` : `Copied`}</span>
        </div>
      ) : null}
    </div>
  );
};
export default GridComponent;
