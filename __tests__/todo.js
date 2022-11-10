
const todoList = require("../todo");
const { all, add, markAsComplete, overdue, dueToday, dueLater } = todoList();

describe("Testing the todo suites", () => {
  // Before starting all tests
  beforeAll(() => {
    add({
      title: "Test for The todo",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
  });

  //add function
  test("Addition of new todo", () => {
    const todoLength = all.length;
    add({
      title: "Testing of todo",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(all.length).toBe(todoLength + 1);
  });

  //markAsComplete function
  test("test for making of completion of todo", () => {
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  //overdue function
  test("test for Overdues in the todos", () => {
    add({
      title: "Testing of overdue",
      dueDate: new Date(
        new Date().setDate(new Date().getDate() - 1)
      ).toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(overdue().length).toBe(1);
  });

  //dueToday function
  test("Dues of the todays todos", () => {
    
    expect(dueToday().length).toBe(2);
  });

  //dueLater function
  test("Dues for the later of todos", () => {
    add({
      title: "Testing of due later",
      dueDate: new Date(
        new Date().setDate(new Date().getDate() + 1)
      ).toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(dueLater().length).toBe(1);
  });
});