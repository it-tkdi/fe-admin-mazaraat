import styled from 'styled-components';

export const TopMenuElement = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  width: 80vw;
  height: 80px;
  background: #fff;
  border-bottom: 1px solid #dbd5d0;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  padding-right: 28px;
  margin-left: 300px;
  overflow-x: hidden;
`;
  
export const TopContent = styled.div`
  width: 300px;
  height: 70px;
  padding: 6px;
  display: flex;
  /* background: #cacaca; */
  align-items: center;
  justify-content: space-around;
  `

export const User = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  /* &:hover {
    background-color: #dbd5d0;
  } */
`;

export const ImgWrap = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 23px;
  margin-right: 8px;
`

export const Name = styled.span`
  font-size: 16px;
  word-wrap: break-word;
`

export const LogoutWrap = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover {
    background-color: #dbd5d0;
  }
`;