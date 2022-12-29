import { Player } from "./player.js";
import { Board } from "./board.js";

export class GameManager {
  players: Player[];
  currentPlayer: Player;
  board: Board;

  constructor() {
    this.players = [new Player("player1", "○"), new Player("player2", "x")];
    this.currentPlayer = this.players[0];
    this.board = new Board();
  }

  togglePlayer = () => {
    this.currentPlayer =
      this.currentPlayer === this.players[0]
        ? this.players[1]
        : this.players[0];
  };

  checkThreeInARow = (): Player | null => {
    for (let playerIndex = 0; playerIndex < 2; playerIndex++) {
      for (let i = 0; i < 3; i++) {
        const sameXBlocks = this.board.blocks.filter(
          (block) => block.position.x === i
        );
        const sameYBlocks = this.board.blocks.filter(
          (block) => block.position.y === i
        );
        if (
          sameXBlocks.every(
            (block) => this.players[playerIndex].mark === block.status
          ) ||
          sameYBlocks.every(
            (block) => this.players[playerIndex].mark === block.status
          )
        )
          return this.players[playerIndex];
      }
    }
    return null;
  };

  init = () => {
    this.players = [new Player("player1", "○"), new Player("player2", "x")];
    this.currentPlayer = this.players[0];
    this.board = new Board();
  };

  endGame = (renderBoard: () => void, message: string) => {
    if (confirm(`${message}!もう一回プレイしましょう！！`)) {
      this.init();
      renderBoard();
    }
  };

  endWithVictory = (renderBoard: () => void, winner: string) => {
    this.endGame(renderBoard, `${winner} が勝利しました`);
  };

  endWithDraw = (renderBoard: () => void) => {
    if (
      this.board.blocks.filter(
        (block) => block.status !== "x" && block.status !== "○"
      ).length === 0
    ) {
      this.endGame(renderBoard, "全てのマスが埋まりました");
    }
  };
}
