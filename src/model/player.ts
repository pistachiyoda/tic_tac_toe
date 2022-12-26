import { Board } from "./board.js";

export class Player {
  private _name: string;
  private mark: "○" | "×";

  constructor(name: string, mark: "○" | "×") {
    this._name = name;
    this.mark = mark;
  }

  get name() {
    return this._name;
  }

  setMark = (position: position, board: Board) => {
    board.getBlock(position).changeStatus(this.mark);
  };
}
