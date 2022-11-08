import TodoList from '../../components/TodoList';
import FormAddTodo from '../../components/FormAddTodo';
import todo from '../../store/todo';
import { StyledPageContainer, StyledPageTitle } from './styled';

const TodoPage = () => {
  return (
    <StyledPageContainer>
      <StyledPageTitle>Task list (React + MobX)</StyledPageTitle>
      <FormAddTodo todo={todo} />
      <TodoList todo={todo} />
    </StyledPageContainer>
  );
};

export default TodoPage;
