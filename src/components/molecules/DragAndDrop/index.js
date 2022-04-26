import React from 'react'
import { icCalendar, icChevronDown, icClock } from '../../../assets'
import { Title } from '../../atoms'
import { ContentRight, ContentRightWrapper, FieldWrapper, FlowContent } from './DragAndDropElement'
import DragField from './DragElement'
import DropBox from './DropBox'

const DragAndDrop = () => {
  return (
    <FlowContent>
      <DropBox allowedDropEffect="any" />

      <ContentRightWrapper>
        <ContentRight>
          <Title title="Field Options" size="24px" weight={400} />
          <div style={{ marginTop: 30 }}></div>
          <FieldWrapper>
            <DragField name="Free Text" title="Free Text" />
            <DragField
              name="Dropdown Item"
              title="Dropdown Option"
              iconSrc={icChevronDown}
            />
            <DragField name="Time" title="Time" iconSrc={icClock} />
            <DragField name="Date" title="Date" iconSrc={icCalendar} />
          </FieldWrapper>
        </ContentRight>
      </ContentRightWrapper>
    </FlowContent>
  );
}

export default DragAndDrop