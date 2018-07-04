// third party

// first party
import styled from '@daltanius/styled';
import { headerHeight } from './variables';

export const HeaderElementWrapper = styled.div`
  cursor: ${ ({ onClick }) => onClick != undefined && 'pointer'} ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: ${headerHeight};
  line-height: ${headerHeight};
  position: relative;
  font-size: 1.5rem;
  padding: 0 0.625rem;
  &:hover::after {
    content: '';
    pointer-events: ${ ({ onClick }) => onClick == undefined && 'none'} ;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.primary.on };
    opacity: 0.06;
  }
`;
