import addons,{makeDecorator} from '@storybook/addons';
import CoreEvents from '@storybook/core-events';
import styled from 'react-emotion';
import { ThemeProviderWrapper } from './preview/ThemeProviderWrapper'
import * as React from 'react';
import { SELECT, SET} from './shared/events';



export default themes => story => {
  const channel = addons.getChannel();
  channel.emit(SET, themes);
  return  (
    <ThemeProviderWrapper channel={channel} theme={themes[0].theme}>
      { story() }
    </ThemeProviderWrapper>
 )
};

const BackgroundComponent = styled('div')`
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: ${props => props.theme[props.variant].main };
`;

export const background = (variant='surface') => story => (
  <BackgroundComponent variant={variant}>
    {story()}
  </BackgroundComponent>
);
