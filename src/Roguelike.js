import React, { useRef, useEffect, useState } from "react";
import InputMapper from "./InputMapper";

const Roguelike = ({ width, height, tileSize }) => {
  const canvasRef = useRef(null);

  //   we update the player position on the screen using the useState hook
  const [player, setPlayer] = useState({ x: 64, y: 128 });

  //   create instance of InputManager classes
  let inputMapper = new InputMapper();

  const handleUserInput = (action, data) => {
    // create a shallow copy with the spread operator before mutating said copy
    let newPlayer = { ...player };

    newPlayer.x += data.x * tileSize;
    newPlayer.y += data.y * tileSize;
    setPlayer(newPlayer);
  };

  useEffect(() => {
    inputMapper.bindKeys(); // start listening to input events on DOM
    inputMapper.subscribe(handleUserInput);

    return () => {
      // this function is called when the component closes
      inputMapper.unbindKeys(); // stop listening for input events on DOM
      inputMapper.unsubscribe(handleUserInput);
    };
  });

  useEffect(() => {
    //   lifecycle hook that gets called AFTER the canvas is drawn to DOM.

    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, width * tileSize, height * tileSize);
    ctx.fillStyle = "#000";
    ctx.fillRect(player.x, player.y, 16, 16); // 16x16 square
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
