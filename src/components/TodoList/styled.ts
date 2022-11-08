import styled from 'styled-components';

export const StyledTodoListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledCountersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledFiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledFiltersTitle = styled.p`
  margin: 0;
  color: #ffc000;
  margin-bottom: 10px;
`;

export const StyledFiltersItem = styled.div`
  display: flex;
  width: 100%;
  color: #ffc000;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const StyledFiltersCheckbox = styled.input`
  margin-left: 10px;
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const StyledInputSearch = styled.input`
  padding: 5px 10px;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
  border-radius: 5px;
  background: #303030;
  border: 1px solid #ffc000;
  color: #ffc000;
  outline: none;
  margin-bottom: 20px;
`;

export const StyledDataContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 20px 0;
`;

export const StyledCounter = styled.div`
  color: #ffc000;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const StyledTodoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const StyledTodoItem = styled.li<{
  completed: boolean;
  canceled: boolean;
}>`
  display: flex;
  align-items: center;
  border: 1px solid #a68218da;
  border-radius: 5px;
  padding: 10px 15px;
  transition: background 0.25s ease;
  background: ${({ completed }) => (completed ? '#19ab27da' : '#1f1f1f')};
  opacity: ${({ canceled }) => (canceled ? '0.7' : '1')};

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const StyledTodoCheckbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const StyledTodoText = styled.p<{ canceled: boolean }>`
  padding: 0 15px;
  flex-grow: 1;
  color: #ffc000;
  text-decoration: ${({ canceled }) => (canceled ? 'line-through' : 'none')};
`;

export const StyledTextNotFound = styled.p`
  text-align: center;
  color: #ffc000;
`;

export const StyledButtonContainer = styled.div``;

export const StyledButtonDelete = styled.button`
  border: 0;
  outline: 0;
  border-radius: 5px;
  padding: 5px 10px;
  margin-left: 10px;
  color: #ffc000;
  background: #ba280eda;
  cursor: pointer;
`;

export const StyledButtonCancel = styled.button`
  border: 0;
  outline: 0;
  border-radius: 5px;
  padding: 5px 10px;
  width: 70px;
  cursor: pointer;
  background: #e5d13dfa;
`;
