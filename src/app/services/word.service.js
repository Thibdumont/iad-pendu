import '../resources/easy.json'
import '../resources/medium.json'
import '../resources/hard.json'

export class WordService {
  constructor ($http) {
    'ngInject'

    this.$http = $http
  }

  getDictionnary (difficulty) {
    return this.$http.get(`../resources/${difficulty}.json`)
  }
}
