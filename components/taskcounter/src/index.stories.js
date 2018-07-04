import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { background } from '../../../storybooks/theme-addon';

import { TaskCounterButton } from './index.ts';
import styled from 'react-emotion'

const TaskCounterDecoratorComponent = styled("div")`
  display: flex;
  width 15rem;
`;

const TallerTaskCounterDecoratorComponent = styled("div")`
  display: flex;
  flex-direction: column;
  width: 8rem;
  height: 5rem;
`;
const TaskCounterDecorator = (story) => <TaskCounterDecoratorComponent>{story()}</TaskCounterDecoratorComponent>
const TallerTaskCounterDecorator = (story) => <TallerTaskCounterDecoratorComponent>{story()}</TallerTaskCounterDecoratorComponent>

storiesOf('TaskCounter', module)
  .addDecorator(TaskCounterDecorator)
  .addDecorator(background('surface'))
  .add('party', () => (
    <TaskCounterButton variant='party' count={0} title={"Agree"} />
  ))
  .add('party selected', () => (
    <TaskCounterButton variant='party' count={0} title={"Agree"} selected />
  ))
  .add('party aggregator', () => (
    <TaskCounterButton variant='party' count={0} title={"Agree"} aggregator />
  ))
  .add('party selected aggregator', () => (
    <TaskCounterButton variant='party' count={0} title={"Agree"} selected aggregator />
  ))
  .add('counterparty', () => (
    <TaskCounterButton variant='counterparty' count={0} title={"Agree"} />
  ))
  .add('counterparty selected', () => (
    <TaskCounterButton variant='counterparty' count={0} title={"Agree"} selected />
  ))
  .add('counterparty aggregator', () => (
    <TaskCounterButton variant='counterparty' count={0} title={"Agree"} aggregator />
  ))
  .add('counterparty selected aggregator', () => (
    <TaskCounterButton variant='counterparty' count={0} title={"Agree"} selected aggregator />
  ));

  storiesOf('CombinedTaskCounter', module)
  .addDecorator(TallerTaskCounterDecorator)
  .addDecorator(background('surface'))
  .add('combined', () => (
    <TaskCounterButton variant='combined' count={0} direction='column' title={"Agree"} />
  ))
  .add('combined selected', () => (
    <TaskCounterButton variant='combined' count={0} direction='column' title={"Agree"} selected />
  ))
  .add('combined aggregator', () => (
    <TaskCounterButton variant='combined' count={0} direction='column' title={"Agree"} aggregator />
  ))
  .add('combined selected aggregator', () => (
    <TaskCounterButton variant='combined' count={0} direction='column' title={"Agree"} selected aggregator />
  ));
