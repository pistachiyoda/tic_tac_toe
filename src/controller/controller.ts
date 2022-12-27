import { GameManager } from "../model/gameManeger.js";
import { Render } from "../view/render.js";

export class Controller {
  gamemaneger: GameManager;
  render: Render;

  constructor() {
    this.gamemaneger = new GameManager();
    this.render = new Render(this.gamemaneger);
    this.render.displayName();
    this.render.displayBoard(this.onClick, this.gamemaneger.board.blocks);
  }

  onClick = (e: MouseEvent) => {
    if (!(e.target instanceof HTMLDivElement)) return;
    if (!e.target.dataset["x"] || !e.target.dataset["y"]) return;
    const position = {
      x: Number(e.target.dataset["x"]),
      y: Number(e.target.dataset["y"]),
    };
    this.gamemaneger.currentPlayer.setMark(position, this.gamemaneger.board);
    this.gamemaneger.changePlayer();
    this.render.displayName();
    this.render.displayBoard(this.onClick, this.gamemaneger.board.blocks);
  };
}
