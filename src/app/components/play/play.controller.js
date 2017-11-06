import './play.view.html'
import './play.style.scss'

import { Character } from '../../models/character'

export class PlayController {
  constructor ($rootScope, wordService) {
    'ngInject'

    this.$rootScope = $rootScope
    this.wordService = wordService

    this.init()
  }

  init () {
    this.playerName = this.$rootScope.playerName === undefined ? 'Player' : this.$rootScope.playerName
    this.gameInProgress = false
    this.gameOver = false
  }

  /**
   * Initialise une nouvelle partie à la difficultée choisie
   * @param difficulty La difficulté choisie par le joueur
   */
  launchGame (difficulty) {
    // Réinitialise les variables de jeu
    this.gameInProgress = true
    this.gameOver = false
    this.score = 0
    this.remainingTry = 10

    // Recherche un mot
    this.wordToGuess = this.wordService.findRandomWord(difficulty)
    this.splittedWord = this.wordToGuess.split('')

    this.characterArray = []
    for (let character of this.splittedWord) {
      // On stocke le mot sous forme de tableau de caractères, pour faciliter l'affichage
      this.characterArray.push(new Character(character))
    }
  }

  /**
   * Traite l'action du joueur. Vérifie que la lettre choisie est dans le mot, et vérifie l'état de la partie
   * @param key La lettre sélectionnée par le joueur
   */
  processPlayerMove (key) {
    var keyFound = this.keyFoundInWord(key)

    if (!keyFound) {
      this.remainingTry--
    }

    this.checkGameState()
  }

  /**
   * Vérifie que la lettre est présente dans le mot à deviner
   * @param key La lettre à trouver dans le mot
   */
  keyFoundInWord (key) {
    var keyFound = false
    for (let char of this.characterArray) {
      if (this.charEqualsToKey(char, key)) {
        char.visible = true
        keyFound = true
        this.score++
      }
    }
    return keyFound
  }

  charEqualsToKey (char, key) {
    return char.value.toUpperCase() === key.value.toUpperCase()
  }

  /**
   * Vérifie si l'état du jeu (si le joueur a gagné ou perdu)
   */
  checkGameState () {
    if (this.remainingTry <= 0) {
      this.playerLost()
    } else if (this.wordIsFound()) {
      this.playerWon()
    }
  }

  /**
   * Le mot est trouvé si tous les caractères sont visibles (donc trouvés)
   */
  wordIsFound () {
    var foundChar = 0
    for (let char of this.characterArray) {
      if (char.visible) {
        foundChar++
      }
    }

    return foundChar === this.characterArray.length
  }

  playerLost () {
    this.gameOver = true
    this.success = false
  }

  playerWon () {
    this.gameOver = true
    this.success = true
  }
}
