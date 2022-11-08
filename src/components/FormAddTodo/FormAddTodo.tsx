import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { v4 as uuidv4 } from 'uuid';
import {
  StyledFormContainer,
  StyledForm,
  StyledFormTextarea,
  StyledFormSubmitButton,
} from './styled';

const FormAddTodo = observer(({ todo }: any) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: any) => {
    const { value } = e.currentTarget;
    setInputValue(value);
  };

  const handleAddContact = (e: any) => {
    e.preventDefault();
    if (inputValue === '') return;
    todo.addTodo({ id: uuidv4(), title: inputValue, completed: false });
    setInputValue('');
  };

  return (
    <StyledFormContainer>
      <StyledForm onSubmit={handleAddContact}>
        <StyledFormTextarea
          name="todo"
          value={inputValue}
          id="todo"
          placeholder="Enter text..."
          onChange={handleInputChange}
          autoComplete="none"
        />
        <StyledFormSubmitButton type="submit">Add todo</StyledFormSubmitButton>
      </StyledForm>
    </StyledFormContainer>
  );
});

export default FormAddTodo;
