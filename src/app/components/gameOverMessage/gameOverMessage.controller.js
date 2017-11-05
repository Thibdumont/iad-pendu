import './gameOverMessage.view.html';
import './gameOverMessage.style.scss';

export class GameOverMessageController {
  constructor() {
    'ngInject';
  }

  replay() {
    this.onReplay();
  }
}
