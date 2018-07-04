
// third party
import React from 'react';
import styled, { Theme, StyledComponent } from '@daltanius/styled';

// first party

export const SearchInput = styled.input`
  outline: none;
  flex: none;
  width: 1rem;
  flex: 1 1 auto;
  margin: 0;
  padding: 0;
  color: ${ props => props.theme.primary.on };
  background-color: transparent;
  border: 0;
  font-size: 1.2rem;
`;
