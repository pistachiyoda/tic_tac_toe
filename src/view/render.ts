import { Block } from "../model/block";

export class Renderer {
  constructor() {}

  renderName = (player_name: string, mark: string) => {
    document.getElementById(
      "player_name"
    )!.innerHTML = `${player_name}(${mark})がプレイします。`;
  };

  renderBoard = (onClick: (e: MouseEvent) => void, blocks: Block[]) => {
    const board = document.getElementById("board");
    while (board?.firstChild) board.removeChild(board.firstChild);
    for (let i = 0; i < 9; i++) {
      const block = document.createElement("div");
      block.classList.add("block");
      block.dataset.x = blocks[i].position.x.toString();
      block.dataset.y = blocks[i].position.y.toString();
      block.addEventListener("click", onClick);
      block.innerHTML = blocks[i].status;
      board?.appendChild(block);
    }
  };
}
