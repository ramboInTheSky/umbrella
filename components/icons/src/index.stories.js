import React from 'react';
import { storiesOf } from '@storybook/react';
import { background } from '../../../storybooks/theme-addon';


import styled, {css} from 'react-emotion'

import { Icons } from './index.tsx';

const IconWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  color: white;
  svg:nth-child(1) {
    font-size: 1rem;
  }
  svg:nth-child(2) {
    font-size: 2rem;
  }
  svg:nth-child(3) {
    font-size: 3rem;
  }
  svg:nth-child(4) {
    font-size: 4rem;
  }
  svg:nth-child(5) {
    font-size: 5rem;
  }
`;

const IconDecorator = (storyFn) => (
  <IconWrapper>
    { [1,2,3,4,5].map( it => storyFn())}
  </IconWrapper>
);



const IconSize =  css`
  flex: 1;
  margin: 0.5rem;
`;

const createIconsStories = (storiesOfParam) => {
  return Object.entries(Icons)
    .forEach( ([ key1, value1] )=> {
      return Object.entries(value1)
       .forEach( ([ key2, Value2] )=> {
        storiesOfParam
        .add(`${key1} ${key2}`, (fontSize = 1) => (
          <Value2 key={fontSize} className={IconSize} />
        ))
    })
  })
};

const storiesOfParam = storiesOf('Icons', module)
  .addDecorator(IconDecorator)
  .addDecorator(background('primary'));

createIconsStories(storiesOfParam)
