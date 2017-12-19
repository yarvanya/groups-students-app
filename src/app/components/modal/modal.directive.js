export function ModalDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
      title: '=modalTitle',
      header: '=modalHeader',
      body: '=modalBody',
      footer: '=modalFooter',
      id: '=modalId'
    },
    templateUrl: 'app/components/modal/modal.html',
    transclude: true,
    controller: ModalController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

export class ModalController {
  constructor($modal) {
    'ngInject';

    this.title = 'Title';
    this.header = 'Put here your header';
    this.body = 'Put here your body';
    this.footer = 'Put here your footer';
    this.id = 'groupModal';

    console.log(this);
    this.myModal = $modal;
  }

  openModal(controller, controllerAs, template){
    return this.myModal({
      controller: controller,
      controllerAs: controllerAs,
      templateUrl: template,
      placement: 'center',
      container: 'body',
      show: true
    })
  }

}
