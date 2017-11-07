import './i18n/fr.json'

export class Translate {
  static configure (app) {
    app.config(($translateProvider) => {
      'ngInject'

      $translateProvider.useStaticFilesLoader({
        prefix: 'i18n/',
        suffix: '.json'
      })

      $translateProvider.useSanitizeValueStrategy('sce')
      $translateProvider.preferredLanguage('fr')
    })
  }
}
