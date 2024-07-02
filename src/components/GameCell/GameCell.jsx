import React, { useContext } from "react";
import { CellStyle } from "./GameCellStyled";
import { GameContext } from "../../context/GameContext";
import { checkForWinner } from "../../utils/GameUtils";

const GameCell = ({ cellItem, index }) => {
  const { updateBoard, game } = useContext(GameContext);

  const cellClickHandler = () => {
    updateBoard(index)
    const result = checkForWinner(game.board)

    // if(result) {

    // }
  }
  return (
    <CellStyle
      onClick={cellClickHandler}
    >
      {cellItem}
    </CellStyle>
  );
};

export default GameCell;
