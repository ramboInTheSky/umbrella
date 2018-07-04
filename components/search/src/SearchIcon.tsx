import React from 'react';
import styled, { Theme, StyledComponent } from '@daltanius/styled';

import { Icons, IconProps } from '@daltanius/icons-component';


export const SearchIcon = styled(Icons.Search.Light)`
  color: ${ props => props.theme.primary.on };
  flex: none;
  font-size: 1.5rem;
  padding-left: 0.25rem;
`;
