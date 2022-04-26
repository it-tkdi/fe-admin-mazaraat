import React from 'react'
import { icArrowRight } from '../../../assets'
import { CardWrapper, IcWrapper, MenuTitle, SummaryNumber, TopWrapper } from './CardElement'

const Card = ({ valNumber, valTitle, onClick }) => {
  return (
    <CardWrapper onClick={onClick}>
      <TopWrapper>
        <SummaryNumber>{valNumber}</SummaryNumber>
        <IcWrapper>
          <img src={icArrowRight} alt="right-arrow" />
        </IcWrapper>
      </TopWrapper>
      <MenuTitle>{valTitle}</MenuTitle>
    </CardWrapper>
  );
};

export default Card