import { Block } from "./block.js";

export class Board {
  private blocks: Block[];

  constructor() {
    this.blocks = [];
    for (let k = 0; k < 9; k++) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          this.blocks[k] = new Block({ x: i, y: j });
        }
      }
    }
  }

  getBlock(position: position): Block {
    const block = this.blocks.filter((block) => block.position === position);
    if (block.length >= 2) throw new Error("該当ブロックが複数個あります");
    if (block.length <= 0) throw new Error("該当ブロックがありません");
    return block[0];
  }
}
