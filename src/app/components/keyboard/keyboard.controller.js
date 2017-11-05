import './keyboard.view.html';
import './keyboard.style.scss';

import { Key } from '../../models/key.js';

export class KeyboardController {
  constructor() {
    'ngInject';

    this.init();
  }

  init() {
    this.keyboard = [];
    for (let character of alphabet) {
      this.keyboard.push(new Key(character));
    }
  }

  /**
   * Emet un événement avec la lettre choisie par le joueur
   * @param selectedKey La lettre sélectionnée par le joueur
   */
  selectKey(selectedKey) {
    if (!selectedKey.selected) {
      selectedKey.selected = true;

      this.onKeySelect({
        key: selectedKey
      });
    }
  }
}

var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];