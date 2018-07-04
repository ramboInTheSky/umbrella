// third party
import React from 'react';

// first party
import { Name, NameProps } from './Name';
import { Logo } from './Logo';

export interface AppLogoProps {
  appName: NameProps;
}

export const AppLogo = ({ appName }: AppLogoProps) => (

  <>
    <Logo />
    <Name {...appName} />
  </>
);
