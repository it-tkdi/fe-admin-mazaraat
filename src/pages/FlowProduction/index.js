import React from 'react'
import { DragAndDrop, Title } from '../../components'
import { FlowContainer} from './FlowProductionElement'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const FlowProduction = () => {
  return (
    <FlowContainer>
      <Title title="Flow Production" size="30px" weight={500} />
      <div style={{ marginBottom: 30 }}></div>
      
      <DndProvider backend={HTML5Backend}>
        <DragAndDrop />
      </DndProvider>

    </FlowContainer>
  );
}

export default FlowProduction