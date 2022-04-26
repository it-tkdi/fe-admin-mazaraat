import styled from 'styled-components'

export const DashboardContainer = styled.div`
    width: 100%;
    height: 100%;
    max-height: 100%;
    background: #fff;
    `

export const DashboardContent = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  max-height: 100%;
  background: #fff;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const IcWrap = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  margin-right: 4px;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #dbd5d0;
  }
`;