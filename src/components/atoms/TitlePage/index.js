import React from 'react'
import { TitlePage } from './TitleElement'

const Title = ({ title, size, weight }) => {
  return (
    <TitlePage size={size} weight={weight}>
      {title}
    </TitlePage>
  );
};

export default Title