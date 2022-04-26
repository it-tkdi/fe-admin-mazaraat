import React from 'react'
import { icDashboard, icFlow, icInventory, icKategori, icKeju, icPabrik, icRole, icUser, logo } from '../../../assets';
import { Logo } from '../../atoms'
import { Icons, NavItem, NavLinks, NavMenu, SidebarElement } from './SidebarElement'

const Sidebar = () => {
  return (
    <SidebarElement>
      <Logo logoUrl={logo} />
      <NavMenu>
        <NavItem>
          <NavLinks
            to="dashboard"
          >
          <Icons src={icDashboard} alt="icon-dashboard" />
            Dashboard
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="kategori">
            <Icons src={icKategori} alt="icon-kategori" />
            Kategori Keju
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="produk">
            <Icons src={icKeju} alt="icon-keju" />
            Keju
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="pabrik">
            <Icons src={icPabrik} alt="icon-pabrik" />
            Pabrik
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="user">
            <Icons src={icUser} alt="icon-user-profile" />
            User
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="role">
            <Icons src={icRole} alt="icon-role" />
            Role
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="flow-production">
            <Icons src={icFlow} alt="icon-flow-production" />
            Flow Production
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="inventory">
            <Icons src={icInventory} alt="icon-inventory" />
            Inventory
          </NavLinks>
        </NavItem>
      </NavMenu>
    </SidebarElement>
  );
}

export default Sidebar