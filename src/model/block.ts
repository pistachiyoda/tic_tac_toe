export class Block {
  private _status: "○" | "×" | "";
  private _position: position;
  constructor(position: position) {
    this._status = "";
    this._position = position;
  }

  changeStatus(status: "○" | "×" | "") {
    this._status = status;
  }

  get status() {
    return this._status;
  }

  get position() {
    return this._position;
  }
}
