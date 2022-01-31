import React from "react";
import "./../css/card.css";

const Card = (props) => {
  const style = {
    backgroundImage: `url(${props.background})`,
  };
  return (
    <div className="card-container">
      <header style={style}></header>
      <h2 className="image">
        <img className="avatar-img" src={props.avatar} alt={props.name} />
      </h2>
      <h1 className="personal-details">
        {props.name} {props.surname}
      </h1>
      <div>
        <h1 className="heading">Rewards</h1>
        <div className="rewards-container">
          {props.bronze !== 0 ? (
            <div className="bronze-medals">
              <h2 className="medal-category">Bronze</h2>
              <h1 className="number">{props.bronze}</h1>
            </div>
          ) : null}
          {props.silver !== 0 ? (
            <div className="silver-medals">
              <h2 className="medal-category">Silver</h2>
              <h1 className="number">{props.silver}</h1>
            </div>
          ) : null}
          {props.gold !== 0 ? (
            <div className="gold-medals">
              <h2 className="medal-category">Gold</h2>
              <h1 className="number">{props.gold}</h1>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
