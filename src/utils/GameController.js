import Player from "./Player";

class GameController{

    constructor() {
        this.boardState = [];
        this.buildStartingBoard();
        this.instantiatePlayers();
    }

    buildStartingBoard() {
        for(let i= 1; i < 8; i++) {
          this.boardState.push(() => {
            let row = [];
            let chars = 'ABCDEFGH';
            for(let column=0; column < 8; column++) {
              row.push(chars.charAt(column));
            }
          });
        }
    }
    
    instantiatePlayers() {
        this.white = new Player();
        this.black = new Player();
    }
}
export default GameController;