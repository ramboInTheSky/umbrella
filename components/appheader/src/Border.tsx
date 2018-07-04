// third party

// first party
import styled from '@daltanius/styled';

export const Border = styled.div`
  height: 50%;
  margin: 0 0.25rem;
  border-left: 1px dotted ${ ({ theme }) => theme.primary.on }
`;
