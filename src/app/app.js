import { Router } from './router.js'
import { Translate } from './translate.js'

import { HomeController } from './components/home/home.controller.js'
import { PlayController } from './components/play/play.controller.js'
import { HelpController } from './components/help/help.controller.js'
import { NavbarController } from './components/navbar/navbar.controller.js'
import { FooterController } from './components/footer/footer.controller.js'

import { GameInfoController } from './components/gameInfo/gameInfo.controller.js'
import { KeyboardController } from './components/keyboard/keyboard.controller.js'
import { DifficultyPickerController } from './components/difficultyPicker/difficultyPicker.controller.js'
import { WordToGuessController } from './components/wordToGuess/wordToGuess.controller.js'
import { DrawingController } from './components/drawing/drawing.controller.js'
import { GameOverMessageController } from './components/gameOverMessage/gameOverMessage.controller.js'

import { WordService } from './services/word.service.js'

import './styles/main.scss'

let app = angular.module('HangmanApp', [
  'ui.router',
  'pascalprecht.translate',
  'ngSanitize'
])

Router.configure(app)

Translate.configure(app)

app
  .controller('HomeController', HomeController)
  .controller('PlayController', PlayController)
  .controller('HelpController', HelpController)
  .component('hangmanNavbar', {
    templateUrl: 'components/navbar/navbar.view.html',
    controller: NavbarController
  })
  .component('hangmanFooter', {
    templateUrl: 'components/footer/footer.view.html',
    controller: FooterController
  })
  .component('hangmanDifficultyPicker', {
    templateUrl: 'components/difficultyPicker/difficultyPicker.view.html',
    controller: DifficultyPickerController,
    controllerAs: 'ctrl',
    bindings: {
      onDifficultySelect: '&'
    }
  })
  .component('hangmanGameInfo', {
    templateUrl: 'components/gameInfo/gameInfo.view.html',
    controller: GameInfoController,
    controllerAs: 'ctrl',
    bindings: {
      score: '<',
      remainingTry: '<'
    }
  })
  .component('hangmanWordToGuess', {
    templateUrl: 'components/wordToGuess/wordToGuess.view.html',
    controller: WordToGuessController,
    controllerAs: 'ctrl',
    bindings: {
      characterArray: '<'
    }
  })
  .component('hangmanKeyboard', {
    templateUrl: 'components/keyboard/keyboard.view.html',
    controller: KeyboardController,
    controllerAs: 'ctrl',
    bindings: {
      onKeySelect: '&'
    }
  })
  .component('hangmanDrawing', {
    templateUrl: 'components/drawing/drawing.view.html',
    controller: DrawingController,
    controllerAs: 'ctrl',
    bindings: {
      remainingTry: '<'
    }
  })
  .component('hangmanGameOverMessage', {
    templateUrl: 'components/gameOverMessage/gameOverMessage.view.html',
    controller: GameOverMessageController,
    controllerAs: 'ctrl',
    bindings: {
      success: '<',
      playerName: '<',
      wordToGuess: '<',
      onReplay: '&'
    }
  })
  .service('wordService', WordService)
