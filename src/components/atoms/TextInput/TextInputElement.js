import styled from 'styled-components'

export const TextInputComponent = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  padding: 10px 8px;
  border-radius: 4px;
  font-size: 16px;
  border: none;
  background-color: #f6f4f3;

  &::placeholder {
    color: #b8aca1;
  }

  &:focus {
    box-shadow: 0px 0px 4px #f08618;
    outline: none;
  }
`;