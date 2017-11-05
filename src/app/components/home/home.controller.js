import './home.view.html';
import './home.style.scss';
import '../../images/hangman.png';

export class HomeController {
  constructor($rootScope, $state) {
    'ngInject';

    this.$rootScope = $rootScope;
    this.$state = $state;

    this.init();
  }

  init() {
    this.playerName = this.$rootScope.playerName === undefined ? 'Joueur' :  this.$rootScope.playerName;
  }

  /**
   * Valide le changement de nom et redirige vers la page du jeu
   */
  submitPlayerName() {
    this.$rootScope.playerName = this.playerName;
    this.$state.go('play');
  }
}
