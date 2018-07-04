import React from 'react';
import styled, { StyledComponent, Theme } from '@daltanius/styled';

import { Icons, IconProps } from '@daltanius/icons-component';

export const ClearIcon = styled(Icons.Cross.Light)`
  color: ${ props => props.theme.primary.on };
  flex: none;
  font-size: 1.5rem;
  padding-left: 0.25rem;
`;
