import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, Title } from '../../components';
import { KejuContainer, KejuContent } from './KejuElement';

const PabrikKeju = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("keju");
    };
  return (
    <KejuContainer>
      <Title title="Pilih Pabrik" size="18px" weight={500} />
      <div style={{ marginBottom: 16 }}></div>

      <KejuContent>
        <Card onClick={handleClick} valTitle="Pabrik Rotowijayan" />
        <Card valTitle="Pabrik Cangkringan" />
        <Card valTitle="Pabrik Banyuwangi" />
      </KejuContent>
    </KejuContainer>
  );
}

export default PabrikKeju