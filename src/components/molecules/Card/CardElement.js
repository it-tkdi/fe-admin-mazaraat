import styled from 'styled-components'

export const CardWrapper = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 350px;
  height: 180px;
  max-height: 100%;
  background-color: #f6f4f3;
  border-radius: 4px;
  padding: 30px;
  box-sizing: border-box;
  margin-right: 16px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover {
    background-color: #dbd5d0;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const SummaryNumber = styled.span`
  font-size: 40px;
  color: #4d2f15;
`;

export const MenuTitle = styled.span`
  font-size: 24px;
  color: #4d2f15;
`;

export const IcWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
`