import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { background } from '../../../storybooks/theme-addon';

import { Button } from './index.tsx';

const actionButton = action('button-click');

storiesOf('Button', module)
  .addDecorator(background('surface'))
  .add('text', () => (
    <Button onClick={actionButton} variant='text'>CONFIRM</Button>
  ))
  .add('outlined', () => (
    <Button onClick={actionButton} variant='outlined'>CONFIRM</Button>
  ))
  .add('contained', () => (
    <Button onClick={actionButton} variant='contained'>CONFIRM</Button>
  ));

