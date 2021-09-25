import React from "react";

const Fighter = (props) => {
  //attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = () => {
    alert("You presses the button");
  };

  const { img, name, weight } = props.fighter;
  return (
    <article className="fighter">
      <img alt="fighter pic" className="photo" src={img}></img>
      <h1>{name}</h1>
      <h4>{weight}</h4>
      {props.children}
      <button type="button" onClick={clickHandler}>
        buttony button
      </button>
    </article>
  );
};

export default Fighter;
