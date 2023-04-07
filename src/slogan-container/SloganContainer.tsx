import React from "react";
import "./slogan-container.css";
import cross from "../assets/cross.svg";
import GridComponent from "./GridComponent";

type Props = {};

const SloganContainer = (props: Props) => {
  const [slogan, setSlogan] = React.useState<string>("");

  const sloganlist = [
    "There is no Sore it will Not Heal, No cool it will not Subdue. ",
    "There is no Sore it will Not Heal, No cool it will not Subdue. ",
    "coziness building for tomorrow",
    "coziness building for tomorrow",
    "coziness building for tomorrow",
    "coziness building for tomorrow",
    "coziness building for tomorrow",
    "coziness building for tomorrow",
    "coziness building for tomorrow",
    "coziness building for tomorrow",
    "coziness building for tomorrow",
    "coziness building for tomorrow",
    "There is no Sore it will Not Heal, No cool it will not Subdue. ",
    "There is no Sore it will Not Heal, No cool it will not Subdue. ",
    "There is no Sore it will Not Heal, No cool it will not Subdue. ",
    "There is no Sore it will Not Heal, No cool it will not Subdue. ",
    "There is no Sore it will Not Heal, No cool it will not Subdue. ",
    "There is no Sore it will Not Heal, No cool it will not Subdue. ",
  ];

  return (
    <div className="Slogan-Container">
      <span className="Slogan-Title">Free slogan maker</span>
      <br />
      <span className="Slogan-Sub-Title">
        Simply enter a term that describes your business, and get up to 1,000{" "}
        <br />
        relevant slogans for free.
      </span>
      <label className="Slogan-Word-TextField-Label">
        Word for your slogan{" "}
      </label>

      <div className="Slogan-Word-TextField-Container">
        <input
          type="text"
          value={slogan}
          onChange={(e) => {
            setSlogan(e.target.value);
          }}
          className="Slogan-Word-TextField"
        />
        <button
          className="Slogan-Word-TextField-Button"
          onClick={() => {
            setSlogan("");
          }}
        >
          <img src={cross} alt="" />
        </button>
      </div>
      <button className="Slogan-Generate-Button">Generate slogans</button>
      <hr />
      <div className="Slogan-Result-Container">
        <span className="Slogan-Result-Title">
          We have generated 1,023 slogans for "{slogan}"
        </span>
        <button className="Download-All-Button">Download all</button>
      </div>

      <div className="Slogan-Grid-Container">
        {sloganlist.map((title) => {
          return <GridComponent title={title} />;
        })}
      </div>
      <hr />
      <div className="Slogan-Grid-Pagination">
        <span> {`< Previous`}</span>
        <div>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
            return (
              <button className="Slogan-Grid-Pagination-Button">{item}</button>
            );
          })}
        </div>
        <span> {`Next >`}</span>
      </div>
    </div>
  );
};

export default SloganContainer;
