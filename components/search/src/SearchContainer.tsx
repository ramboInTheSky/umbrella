
// third party
import React from 'react';
import styled, { Theme, StyledComponent } from '@daltanius/styled';

// first party

export interface ContainerProps {
  active: boolean;
}

export const SeachContainer = styled<ContainerProps, 'div'>('div') `
  position: relative;
  overflow: visible;
  margin: 0 0.25rem;
  width: 15rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  &:before {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -3px;
    height: 1px;
    content: '';
    transform: ${props => props.active ? 'scaleX(1)' : 'scaleX(0)'};
    border-bottom: 1px solid  ${ props => props.theme.primary.on };
    transition: transform 250ms ease-in-out;
    transform-origin: bottom right;
  }
`;
