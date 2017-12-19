import { StudentController } from '../app/components/student/student.directive';
import chai from '../../node_modules/chai/chai';

let expect = chai.expect;

describe('StudentController', () => {
  let groups = [
    {id: 1, name: "PM-5", curatorName: "J R"},
    {id: 2, name: "TM-5", curatorName: "F B"}
  ];
  let students = [
    {id: 1, groupId: 1, fullName: "John Doe", email: "jd@gmail.com", age: 25},
    {id: 2, groupId: 1, fullName: "Harry Potter", email: "hp@gmail.com", age: 25}
  ];
  let $alert = () => {};
  let studentCtrl = new StudentController(groups, students, $alert);
  let editedStudent = studentCtrl.studentsList[1];

  studentCtrl.newStudent = {fullName: "Test Test", email: "test@gmail.com", age: 23};
  studentCtrl.clickedStudent = studentCtrl.studentsList[0];

  it('Should studentCtrl be an instance of StudentController', () => {
    expect(studentCtrl).to.be.an.instanceof(StudentController);
  });

  it('Loads students data correctly', () => {
    expect(studentCtrl).to.not.be.undefined;
  });

  it('Should groupsList be an array', () => {
    expect(studentCtrl.groupsList).to.be.an('array');
  });

  it('Should studentsList be an array', () => {
    expect(studentCtrl.studentsList).to.be.an('array');
  });

  it('Should add new student to studentsList after validation', () => {
    let group = studentCtrl.groupsList[0];
    expect(studentCtrl.createStudentFieldValidation(group)).to.be.false;
    studentCtrl.createStudent(group);
    let lastStudent = studentCtrl.studentsList[studentCtrl.studentsList.length - 1];
    expect(studentCtrl.studentsList).to.include(lastStudent);
    expect(studentCtrl.newStudent).to.be.empty;
  });

  let lastStudent = studentCtrl.studentsList[studentCtrl.studentsList.length - 1];

  it('Should each property be right type after creating new student', () => {
    expect(lastStudent).to.be.an('object').that.is.not.empty;
    expect(lastStudent.id).to.be.a('number');
    expect(lastStudent.groupId).to.be.a('number');
    expect(lastStudent.fullName).to.be.a('string');
    expect(lastStudent.email).to.be.a('string');
    expect(lastStudent.age).to.be.a('number');
  });

  it('Should each property does not be empty after creating new student', () => {
    expect(lastStudent.id).to.be.above(0);
    expect(lastStudent.groupId).to.be.above(0);
    expect(lastStudent.fullName).to.not.have.lengthOf(0);
    expect(lastStudent.email).to.not.have.lengthOf(0);
    expect(lastStudent.age).to.be.above(0);
  });

  it('Should update selected student in studentsList after validation', () => {
    editedStudent.fullName = "Updated Field";
    expect(studentCtrl.updateStudentFieldValidation(editedStudent)).to.be.false;
    studentCtrl.updateStudent(editedStudent);
    expect(studentCtrl.studentsList).to.include(editedStudent);
  });

  it('Should each property be right type after updating selected student', () => {
    expect(editedStudent).to.be.an('object').that.is.not.empty;
    expect(editedStudent.id).to.be.a('number');
    expect(editedStudent.groupId).to.be.a('number');
    expect(editedStudent.fullName).to.be.a('string');
    expect(editedStudent.email).to.be.a('string');
    expect(editedStudent.age).to.be.a('number');
  });

  it('Should each property does not be empty after updating selected student', () => {
    expect(editedStudent.id).to.be.above(0);
    expect(editedStudent.groupId).to.be.above(0);
    expect(editedStudent.fullName).to.not.have.lengthOf(0);
    expect(editedStudent.email).to.not.have.lengthOf(0);
    expect(editedStudent.age).to.be.above(0);
  });

  it('Should delete selected student from studentsList', () => {
    let studentForDeleting = studentCtrl.clickedStudent;
    studentCtrl.deleteStudent(studentForDeleting);
    expect(studentCtrl.studentsList).to.not.include(studentForDeleting);
  });

});
