import './difficultyPicker.view.html'
import './difficultyPicker.style.scss'


export class DifficultyPickerController {
  constructor () {
    'ngInject'
  }

  selectDifficulty (difficulty) {
    this.onDifficultySelect({
      difficulty: difficulty
    })
  }
}
