import './drawing.view.html';
import './drawing.style.scss';

import '../../images/step1.png';
import '../../images/step2.png';
import '../../images/step3.png';
import '../../images/step4.png';
import '../../images/step5.png';
import '../../images/step6.png';
import '../../images/step7.png';
import '../../images/step8.png';
import '../../images/step9.png';
import '../../images/step10.png';


export class DrawingController {
  constructor() {
    'ngInject';
  }

  /**
   * Indique si la pièce du pendu doit s'afficher ou non.
   * @param layer Le numéro de la couche
   */
  showLayer(layer) {
    return this.remainingTry < layer;
  }
}
