import styled from 'styled-components';

export const ContentLeftWrapper = styled.div`
  flex: 2;
  width: 100%;
  height: 100%;
  /* background: yellow; */
  margin-right: 50px;
`;

export const ContentLeft = styled.div`
  margin-bottom: 20px;
  padding: 30px;
  boz-sizing: border-box;
  border: 1px solid #dbd5d0;
  border-radius: 4px;
`;

export const DropWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  /* background: #cacaca; */
`;

export const DropField = styled.div`
  width: 48%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #dbd5d0;
  background-color: #f6f4f3;
`;

export const AddField = styled.div`
  width: 48%;
  height: 70px;
  display: flex;
  align-items: center;
  /* background: #cacaca; */
`;

export const TextField = styled.p`
  font-size: 16px;
  color: #b8aca1;
  font-weight: 400;
`;

export const AddFieldContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

export const TextAddField = styled.p`
  font-size: 16px;
  color: #f08618;
  font-weight: 500;
`;

export const StepWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const StepTitle = styled.span`
  font-size: 16px;
  color: #f08618;
  font-weight: 500;
`;