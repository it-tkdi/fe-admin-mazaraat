import React from 'react'
import { useDrag } from 'react-dnd';
import { icSixDots } from '../../../../assets';
import { SubTitle } from '../../../atoms';
import { ItemTypes } from '../ItemTypes';
import { FieldContent, FieldItem, Icon } from './DragElement';

const DragField = ({ name, title, iconSrc="null" }) => {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { name },
      end(item, monitor) {
        const dropResult = monitor.getDropResult();
        if (item && dropResult) {
          let alertMessage = "";
          const isDropAllowed =
            dropResult.allowedDropEffect === "any" ||
            dropResult.allowedDropEffect === dropResult.dropEffect;
          if (isDropAllowed) {
            const isCopyAction = dropResult.dropEffect === "copy";
            const actionName = isCopyAction ? "copied" : "moved";
            alertMessage = `You ${actionName} ${item.name} into ${dropResult.name}!`;
          } else {
            alertMessage = `You cannot ${dropResult.dropEffect} an item into the ${dropResult.name}`;
          }
          alert(alertMessage);
        }
      },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [name]
  );

  return (
      <FieldContent draggable ref={drag} style={{ opacity }}>
        <img src={icSixDots} alt="icon-six-dots" width="24" height="24" />
        <FieldItem>
          <SubTitle text={title} />
          <Icon src={iconSrc} />
        </FieldItem>
      </FieldContent>
  );
};

export default DragField