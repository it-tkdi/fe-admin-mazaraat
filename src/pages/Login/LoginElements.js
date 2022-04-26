import styled from 'styled-components'

export const LoginContainer = styled.div`
    display: flex;
    background: #cacaca;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: url(${(props)=> props.bgUrl});
`

export const LoginBox = styled.div`
  width: 500px;
  height: 625px;
  display: flex;
  flex-direction: column;
  background-color: rgba(246, 244, 243, 0.9);
  border-radius: 8px;
  padding: 50px;
  box-sizing: border-box;
  align-items: center;
`;

export const FormContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const FormTitle = styled.p`
  color: #4d2f15;
  font-size: 24px;
  text-align: center;
`;

export const FormLabel = styled.label`
  color: #4d2f15;
  font-size: 16px;
  margin-bottom: 4px;
`;