export class Block {
  #status: "○" | "×" | "";
  #position: position;
  constructor(position: position) {
    this.#status = "";
    this.#position = position;
  }

  changeStatus(status: "○" | "×" | "") {
    this.#status = status;
  }

  get status() {
    return this.#status;
  }

  get position() {
    return this.#position;
  }
}
