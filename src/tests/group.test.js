import { GroupController } from '../app/components/group/group.directive';

let expect = chai.expect;

describe('GroupController', () => {
  let groups = [
    {id: 1, name: "PM-5", curatorName: "J R"},
    {id: 2, name: "TM-5", curatorName: "F B"}
  ];
  let students = [
    {id: 1, groupId: 1, name: "John Doe", email: "jd@gmail.com", age: 25},
    {id: 2, groupId: 1, name: "Harry Potter", email: "hp@gmail.com", age: 25}
  ];
  let $alert = () => {};
  let groupCtrl = new GroupController(groups, students, $alert);
  let editedGroup = groupCtrl.groupsList[1];

  groupCtrl.newGroup = {name: "TEST-1", curatorName: "T T"};
  groupCtrl.clickedGroup = groupCtrl.groupsList[0];

  it('Should groupCtrl be an instance of GroupController', () => {
    expect(groupCtrl).to.be.an.instanceof(GroupController);
  });

  it('Loads groups data correctly', () => {
    expect(groupCtrl).to.not.be.undefined;
  });

  it('Should groupsList be an array', () => {
    expect(groupCtrl.groupsList).to.be.an('array');
  });

  it('Should studentsList be an array', () => {
    expect(groupCtrl.studentsList).to.be.an('array');
  });

  it('Should add new group to groupList after validation', () => {
    expect(groupCtrl.createGroupFieldValidation()).to.be.false;
    groupCtrl.createNewGroup();
    let lastGroup = groupCtrl.groupsList[groupCtrl.groupsList.length - 1];
    expect(groupCtrl.groupsList).to.include(lastGroup);
    expect(groupCtrl.newGroup).to.be.empty;
  });

  let lastGroup = groupCtrl.groupsList[groupCtrl.groupsList.length - 1];

  it('Should have all keys new group', () => {
    expect(lastGroup).to.have.all.keys('id', 'name', 'curatorName');
  });

  it('Should each property be right type after creating new group', () => {
    expect(lastGroup).to.be.an('object').that.is.not.empty;
    expect(lastGroup.id).to.be.a('number');
    expect(lastGroup.name).to.be.a('string');
    expect(lastGroup.curatorName).to.be.a('string');
  });

  it('Should each property does not be empty after creating new group', () => {
    expect(lastGroup.id).to.be.above(0);
    expect(lastGroup.name).to.not.have.lengthOf(0);
    expect(lastGroup.curatorName).to.not.have.lengthOf(0);
  });

  it('Should update selected group in groupsList after validation', () => {
    editedGroup.name = "NEW-1";
    expect(groupCtrl.updateGroupFieldValidation(editedGroup)).to.be.false;
    groupCtrl.updateGroup(editedGroup);
    expect(groupCtrl.groupsList).to.include(editedGroup);
  });

  it('Should each property be right type after updating selected group', () => {
    expect(editedGroup).to.be.an('object').that.is.not.empty;
    expect(editedGroup.id).to.be.a('number');
    expect(editedGroup.name).to.be.a('string');
    expect(editedGroup.curatorName).to.be.a('string');
  });

  it('Should each property does not be empty after updating selected group', () => {
    expect(editedGroup.id).to.be.above(0);
    expect(editedGroup.name).to.not.have.lengthOf(0);
    expect(editedGroup.curatorName).to.not.have.lengthOf(0);
  });

  it('Should delete selected group from groupsList', () => {
    let groupForDeleting = groupCtrl.clickedGroup;
    groupCtrl.deleteGroup(groupForDeleting);
    expect(groupCtrl.groupsList).to.not.include(groupForDeleting);
  });

});
