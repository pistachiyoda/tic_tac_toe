import { GameManager } from "../model/gameManeger";

export class Render {
  gamemanager: GameManager;

  constructor(gamemanager: GameManager) {
    this.gamemanager = gamemanager;
  }

  displayName = () => {
    const player_name = this.gamemanager.currentPlayer.name;
    document.getElementById("player_name")!.innerHTML = player_name;
  };
}
