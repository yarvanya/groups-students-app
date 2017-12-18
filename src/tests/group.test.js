import { GroupController } from '../app/components/group/group.directive';
let expect = chai.expect,
    should = chai.should();

describe('GroupController', () => {
  let groups = [
    {id: 1, name: "PM-5", curatorName: "J R"},
    {id: 2, name: "TM-5", curatorName: "F B"}
  ];
  let students = [
    {id: 1, groupId: 1, fullName: "John Doe", email: "jd@gmail.com", age: 25},
    {id: 2, groupId: 1, fullName: "Ivan Ivanov", email: "ii@gmail.com", age: 25},
    {id: 3, groupId: 1, fullName: "Harry Potter", email: "hp@gmail.com", age: 25}
  ];
  let $alert = () => {};
  let groupCtrl = new GroupController(groups, students, $alert);

  groupCtrl.newGroup = {name: "TEST-1", curatorName: "T T"};
  groupCtrl.clickedGroup = groupCtrl.groupsList[0];

  it('Loads data correctly', () => {
    expect(groupCtrl).to.not.be.undefined;
  });

  it('Should groupsList be an array', () => {
    expect(groupCtrl.groupsList).to.be.an('array');
  });

  it('Should studentsList be an array', () => {
    expect(groupCtrl.studentsList).to.be.an('array');
  });

  it('Should add new group to groupList', () => {
    groupCtrl.createNewGroup();
    let lastGroup = groupCtrl.groupsList[groupCtrl.groupsList.length - 1];
    expect(groupCtrl.groupsList).to.include(lastGroup);
  });

  it('Should have all keys new group', () => {
    let lastGroup = groupCtrl.groupsList[groupCtrl.groupsList.length - 1];
    expect(lastGroup).to.have.all.keys('id', 'name', 'curatorName');
  });

  it('Should each property be right type after creating new group', () => {
    let lastGroup = groupCtrl.groupsList[groupCtrl.groupsList.length - 1];
    expect(lastGroup).to.be.an('object').that.is.not.empty;
    expect(lastGroup.id).to.be.an('number');
    expect(lastGroup.name).to.be.an('string');
    expect(lastGroup.curatorName).to.be.an('string');
  });

  it('Should update selected group in groupsList', () => {
    let editedGroup = groupCtrl.groupsList[1];
    editedGroup.name = "NEW-1";
    groupCtrl.updateGroup(editedGroup);
    expect(groupCtrl.groupsList).to.include(editedGroup);
  });

  it('Should each property be right type after updating selected group', () => {
    let editedGroup = groupCtrl.groupsList[1];
    expect(editedGroup).to.be.an('object').that.is.not.empty;
    expect(editedGroup.id).to.be.an('number');
    expect(editedGroup.name).to.be.an('string');
    expect(editedGroup.curatorName).to.be.an('string');
  });

  it('Should delete selected group from groupsList', () => {
    let groupForDeleting = groupCtrl.clickedGroup;
    groupCtrl.deleteGroup(groupForDeleting);
    expect(groupCtrl.groupsList).to.not.include(groupForDeleting);
  });

});
