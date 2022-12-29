import { GameManager } from "../model/gameManeger.js";
import { Renderer } from "../view/render.js";

export class Controller {
  gamemaneger: GameManager;
  render: Renderer;

  constructor() {
    this.gamemaneger = new GameManager();
    this.render = new Renderer();
    this.render.renderName(
      this.gamemaneger.currentPlayer.name,
      this.gamemaneger.currentPlayer.mark
    );
    this.render.renderBoard(this.onClick, this.gamemaneger.board.blocks);
  }

  onClick = (e: MouseEvent) => {
    if (!(e.target instanceof HTMLDivElement)) return;
    if (!e.target.dataset["x"] || !e.target.dataset["y"]) return;
    const position = {
      x: Number(e.target.dataset["x"]),
      y: Number(e.target.dataset["y"]),
    };
    this.gamemaneger.currentPlayer.setMark(position, this.gamemaneger.board);
    this.gamemaneger.togglePlayer();
    this.render.renderName(
      this.gamemaneger.currentPlayer.name,
      this.gamemaneger.currentPlayer.mark
    );
    this.render.renderBoard(this.onClick, this.gamemaneger.board.blocks);
    if (this.gamemaneger.checkThreeInARow()) {
      setTimeout(
        () =>
          this.gamemaneger.endWithVictory(
            () =>
              this.render.renderBoard(
                this.onClick,
                this.gamemaneger.board.blocks
              ),
            `${this.gamemaneger.checkThreeInARow()?.name}`
          ),
        1000
      );
    }
    setTimeout(
      () =>
        this.gamemaneger.endWithDraw(() =>
          this.render.renderBoard(this.onClick, this.gamemaneger.board.blocks)
        ),
      1000
    );
  };
}
