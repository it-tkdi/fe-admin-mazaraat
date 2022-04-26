import { EditOutlined } from '@ant-design/icons';
import { Row } from 'antd';
import React from 'react'
import { icPlus } from '../../../../assets';
import { Button, Title } from '../../../atoms';
import { AddField, AddFieldContent, ContentLeft, ContentLeftWrapper, DropField, DropWrapper, StepTitle, StepWrapper, TextAddField, TextField } from './DropBoxElement'
import { ItemTypes } from '../ItemTypes'
import { useDrop } from 'react-dnd';

function selectBackgroundColor(isActive, canDrop) {
  if (isActive) {
      return "#B8ACA1";
    } else if (canDrop) {
      return "#DBD5D0";
  }
}

function selectTextColor(isActive, canDrop) {
    if (isActive) {
        return "#715944";
    } else if (canDrop) {
        return "#4D2F15";
    }
}

const DropBox = ({ allowedDropEffect }) => {
    const [{ canDrop, isOver }, drop] = useDrop(
      () => ({
        accept: ItemTypes.BOX,
        drop: () => ({
          name: `${allowedDropEffect} DropBox`,
          allowedDropEffect,
        }),
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        }),
      }),
      [allowedDropEffect]
    );
    const isActive = canDrop && isOver;
    const backgroundColor = selectBackgroundColor(isActive, canDrop);
    const color = selectTextColor(isActive, canDrop);

  return (
    <ContentLeftWrapper>
      <ContentLeft>
        <Row align="middle">
          <Title title="Step 01" size="24px" weight={500} />
          <div style={{ marginRight: 12 }}></div>
          <EditOutlined
            style={{ fontSize: 20, color: "#F08618" }}
            // onClick={showModal}
          />
        </Row>
        <div style={{ marginBottom: 30 }}></div>
        <DropWrapper>
          <DropField ref={drop} style={{ backgroundColor}}>
            <TextField style={{color}}>
              {isActive ? "Release to drop" : "Drag and drop field here"}
            </TextField>
            {/* <TextField>Drag and drop field here</TextField> */}
          </DropField>
          <AddField>
            <AddFieldContent>
              <img src={icPlus} alt="plus-icon" width={24} height={24} />
              <div style={{ marginRight: 12 }}></div>
              <TextAddField>Add more field</TextAddField>
            </AddFieldContent>
          </AddField>
        </DropWrapper>
      </ContentLeft>
      <ContentLeft>
        <StepWrapper>
          <img src={icPlus} alt="plus-icon" width={24} height={24} />
          <div style={{ marginRight: 8 }}></div>
          <StepTitle>Add more step</StepTitle>
        </StepWrapper>
      </ContentLeft>
      <Row align="middle" justify="end">
        <Button
          width={98}
          height={40}
          color="#EDEAE8"
          hover="#DBD5D0"
          text="Cancel"
          textColor="#4D2F15"
        />
        <div style={{ marginRight: 20 }}></div>
        <Button
          width={98}
          height={40}
          color="#F08618"
          hover="#F39E46"
          text="Submit"
        />
      </Row>
    </ContentLeftWrapper>
  );
};

export default DropBox