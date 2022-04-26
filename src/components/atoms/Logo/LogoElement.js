import styled from 'styled-components'

export const LogoElement = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 155px;
  background: url(${(props) => props.logoUrl});
  display: flex;
`;