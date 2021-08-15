import React from 'react'
import Board from './Board';
import GameController from '../utils/GameController';

const Game = () => {
  const GC = new GameController();
  let originalSquareUpdate = false;
  let movingPiece = false;

  function clickSquare(val, squareUpdate, piece) {
    //If first click, basically. 
    if(!originalSquareUpdate) {
      //If it's not a piece, we don't do anything. 
      if(piece) {
        originalSquareUpdate = squareUpdate;
        movingPiece = piece;
      }
      return;
    }
    if(!GC.validMove(movingPiece, val)) {
      return;
    }
    originalSquareUpdate(""); // Set the old square to vacant.
    squareUpdate(movingPiece);
    originalSquareUpdate = false;
  }
  return (
    <Board handleClick={(val, square, piece) => clickSquare(val, square, piece) }/>
  )
}
export default Game;