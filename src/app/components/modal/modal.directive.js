export function ModalDirective() {
  'ngInject';

  let directive = {
    scope: {
      title: '=',
      body: '=',
      footer: '='
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
    $scope.$on('pleaseOpenDeleteModal', event => {
      console.log(this.title);
      console.log(this.body);
      console.log(this.footer);

      console.log(event);

      this.openSeparateModal();
    });

  }

  openSeparateModal() {
    console.log("1", this.myOtherModal.$isShown);
    this.myOtherModal.$promise.then(this.myOtherModal.show);
    console.log('2',this.myOtherModal.$isShown);
  }

  test() {
    console.log('3',this.myOtherModal.$isShown);
  }

}
