import React from 'react';
import themes from '../storybooks/theme-addon';
import { configure, addDecorator } from '@storybook/react';

import { ThemeProvider } from 'emotion-theming'

import Container from './Container';
import { primaryTheme } from '../styles/themes/lib/index.js'

const req = require.context('../components', true, /\.stories\.jsx?$/)

const twittertheme = {
  primary: {
    dark: '#EEEEEE',
    main: '#00aced',
    light: '#EEEEEE',
    on: '#FFFFFF'
  },
  background: {
    main: '#EEEEEE',
    on: '#000000'
  },
  surface: {
    main: '#FFFFFF',
    on: '#000000'
  },
  error: {
    main: '#B00020',
    on: '#FFFFFF'
  }
};
const facebooktheme = {
  primary: {
    dark: '#EEEEEE',
    main: '#3b5998',
    light: '#EEEEEE',
    on: '#FFFFFF'
  },
  background: {
    main: '#EEEEEE',
    on: '#000000'
  },
  surface: {
    main: '#FFFFFF',
    on: '#000000'
  },
  error: {
    main: '#B00020',
    on: '#FFFFFF'
  }
};
function loadStories() {
  addDecorator( themes([
    { name: "daltanius", theme: primaryTheme },
    { name: "twitter", theme: twittertheme },
    { name: "facebook", theme: facebooktheme },
  ]))
  addDecorator(story => (
      <Container story={story} />
  ))

  req.keys().forEach((filename) => req(filename))
}


configure(loadStories, module);
