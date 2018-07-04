import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { background } from '../../../storybooks/theme-addon';

import { Switch } from './index.tsx';

class SwitchDecorator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      switched: false
    }
  }

  render(){
    return <Switch switched={this.state.switched} label={this.props.label} onClick={ () => this.setState({ switched: !this.state.switched })}/>
  }
}

storiesOf('Switch', module)
  .addDecorator(background('surface'))
  .add('interactive', () => (
    <SwitchDecorator />
  ))
  .add('interactive with label', () => (
    <SwitchDecorator label='Test' />
  ))
  .add('unchecked', () => (
    <Switch />
  ))
  .add('checked', () => (
    <Switch switched/>
  ))
  .add('with label', () => (
    <Switch switched label="Test" />
  ));

