import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import Game from "../pong/game";
import GameService from "../services/gameService";

const Canvas = styled.canvas`
  margin: 0 auto;
  display: block;
`;

function Pong() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const gameService = new GameService();

      const gameConfig = await gameService.getGame();

      const game = new Game(canvasRef.current, 500, 263, gameConfig);
      game.init();
    };

    fetchData();
  }, []);

  return (
    <>
      <Canvas ref={canvasRef} />
    </>
  );
}

export default Pong;

function test() {}

test = function () {};

test = () => {};
