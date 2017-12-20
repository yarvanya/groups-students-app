export function ModalDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
      title: '=modalTitle',
      header: '=modalHeader',
      body: '=modalBody',
      footer: '=modalFooter',
      callbackbuttonleft: '&ngClickLeftButton',
      callbackbuttonright: '&ngClickRightButton',
      handler: '=lolo'
    },
    templateUrl: 'app/components/modal/modal.html',
    transclude: true,
    controller: ModalController,
    controllerAs: 'modalCntr',
    bindToController: true
  };

  return directive;
}

export class ModalController {
  constructor($scope, $modal) {
    'ngInject';

    this.separateModal = $modal;

    $scope.$on('pleaseOpenDeleteModal', (event, data) => {
      console.log(data);
      console.log(event);
      this.openSeparateModal();
    });
  }

  openSeparateModal() {
    return this.separateModal({
      templateUrl: 'app/components/modal/modal.html',
      placement: 'center',
      container: 'body',
      show: true
    });
  }



}
