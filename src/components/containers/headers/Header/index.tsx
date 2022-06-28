import React from 'react';

import HeaderWithBack from '../HeaderWithBack';
import HeaderWithMenu from '../HeaderWithMenu';

export default function Header({ isHome }:any) {
  return isHome ? 
    <HeaderWithMenu/> :
    <HeaderWithBack />;
}