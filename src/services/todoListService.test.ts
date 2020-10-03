import todoListService from './todoListService';

describe('todoListService', () => {
  it('should return an array of todos', () => {
    return todoListService.getAllTodos().then((res) => expect(res).toBeInstanceOf(Array));
  });
});
