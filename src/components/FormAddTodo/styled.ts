import styled from 'styled-components';

export const StyledFormContainer = styled.div`
  width: 100%;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledFormTextarea = styled.textarea`
  outline: none;
  padding: 15px 10px;
  border-radius: 5px;
  background: #303030;
  border: 1px solid #ffc000;
  color: #ffc000;
`;

export const StyledFormSubmitButton = styled.button`
  outline: none;
  border: none;
  margin-top: 10px;
  border-radius: 5px;
  padding: 15px;
  width: 100%;
  background: #ffc000;
  cursor: pointer;
  transition: scale 0.5s ease, background 0.25s ease-in-out;

  &:hover,
  &:focus {
    background: #e3ae0f;
  }

  &:active {
    scale: 0.98;
  }
`;
