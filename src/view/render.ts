import { Block } from "../model/block";
import { GameManager } from "../model/gameManeger";

export class Render {
  gamemanager: GameManager;

  constructor(gamemanager: GameManager) {
    this.gamemanager = gamemanager;
  }

  displayName = () => {
    const player_name = this.gamemanager.currentPlayer.name;
    document.getElementById("player_name")!.innerHTML = player_name;
  };

  displayBoard = (onClick: (e: MouseEvent) => void, blocks: Block[]) => {
    const board = document.getElementById("board");
    while (board?.firstChild) board.removeChild(board.firstChild);
    console.log(this.gamemanager.board.blocks);
    for (let i = 0; i < 9; i++) {
      const block = document.createElement("div");
      block.classList.add("block");
      block.dataset.x = blocks[i].position.x.toString();
      block.dataset.y = blocks[i].position.y.toString();
      block.addEventListener("click", onClick);
      block.innerHTML = this.gamemanager.board.blocks[i].status;
      board?.appendChild(block);
    }
  };
}
