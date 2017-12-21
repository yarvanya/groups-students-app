export function ModalDirective() {
  'ngInject';

  let directive = {
    scope: {
      modalParams: '='
    },
    controller: ModalController,
    controllerAs: 'modalCntr',
    bindToController: true
  };

  return directive;
}

export class ModalController {
  constructor($scope, $modal) {
    'ngInject';

    this.myOtherModal = $modal({scope: $scope, templateUrl: 'app/components/modal/modal.html', show: false});
    $scope.$on('pleaseOpenDeleteModal', (event, data) => {
      this.data = data;
      this.openSeparateModal();
    });
  }

  openSeparateModal() {
    console.log(this.modalParams);
    this.myOtherModal.$promise.then(this.myOtherModal.show);
  }

}
