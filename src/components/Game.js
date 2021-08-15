import React from 'react'
import Board from './Board';
import GameController from '../utils/GameController';

const Game = () => {
  new GameController();

  function clickSquare(val, square) {
    console.log(square);
    console.log(val);
  }
  return (
    <Board handleClick={(val, square) => clickSquare(val, square) }/>
  )
}
export default Game;