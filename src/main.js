import { Game as MainGame } from './scenes/Game';
import { AUTO, Scale, Game } from 'phaser';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
  type: AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#FFF",
  parent: 'game-container',
  scale: {
    mode: Scale.FIT,
    autoCenter: Scale.CENTER_BOTH
  },
  scene: [
    MainGame
  ],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
};

export default new Game(config);
