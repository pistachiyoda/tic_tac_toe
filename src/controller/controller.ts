import { GameManager } from "../model/gameManeger.js";
import { Render } from "../view/render.js";

export class Controller {
  gamemaneger: GameManager;
  render: Render;

  constructor() {
    this.gamemaneger = new GameManager();
    this.render = new Render(this.gamemaneger);
    this.render.displayName();
  }

  onClick = (position: position) => {
    this.gamemaneger.currentPlayer.setMark(position, this.gamemaneger.board);
  };
}
