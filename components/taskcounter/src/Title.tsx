import styled from '@daltanius/styled';

interface TitleProps {
  direction: 'row' | 'column';
}

export const Title = styled<TitleProps, 'div'>('div')`
  flex: ${ ({ direction }) => direction === 'row' ? '1' : '0' }; 0 auto;
  text-align: ${ ({ direction }) => direction === 'row' ? 'left' : 'center' };
  font-size: 0.8rem;
  color: #999;
`;
