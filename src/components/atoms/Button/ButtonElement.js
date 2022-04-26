import styled from 'styled-components'

export const ButtonElement = styled.button`
  background: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border: none;
  box-sizing: border-box;
  border-radius: 4px;
  height: ${(height) => height};
  width: ${(width) => width};
  color: ${(props)=> props.textColor};
  padding: 10px 16px;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    background: ${(props) => props.hover};
  }
`;
