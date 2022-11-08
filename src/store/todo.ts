import { makeAutoObservable } from 'mobx';

interface ITodo {
  id: number;
  title: string;
  completed: boolean;
  canceled: boolean;
}

class Todo {
  todos = [
    {
      id: 1,
      title: 'test1',
      price: 1000,
      currency: 'USDC',
      completed: false,
      canceled: false,
    },
    { id: 2, title: 'test2', completed: false, canceled: false },
    { id: 3, title: 'test3', completed: false, canceled: false },
  ];
  filter = '';
  filterCompleted = false;
  filterCanceled = false;

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: ITodo) {
    this.todos.push(todo);
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  completeTodo(id: number) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
  }

  cancelTodo(id: number) {
    this.todos = this.todos
      .map(todo =>
        todo.id === id
          ? {
              ...todo,
              canceled: !todo.canceled,
              completed: todo.completed && todo.canceled,
            }
          : todo,
      )
      .sort((a, b) => {
        if (a.canceled && !b.canceled) {
          return 1;
        }
        if (!a.canceled && b.canceled) {
          return -1;
        }
        return 0;
      });
  }

  setFilter(value: string) {
    this.filter = value;
  }

  setFilterCompleted(value: boolean) {
    this.filterCompleted = value;
  }

  setFilterCanceled(value: boolean) {
    this.filterCanceled = value;
  }

  get allTodo() {
    return this.todos.length;
  }

  get completedTodo() {
    const completedTodos = this.todos.filter(todo => todo.completed);
    return completedTodos.length;
  }

  get canceledTodo() {
    const canceledTodos = this.todos.filter(todo => todo.canceled);
    return canceledTodos.length;
  }

  get visibleTodos() {
    const normalizeFilter = this.filter.toLowerCase();
    return this.todos.filter(({ title, completed, canceled }: any) => {
      if (this.filterCompleted && this.filterCanceled) {
        return (
          (title.toLowerCase().includes(normalizeFilter) && completed) ||
          (title.toLowerCase().includes(normalizeFilter) && canceled)
        );
      }
      if (this.filterCanceled) {
        return title.toLowerCase().includes(normalizeFilter) && canceled;
      }
      if (this.filterCompleted) {
        return title.toLowerCase().includes(normalizeFilter) && completed;
      }
      return title.toLowerCase().includes(normalizeFilter);
    });
  }
}

export default new Todo();
