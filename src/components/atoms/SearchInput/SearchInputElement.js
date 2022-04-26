import styled from 'styled-components'

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 300px;
  height: 40px;
  
  &:focus {
    box-shadow: 0px 0px 4px #f08618;
    outline: none;
  }
`;

export const SearchElement = styled.input`
  width: 300px;
  box-sizing: border-box;
  height: 40px;
  padding: 12px 8px;
  border-radius: 4px;
  font-size: 16px;
  color: #4D2F15;
  background-color: #f6f4f3;
  border: 1px solid #dbd5d0;

  &::placeholder {
    color: #b8aca1;
  }

  
`;