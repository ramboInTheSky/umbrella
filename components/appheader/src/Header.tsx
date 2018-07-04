// third party

// first party
import styled from '@daltanius/styled';
import { headerHeight } from './variables';

export const Header = styled.header`
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: ${headerHeight};
  position: relative;
  background-color: ${ ({ theme }) => theme.primary.main };
  color: ${ ({ theme }) => theme.primary.on };
  padding-right: 0.5rem;
`;
