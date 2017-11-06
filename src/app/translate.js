export class Translate {
  static configure (app) {
    app.config(($translateProvider) => {
      'ngInject'

      $translateProvider.translations('fr', {
        NAVBAR: {
          HOME: 'Accueil',
          PLAY: 'Jouer',
          HELP: 'Aide'
        },
        FOOTER: {
          CONTENT: 'Jeu du pendu - Thibaut Dumont - 2017'
        },
        HOME: {
          TITLE: 'Bienvenue sur le jeu du Pendu !',
          PLAYER_NAME: 'Nom du joueur',
          PLAY_BUTTON: 'Jouer'
        },
        PLAY: {
          SELECT_DIFFICULTY: 'Choisissez une difficulté',
          DIFFICULTY: {
            EASY: 'Facile',
            MEDIUM: 'Moyen',
            HARD: 'Difficile'
          },
          LET_S_PLAY: 'A vous de jouer',
          FOUND_CHARACTERS: 'Lettres trouvées',
          REMAINING_TRY: 'Tentatives restantes',
          SELECT_CHARACTERS: 'Choisissez des lettres',
          PLAYER_LOST: 'Désolé {{name}} ... vous avez perdu. Le mot à deviner était',
          PLAYER_WON: 'Bien joué {{name}} ! Vous avez trouvé le mot',
          REPLAY_BUTTON: 'Rejouer ?'
        },
        HELP: {
          TITLE: 'Manuel du jeu',
          LINE1: 'Renseignez votre nom sur la page d\'accueil',
          LINE2: 'Choisissez la difficulté dans laquelle vous souhaitez jouer',
          LINE3: 'Trouvez le mot en choisissant des lettres de l\'alphabet',
          LINE4: 'Si la lettre choisie est dans le mot, ces lettres apparaissent',
          LINE5: 'Si la lettre n\'est pas dans le mot, une pièce du pendu est ajoutée',
          LINE6: 'Vous perdez la partie une fois le pendu totalement construit (après 10 tentatives)'
        }
      })

      $translateProvider.useSanitizeValueStrategy('sce')
      $translateProvider.preferredLanguage('fr')
    })
  }
}
