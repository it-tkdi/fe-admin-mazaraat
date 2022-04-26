import React from 'react'
import { icLogout, userProfile } from '../../../assets';
import { ImgWrap, LogoutWrap, Name, TopContent, TopMenuElement, User } from './TopMenuElement'

const TopMenu = ({logout}) => {
  return (
    <TopMenuElement>
      <TopContent>
        <User>
          <ImgWrap src={userProfile} alt="user-profile" />
          <Name>User Admin</Name>
        </User>
        <LogoutWrap onClick={logout}>
          <img src={icLogout} alt="icon-logout" />
        </LogoutWrap>
      </TopContent>
    </TopMenuElement>
  );
}

export default TopMenu