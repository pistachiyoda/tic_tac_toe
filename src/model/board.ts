import { Block } from "./block.js";

export class Board {
  #blocks: Block[];

  constructor() {
    this.#blocks = [];
    let k = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.blocks[k] = new Block({ x: i, y: j });
        k++;
      }
    }
  }

  get blocks() {
    return this.#blocks;
  }

  getBlock(position: position): Block {
    const block = this.blocks.filter(
      (block) =>
        block.position.x === position.x && block.position.y === position.y
    );
    if (block.length >= 2) throw new Error("該当ブロックが複数個あります");
    if (block.length <= 0) throw new Error("該当ブロックがありません");
    return block[0];
  }
}
