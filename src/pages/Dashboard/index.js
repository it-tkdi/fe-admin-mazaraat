import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Card, Title } from '../../components'
import { DashboardContainer, DashboardContent } from './DashboardElement'
import DashboardHome from './DashboardHome';
import DashboardTable from './DashboardTable';

const DashboardPage = () => {
  return (
    <DashboardContainer>
      <Title title="Dashboard" size="30px" weight={500} />
      <div style={{ marginBottom: 16 }}></div>
      <DashboardContent>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/table" element={<DashboardTable />} />
        </Routes>
      </DashboardContent>
    </DashboardContainer>
  );
}

export default DashboardPage