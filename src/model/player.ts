import { Board } from "./board.js";

export class Player {
  #name: string;
  #mark: "○" | "×";

  constructor(name: string, mark: "○" | "×") {
    this.#name = name;
    this.#mark = mark;
  }

  get name() {
    return this.#name;
  }

  setMark = (position: position, board: Board) => {
    board.getBlock(position).changeStatus(this.#mark);
  };
}
