import styled from '@daltanius/styled';

interface CountProps {
  direction: 'row' | 'column';
}

export const Count = styled<CountProps, 'div'>('div')`
  flex: ${ ({ direction }) => direction === 'row' ? '1' : '0' }; 0 auto;
  text-align: ${ ({ direction }) => direction === 'row' ? 'right' : 'center' };
  font-weight: bold;
  color: #999;
`;
