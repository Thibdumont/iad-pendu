webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DifficultyPickerController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__difficultyPicker_view_html__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__difficultyPicker_view_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__difficultyPicker_view_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__difficultyPicker_style_scss__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__difficultyPicker_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__difficultyPicker_style_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var DifficultyPickerController = function () {
  function DifficultyPickerController() {
    'ngInject';

    _classCallCheck(this, DifficultyPickerController);
  }

  _createClass(DifficultyPickerController, [{
    key: 'selectDifficulty',
    value: function selectDifficulty(difficulty) {
      this.onDifficultySelect({
        difficulty: difficulty
      });
    }
  }]);

  return DifficultyPickerController;
}();

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawingController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drawing_view_html__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drawing_view_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__drawing_view_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drawing_style_scss__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drawing_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__drawing_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__images_step1_png__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__images_step1_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__images_step1_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__images_step2_png__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__images_step2_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__images_step2_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__images_step3_png__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__images_step3_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__images_step3_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__images_step4_png__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__images_step4_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__images_step4_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__images_step5_png__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__images_step5_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__images_step5_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__images_step6_png__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__images_step6_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__images_step6_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__images_step7_png__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__images_step7_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__images_step7_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__images_step8_png__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__images_step8_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__images_step8_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__images_step9_png__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__images_step9_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__images_step9_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__images_step10_png__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__images_step10_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__images_step10_png__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }















var DrawingController = function () {
  function DrawingController() {
    'ngInject';

    _classCallCheck(this, DrawingController);
  }

  /**
   * Indique si la pièce du pendu doit s'afficher ou non.
   * @param layer Le numéro de la couche
   */


  _createClass(DrawingController, [{
    key: 'showLayer',
    value: function showLayer(layer) {
      return this.remainingTry < layer;
    }
  }]);

  return DrawingController;
}();

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__footer_view_html__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__footer_view_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__footer_view_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_style_scss__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__footer_style_scss__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var FooterController = function FooterController() {
  'ngInject';

  _classCallCheck(this, FooterController);
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameInfoController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gameInfo_view_html__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gameInfo_view_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__gameInfo_view_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gameInfo_style_scss__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gameInfo_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__gameInfo_style_scss__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var GameInfoController = function GameInfoController() {
  'ngInject';

  _classCallCheck(this, GameInfoController);
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameOverMessageController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gameOverMessage_view_html__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gameOverMessage_view_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__gameOverMessage_view_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gameOverMessage_style_scss__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gameOverMessage_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__gameOverMessage_style_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var GameOverMessageController = function () {
  function GameOverMessageController() {
    'ngInject';

    _classCallCheck(this, GameOverMessageController);
  }

  _createClass(GameOverMessageController, [{
    key: 'replay',
    value: function replay() {
      this.onReplay();
    }
  }]);

  return GameOverMessageController;
}();

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__help_view_html__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__help_view_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__help_view_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__help_style_scss__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__help_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__help_style_scss__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var HelpController = function HelpController() {
  'ngInject';

  _classCallCheck(this, HelpController);
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_view_html__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_view_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_view_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_style_scss__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__home_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__images_hangman_png__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__images_hangman_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__images_hangman_png__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var HomeController = function () {
  HomeController.$inject = ['$rootScope', '$state'];

  function HomeController($rootScope, $state) {
    'ngInject';

    _classCallCheck(this, HomeController);

    this.$rootScope = $rootScope;
    this.$state = $state;

    this.init();
  }

  _createClass(HomeController, [{
    key: 'init',
    value: function init() {
      this.playerName = this.$rootScope.playerName === undefined ? 'Joueur' : this.$rootScope.playerName;
    }

    /**
     * Valide le changement de nom et redirige vers la page du jeu
     */

  }, {
    key: 'submitPlayerName',
    value: function submitPlayerName() {
      this.$rootScope.playerName = this.playerName;
      this.$state.go('play');
    }
  }]);

  return HomeController;
}();

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__keyboard_view_html__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__keyboard_view_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__keyboard_view_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keyboard_style_scss__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keyboard_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__keyboard_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_key_js__ = __webpack_require__(19);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var KeyboardController = function () {
  function KeyboardController() {
    'ngInject';

    _classCallCheck(this, KeyboardController);

    this.init();
  }

  _createClass(KeyboardController, [{
    key: 'init',
    value: function init() {
      this.keyboard = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = alphabet[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var character = _step.value;

          this.keyboard.push(new __WEBPACK_IMPORTED_MODULE_2__models_key_js__["a" /* Key */](character));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    /**
     * Emet un événement avec la lettre choisie par le joueur
     * @param selectedKey La lettre sélectionnée par le joueur
     */

  }, {
    key: 'selectKey',
    value: function selectKey(selectedKey) {
      if (!selectedKey.selected) {
        selectedKey.selected = true;

        this.onKeySelect({
          key: selectedKey
        });
      }
    }
  }]);

  return KeyboardController;
}();

var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navbar_view_html__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navbar_view_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__navbar_view_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_style_scss__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__navbar_style_scss__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var NavbarController = function NavbarController() {
  'ngInject';

  _classCallCheck(this, NavbarController);
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__play_view_html__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__play_view_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__play_view_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__play_style_scss__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__play_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__play_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_character__ = __webpack_require__(18);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var PlayController = function () {
  PlayController.$inject = ['$rootScope', 'wordService'];

  function PlayController($rootScope, wordService) {
    'ngInject';

    _classCallCheck(this, PlayController);

    this.$rootScope = $rootScope;
    this.wordService = wordService;

    this.init();
  }

  _createClass(PlayController, [{
    key: 'init',
    value: function init() {
      this.playerName = this.$rootScope.playerName == undefined ? 'Player' : this.$rootScope.playerName;
      this.gameInProgress = false;
      this.gameOver = false;
    }

    /**
     * Initialise une nouvelle partie à la difficultée choisie
     * @param difficulty La difficulté choisie par le joueur
     */

  }, {
    key: 'launchGame',
    value: function launchGame(difficulty) {
      // Réinitialise les variables de jeu
      this.gameInProgress = true;
      this.gameOver = false;
      this.score = 0;
      this.remainingTry = 10;

      // Recherche un mot
      this.wordToGuess = this.wordService.findRandomWord(difficulty);
      this.splittedWord = this.wordToGuess.split("");

      this.characterArray = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.splittedWord[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var character = _step.value;

          //On stocke le mot sous forme de tableau de caractères, pour faciliter l'affichage
          this.characterArray.push(new __WEBPACK_IMPORTED_MODULE_2__models_character__["a" /* Character */](character));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    /**
     * Traite l'action du joueur. Vérifie que la lettre choisie est dans le mot, et vérifie l'état de la partie
     * @param key La lettre sélectionnée par le joueur
     */

  }, {
    key: 'processPlayerMove',
    value: function processPlayerMove(key) {
      var keyFound = this.keyFoundInWord(key);

      if (!keyFound) {
        this.remainingTry--;
      }

      this.checkGameState();
    }

    /**
     * Vérifie que la lettre est présente dans le mot à deviner
     * @param key La lettre à trouver dans le mot
     */

  }, {
    key: 'keyFoundInWord',
    value: function keyFoundInWord(key) {
      var keyFound = false;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.characterArray[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var char = _step2.value;

          if (this.charEqualsToKey(char, key)) {
            char.visible = true;
            keyFound = true;
            this.score++;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return keyFound;
    }
  }, {
    key: 'charEqualsToKey',
    value: function charEqualsToKey(char, key) {
      return char.value.toUpperCase() === key.value.toUpperCase();
    }

    /**
     * Vérifie si l'état du jeu (si le joueur a gagné ou perdu)
     */

  }, {
    key: 'checkGameState',
    value: function checkGameState() {
      if (this.remainingTry <= 0) {
        this.playerLost();
      } else if (this.wordIsFound()) {
        this.playerWon();
      }
    }

    /**
     * Le mot est trouvé si tous les caractères sont visibles (donc trouvés)
     */

  }, {
    key: 'wordIsFound',
    value: function wordIsFound() {
      var foundChar = 0;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.characterArray[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var char = _step3.value;

          if (char.visible) {
            foundChar++;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return foundChar === this.characterArray.length;
    }
  }, {
    key: 'playerLost',
    value: function playerLost() {
      this.gameOver = true;
      this.success = false;
    }
  }, {
    key: 'playerWon',
    value: function playerWon() {
      this.gameOver = true;
      this.success = true;
    }
  }]);

  return PlayController;
}();

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordToGuessController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordToGuess_view_html__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordToGuess_view_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordToGuess_view_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordToGuess_style_scss__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordToGuess_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordToGuess_style_scss__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var WordToGuessController = function WordToGuessController() {
  'ngInject';

  _classCallCheck(this, WordToGuessController);
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Router; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = function () {
  function Router() {
    _classCallCheck(this, Router);
  }

  _createClass(Router, null, [{
    key: 'configure',
    value: function configure(app) {
      app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        'ngInject';

        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('home', {
          url: '/home',
          templateUrl: 'components/home/home.view.html',
          controller: 'HomeController as ctrl'
        }).state('play', {
          url: '/play',
          templateUrl: 'components/play/play.view.html',
          controller: 'PlayController as ctrl'
        }).state('help', {
          url: '/help',
          templateUrl: 'components/help/help.view.html',
          controller: 'HelpController as ctrl'
        });
      }]);
    }
  }]);

  return Router;
}();

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordService; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WordService = function () {
  function WordService() {
    'ngInject';

    _classCallCheck(this, WordService);
  }

  _createClass(WordService, [{
    key: "findRandomWord",
    value: function findRandomWord(difficulty) {
      var wordList = wordDictionnary[difficulty];

      return wordList[Math.floor(Math.random() * wordList.length)];
    }
  }]);

  return WordService;
}();

var wordDictionnary = {
  "easy": ["internet", "girafe", "garcon", "perle", "fille", "tomate", "haricot", "gentil"],
  "medium": ["poisson", "maison", "arbre", "citron", "muraille", "vache"],
  "hard": ["nuageux", "navet", "ingenieur", "xylophone", "paysan", "france"]
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_controller_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_play_play_controller_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_help_help_controller_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_navbar_navbar_controller_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_footer_footer_controller_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_gameInfo_gameInfo_controller_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_keyboard_keyboard_controller_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_difficultyPicker_difficultyPicker_controller_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_wordToGuess_wordToGuess_controller_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_drawing_drawing_controller_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_gameOverMessage_gameOverMessage_controller_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_word_service_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__styles_main_scss__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__styles_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__styles_main_scss__);



















var app = angular.module('HangmanApp', ['ui.router']);

__WEBPACK_IMPORTED_MODULE_0__router_js__["a" /* Router */].configure(app);

app.controller('HomeController', __WEBPACK_IMPORTED_MODULE_1__components_home_home_controller_js__["a" /* HomeController */]).controller('PlayController', __WEBPACK_IMPORTED_MODULE_2__components_play_play_controller_js__["a" /* PlayController */]).controller('HelpController', __WEBPACK_IMPORTED_MODULE_3__components_help_help_controller_js__["a" /* HelpController */]).component('hangmanNavbar', {
  templateUrl: 'components/navbar/navbar.view.html',
  controller: __WEBPACK_IMPORTED_MODULE_4__components_navbar_navbar_controller_js__["a" /* NavbarController */]
}).component('hangmanFooter', {
  templateUrl: 'components/footer/footer.view.html',
  controller: __WEBPACK_IMPORTED_MODULE_5__components_footer_footer_controller_js__["a" /* FooterController */]
}).component('hangmanDifficultyPicker', {
  templateUrl: 'components/difficultyPicker/difficultyPicker.view.html',
  controller: __WEBPACK_IMPORTED_MODULE_8__components_difficultyPicker_difficultyPicker_controller_js__["a" /* DifficultyPickerController */],
  controllerAs: 'ctrl',
  bindings: {
    onDifficultySelect: '&'
  }
}).component('hangmanGameInfo', {
  templateUrl: 'components/gameInfo/gameInfo.view.html',
  controller: __WEBPACK_IMPORTED_MODULE_6__components_gameInfo_gameInfo_controller_js__["a" /* GameInfoController */],
  controllerAs: 'ctrl',
  bindings: {
    score: '<',
    remainingTry: '<'
  }
}).component('hangmanWordToGuess', {
  templateUrl: 'components/wordToGuess/wordToGuess.view.html',
  controller: __WEBPACK_IMPORTED_MODULE_9__components_wordToGuess_wordToGuess_controller_js__["a" /* WordToGuessController */],
  controllerAs: 'ctrl',
  bindings: {
    characterArray: '<'
  }
}).component('hangmanKeyboard', {
  templateUrl: 'components/keyboard/keyboard.view.html',
  controller: __WEBPACK_IMPORTED_MODULE_7__components_keyboard_keyboard_controller_js__["a" /* KeyboardController */],
  controllerAs: 'ctrl',
  bindings: {
    onKeySelect: '&'
  }
}).component('hangmanDrawing', {
  templateUrl: 'components/drawing/drawing.view.html',
  controller: __WEBPACK_IMPORTED_MODULE_10__components_drawing_drawing_controller_js__["a" /* DrawingController */],
  controllerAs: 'ctrl',
  bindings: {
    remainingTry: '<'
  }
}).component('hangmanGameOverMessage', {
  templateUrl: 'components/gameOverMessage/gameOverMessage.view.html',
  controller: __WEBPACK_IMPORTED_MODULE_11__components_gameOverMessage_gameOverMessage_controller_js__["a" /* GameOverMessageController */],
  controllerAs: 'ctrl',
  bindings: {
    success: '<',
    playerName: '<',
    wordToGuess: '<',
    onReplay: '&'
  }
}).service('wordService', __WEBPACK_IMPORTED_MODULE_12__services_word_service_js__["a" /* WordService */]);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Character; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Character = function Character(value) {
  _classCallCheck(this, Character);

  this.value = value;
  this.visible = false;
};

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Key; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Key = function Key(value) {
  _classCallCheck(this, Key);

  this.value = value;
  this.selected = false;
};

/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/hangman.png";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/step1.png";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/step10.png";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/step2.png";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/step3.png";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/step4.png";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/step5.png";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/step6.png";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/step7.png";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/step8.png";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/step9.png";

/***/ }),
/* 43 */
/***/ (function(module, exports) {

var path = 'components/difficultyPicker/difficultyPicker.view.html';
var html = "<h2>Choisissez une difficulté</h2>\r\n<div class=\"button-bar\">\r\n  <button ng-click=\"ctrl.selectDifficulty('easy')\">Facile</button>\r\n  <button ng-click=\"ctrl.selectDifficulty('medium')\">Moyen</button>\r\n  <button ng-click=\"ctrl.selectDifficulty('hard')\">Difficile</button>\r\n</div>\r\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

var path = 'components/drawing/drawing.view.html';
var html = "<!-- Pour construire le pendu, on superpose les images-->\r\n<div class=\"hangman-drawing\">\r\n  <img src=\"/images/step1.png\" ng-show=\"ctrl.showLayer(10)\">\r\n  <img src=\"/images/step2.png\" ng-show=\"ctrl.showLayer(9)\">\r\n  <img src=\"/images/step3.png\" ng-show=\"ctrl.showLayer(8)\">\r\n  <img src=\"/images/step4.png\" ng-show=\"ctrl.showLayer(7)\">\r\n  <img src=\"/images/step5.png\" ng-show=\"ctrl.showLayer(6)\">\r\n  <img src=\"/images/step6.png\" ng-show=\"ctrl.showLayer(5)\">\r\n  <img src=\"/images/step7.png\" ng-show=\"ctrl.showLayer(4)\">\r\n  <img src=\"/images/step8.png\" ng-show=\"ctrl.showLayer(3)\">\r\n  <img src=\"/images/step9.png\" ng-show=\"ctrl.showLayer(2)\">\r\n  <img src=\"/images/step10.png\" ng-show=\"ctrl.showLayer(1)\">\r\n</div>\r\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

var path = 'components/footer/footer.view.html';
var html = "<footer>\r\n  Jeu du pendu - Thibaut Dumont - 2017\r\n</footer>\r\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

var path = 'components/gameInfo/gameInfo.view.html';
var html = "<div class=\"game-info\">\r\n  <div class=\"info-item\">\r\n    <label>Lettres trouvées</label>&nbsp;\r\n    <strong>{{ctrl.score}}</strong>\r\n  </div>\r\n  <div class=\"info-item\">\r\n    <label>Tentatives restantes</label>&nbsp;\r\n    <strong>{{ctrl.remainingTry}}</strong>\r\n  </div>\r\n</div>\r\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

var path = 'components/gameOverMessage/gameOverMessage.view.html';
var html = "<div class=\"game-over-message\">\r\n  \r\n  <strong ng-if=\"ctrl.success\">\r\n    Bien joué <span class=\"player-name\">{{ctrl.playerName}}</span> ! Vous avez trouvé le mot\r\n    <strong class=\"word-to-guess\">{{ctrl.wordToGuess | uppercase}}</strong>\r\n  </strong>\r\n\r\n  <strong ng-if=\"!ctrl.success\">\r\n    Désolé <span class=\"player-name\">{{ctrl.playerName}}</span> ... vous avez perdu. Le mot à deviner était\r\n    <strong class=\"word-to-guess\">{{ctrl.wordToGuess | uppercase}}</strong>\r\n    <img src=\"/images/hangman.png\" alt=\"hangman\">\r\n  </strong>\r\n\r\n  <button ng-click=\"ctrl.replay()\">Rejouer ?</button>\r\n</div>\r\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

var path = 'components/help/help.view.html';
var html = "<h2>Manuel du jeu</h2>\r\n\r\n<ol>\r\n  <li>Renseignez votre nom sur la page d'accueil</li>\r\n  <li>Choisissez la difficulté dans laquelle vous souhaitez jouer</li>\r\n  <li>Trouvez le mot en choisissant des lettres de l'alphabet</li>\r\n  <li>Si la lettre choisie est dans le mot, ces lettres apparaissent</li>\r\n  <li>Si la lettre n'est pas dans le mot, une pièce du pendu est ajoutée</li>\r\n  <li>Vous perdez la partie une fois le pendu totalement construit (après 10 tentatives)</li>\r\n</ol>\r\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

var path = 'components/home/home.view.html';
var html = "<div>\r\n  <h1>Bienvenue sur le jeu du Pendu !</h1>\r\n\r\n  <div class=\"img-container\">\r\n    <img src=\"/images/hangman.png\" alt=\"hangman\">\r\n  </div>\r\n\r\n  <form class=\"margin-top-30\">\r\n    <h2>Nom du joueur</h2>\r\n    <input type=\"text\" ng-model=\"ctrl.playerName\" placeholder=\"Votre nom\">\r\n    <button ng-click=\"ctrl.submitPlayerName()\">Jouer</button>\r\n  </form>\r\n</div>\r\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

var path = 'components/keyboard/keyboard.view.html';
var html = "<h2>Choisissez des lettres</h2>\r\n<ul class=\"keyboard\">\r\n  <li ng-repeat=\"key in ctrl.keyboard\" ng-click=\"ctrl.selectKey(key)\" ng-class=\"{'selected': key.selected}\">{{key.value}}</li>\r\n</ul>\r\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

var path = 'components/navbar/navbar.view.html';
var html = "<nav>\r\n  <ul>\r\n    <li ui-sref=\"home\" ui-sref-active=\"active\">\r\n      <a>Accueil</a>\r\n    </li>\r\n    <li ui-sref=\"play\" ui-sref-active=\"active\">\r\n      <a>Jouer</a>\r\n    </li>\r\n    <li ui-sref=\"help\" ui-sref-active=\"active\">\r\n      <a>Aide</a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

var path = 'components/play/play.view.html';
var html = "<div ng-if=\"!ctrl.gameOver\">\r\n  <hangman-difficulty-picker ng-if=\"!ctrl.gameInProgress\" on-difficulty-select=\"ctrl.launchGame(difficulty)\"></hangman-difficulty-picker>\r\n\r\n  <div ng-if=\"ctrl.gameInProgress\">\r\n    <h2>A vous de jouer <strong class=\"player-name\">{{ctrl.playerName}}</strong> !</h2>\r\n\r\n    <hangman-game-info score=\"ctrl.score\" remaining-try=\"ctrl.remainingTry\"></hangman-game-info>\r\n    \r\n    <hangman-word-to-guess character-array=\"ctrl.characterArray\"></hangman-word-to-guess>\r\n   \r\n    <hangman-keyboard on-key-select=\"ctrl.processPlayerMove(key)\"></hangman-keyboard>\r\n\r\n    <hangman-drawing remaining-try=\"ctrl.remainingTry\"></hangman-drawing>\r\n  </div>\r\n</div>\r\n\r\n<hangman-game-over-message ng-if=\"ctrl.gameOver\" success=\"ctrl.success\" player-name=\"ctrl.playerName\" word-to-guess=\"ctrl.wordToGuess\" on-replay=\"ctrl.init()\"></hangman-game-over-message>\r\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 53 */
/***/ (function(module, exports) {

var path = 'components/wordToGuess/wordToGuess.view.html';
var html = "<ul class=\"word-to-guess\">\r\n  <li ng-repeat=\"char in ctrl.characterArray track by $index\">\r\n    <strong ng-show=\"char.visible\">{{char.value}}</strong>\r\n  </li>\r\n</ul>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ })
],[17]);
//# sourceMappingURL=app.bundle.js.map