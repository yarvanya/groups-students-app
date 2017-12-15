import { GroupController } from '../app/components/group/group.directive';
let expect = chai.expect;

describe('GroupController', () => {
  let groups = [1,2];

  let students = [1,2,3,4,5,6];

  let $alert = () => {};

  let groupCtrl = new GroupController(groups, students, $alert);

  it('Loads data correctly', () => {
    expect(groupCtrl).to.not.be.undefined;
  });

  it('Should groupsList be an array', () => {
    expect(groupCtrl.groupsList).to.be.an('array');
  });

  it('Should studentsList be an array', () => {
    expect(groupCtrl.studentsList).to.be.an('array');
  });

});
