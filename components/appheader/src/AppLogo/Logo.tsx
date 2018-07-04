// tslint:disable:max-line-length
// third party
import React from 'react';

// first party
import styled from '@daltanius/styled';
import { headerHeight } from '../variables';

const logoPaddingToHeightRatio = '2 / 14';
const LogoSvg = styled.svg`
  padding: calc( ${logoPaddingToHeightRatio} * ${headerHeight});
  height: ${headerHeight};
  width: ${headerHeight};
  box-sizing: border-box;
  fill: ${ ({ theme }) => theme.primary.on };
`;

export const Logo = () => (
    <LogoSvg x='0px' y='0px' viewBox='0 0 30 30'  >
      <g>
        <polygon points='13.3,20.2 16.7,20.2 15,13.8  ' />
        <g>
          <path d='M15,4.2C9,4.2,4.2,9,4.2,15C4.2,21,9,25.8,15,25.8S25.8,21,25.8,15C25.8,9,21,4.2,15,4.2 M11.4,21.7L15,8.3    l3.6,13.5H11.4z' />
          <path d='M15,0c8.3,0,15,6.7,15,15c0,8.3-6.7,15-15,15S0,23.3,0,15C0,6.7,6.7,0,15,0 M1.4,15c0,7.5,6.1,13.6,13.6,13.6    c7.5,0,13.6-6.1,13.6-13.6S22.5,1.4,15,1.4C7.5,1.4,1.4,7.5,1.4,15' />
        </g>
      </g>
    </LogoSvg>
);
