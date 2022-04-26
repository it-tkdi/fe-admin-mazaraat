import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Sidebar, TopMenu } from '../components'
import { DashboardPage, FlowProduction, Inventory, Kategori, Keju, Pabrik, Role, UserPage } from '../pages'
import { AdminContainer, AdminContent } from './AdminElement'

const AdminLayout = ({logout}) => {
  return (
    <>
      <AdminContainer>
        <Sidebar />
        <TopMenu logout={logout} />
        <AdminContent>
          <Routes>
            <Route path="dashboard/*" element={<DashboardPage />} />
            <Route path="kategori" element={<Kategori />} />
            <Route path="produk/*" element={<Keju />} />
            <Route path="pabrik" element={<Pabrik />} />
            <Route path="user" element={<UserPage />} />
            <Route path="role" element={<Role />} />
            <Route path="flow-production" element={<FlowProduction />} />
            <Route path="inventory" element={<Inventory />} />
          </Routes>
        </AdminContent>
      </AdminContainer>
    </>
  );
}

export default AdminLayout