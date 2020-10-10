import todoListService from './todoListService';

describe('todoListService', () => {
  it('should return an array of todos', () => {
    return todoListService.getAllTodos().then((res) => expect(res).toBeInstanceOf(Array));
  });
  it('should return a resolved promise when changing status of todo', () => {
    return expect(todoListService.changeTodoStatus(1, false)).resolves.toBeTruthy();
  });
  it('should return a resolved promise when deleting todo', () => {
    return expect(todoListService.deleteTodo(1)).resolves.toBeTruthy();
  });
  it('should return a resolved promise when adding todo', () => {
    return expect(
      todoListService.addTodo({
        id: Date.now(),
        description: '',
        time: new Date(),
        completed: false,
      })
    ).resolves.toBeTruthy();
  });
});
