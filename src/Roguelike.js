import React, { useRef, useEffect } from "react";
import InputMapper from "./InputMapper";

const Roguelike = ({ width, height, tileSize }) => {
  const canvasRef = useRef(null);

  //   create instance of InputManager classes
  let inputMapper = new InputMapper();

  useEffect(() => {
    //   lifecycle hook that gets called AFTER the canvas is drawn to DOM.
    console.log("Draw to canvas");

    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, width * tileSize, height * tileSize);
    ctx.fillStyle = "#000";
    ctx.fillRect(12, 22, 16, 16); // 16x16 square
  });

  return (
    <canvas
      ref={canvasRef}
      width={width * tileSize}
      height={height * tileSize}
      style={{ border: "1px solid black" }}
    ></canvas>
  );
};

export default Roguelike;
