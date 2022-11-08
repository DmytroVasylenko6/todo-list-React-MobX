import { observer } from 'mobx-react-lite';
import {
  StyledTodoListContainer,
  StyledCountersContainer,
  StyledFiltersContainer,
  StyledFiltersItem,
  StyledFiltersTitle,
  StyledFiltersCheckbox,
  StyledInputSearch,
  StyledTextNotFound,
  StyledDataContainer,
  StyledCounter,
  StyledTodoList,
  StyledTodoItem,
  StyledTodoCheckbox,
  StyledTodoText,
  StyledButtonContainer,
  StyledButtonDelete,
  StyledButtonCancel,
} from './styled';

const TodoList = observer(({ todo }: any) => {
  return (
    <StyledTodoListContainer>
      <StyledDataContainer>
        <StyledCountersContainer>
          <StyledCounter>All todo: {todo.allTodo}</StyledCounter>
          <StyledCounter>Completed todo: {todo.completedTodo}</StyledCounter>
          <StyledCounter>Canceled todo: {todo.canceledTodo}</StyledCounter>
        </StyledCountersContainer>

        <StyledFiltersContainer>
          <StyledFiltersTitle>Filters:</StyledFiltersTitle>
          <StyledFiltersItem>
            <span>Completed</span>
            <StyledFiltersCheckbox
              type="checkbox"
              checked={todo.filterCompleted}
              onChange={e => todo.setFilterCompleted(e.target.checked)}
            />
          </StyledFiltersItem>
          <StyledFiltersItem>
            <span>Canceled</span>
            <StyledFiltersCheckbox
              type="checkbox"
              checked={todo.filterCanceled}
              onChange={e => todo.setFilterCanceled(e.target.checked)}
            />
          </StyledFiltersItem>
        </StyledFiltersContainer>
      </StyledDataContainer>

      <StyledInputSearch
        type="text"
        placeholder="Search..."
        value={todo.filter}
        onChange={e => todo.setFilter(e.target.value)}
      />
      <StyledTodoList>
        {todo.visibleTodos.length ? (
          todo.visibleTodos.map((t: any) => (
            <StyledTodoItem
              className="todo"
              key={t.id}
              completed={t.completed}
              canceled={t.canceled}>
              <StyledTodoCheckbox
                type="checkbox"
                checked={t.completed}
                onChange={() => todo.completeTodo(t.id)}
                disabled={t.canceled}
              />
              <StyledTodoText canceled={t.canceled}>{t.title}</StyledTodoText>
              <StyledButtonContainer>
                <StyledButtonCancel onClick={() => todo.cancelTodo(t.id)}>
                  {t.canceled ? 'Go!' : 'cancel'}
                </StyledButtonCancel>
                <StyledButtonDelete onClick={() => todo.removeTodo(t.id)}>
                  X
                </StyledButtonDelete>
              </StyledButtonContainer>
            </StyledTodoItem>
          ))
        ) : (
          <StyledTextNotFound>We couldn't find a todo</StyledTextNotFound>
        )}
      </StyledTodoList>
    </StyledTodoListContainer>
  );
});

export default TodoList;
