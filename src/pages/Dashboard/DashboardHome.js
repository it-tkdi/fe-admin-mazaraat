import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components';
import { DashboardContainer, DashboardContent } from './DashboardElement'

const DashboardHome = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("table");
    };
  return (
    <DashboardContainer>
      <DashboardContent>
        <Card onClick={handleClick} valNumber={25} valTitle="Cheese Created" />
        <Card valNumber={12} valTitle="Cheese Cancel" />
      </DashboardContent>
    </DashboardContainer>
  );
}

export default DashboardHome