export class MainController {
  constructor(webDevTec) {
    'ngInject';
    this.awesomeThings = [];
    this.activate(webDevTec);
  }

  activate(webDevTec) {
    this.getWebDevTec(webDevTec);
  }

  getWebDevTec(webDevTec) {
    this.awesomeThings = webDevTec.getTec();

    angular.forEach(this.awesomeThings, (awesomeThing) => {
      awesomeThing.rank = Math.random();
    });
  }
}
