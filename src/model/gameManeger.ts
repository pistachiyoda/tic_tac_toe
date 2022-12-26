import { Player } from "./player.js";
import { Board } from "./board.js";

export class GameManager {
  players: Player[];
  currentPlayer: Player;
  board: Board;
  isThreeInARow: boolean;

  constructor() {
    this.players = [new Player("player1", "○"), new Player("player2", "×")];
    this.currentPlayer = this.players[0];
    this.board = new Board();
    this.isThreeInARow = false;
  }
}
