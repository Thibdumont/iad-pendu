export class WordService {
  constructor () {
    'ngInject'
  }

  findRandomWord (difficulty) {
    let wordList = wordDictionnary[difficulty]

    return wordList[Math.floor(Math.random() * wordList.length)]
  }
}

var wordDictionnary = {
  'easy': [
    'internet',
    'girafe',
    'garcon',
    'perle',
    'fille',
    'tomate',
    'haricot',
    'gentil'
  ],
  'medium': [
    'poisson',
    'maison',
    'arbre',
    'citron',
    'muraille',
    'vache'
  ],
  'hard': [
    'nuageux',
    'navet',
    'ingenieur',
    'xylophone',
    'paysan',
    'france'
  ]
}
