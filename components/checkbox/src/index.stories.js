import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { background } from '../../../storybooks/theme-addon';

import { CheckBox } from './index.tsx';

class CheckBoxDecorator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false
    }
  }

  render(){
    return <CheckBox checked={this.state.checked} label={this.props.label} onClick={ () => this.setState({ checked: !this.state.checked })}/>
  }
}

storiesOf('CheckBox', module)
  .addDecorator(background('surface'))
  .add('interactive', () => (
    <CheckBoxDecorator />
  ))
  .add('interactive with label', () => (
    <CheckBoxDecorator label='Test' />
  ))
  .add('unchecked', () => (
    <CheckBox />
  ))
  .add('checked', () => (
    <CheckBox checked/>
  ))
  .add('with label', () => (
    <CheckBox checked label="Test" />
  ));

