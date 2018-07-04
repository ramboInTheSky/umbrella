// third party
import React from 'react';

// first party
import { Icons } from '@daltanius/icons-component';
import { HeaderElementWrapper } from './HeaderElementWrapper';

interface HamburgerMenuProps {
  onClick?: () => void;
}

export const HamburgerMenu = ({ onClick }: HamburgerMenuProps) => (
  <HeaderElementWrapper>
    <Icons.Bars.Regular onClick={onClick} />
  </HeaderElementWrapper>
);
