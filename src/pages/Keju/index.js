import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Title } from '../../components'
import { KejuContainer, KejuContent } from './KejuElement'
import PabrikKeju from './PabrikKeju'
import ProdukKeju from './ProdukKeju'

const Keju = () => {
  return (
    <KejuContainer>
      <Title title="Keju" size="30px" weight={500} />
      <div style={{ marginBottom: 16 }}></div>
      <KejuContent>
        <Routes>
          <Route path="/" element={<PabrikKeju />} />
          <Route path="/keju" element={<ProdukKeju />} />
        </Routes>
      </KejuContent>
    </KejuContainer>
  );
}

export default Keju