// third party
import React from 'react';

// first party
import styled from '@daltanius/styled';


const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  &, * { cursor: pointer; }
  & > label {
    margin-left: 0.2rem;
  }
`;

const HiddenSwitch = styled.input`
  display: none;
`;

interface PseudoSwitchProps {
  switched: boolean;
}

// TODO: switch places of elem and pseudo elem
const PseudoSwitch = styled<PseudoSwitchProps, 'div'>('div')`
  width: 2rem;
  margin: 0.333rem 0.4rem;
  height: 0.666rem;
  background-color: ${ ({ switched, theme }) => switched ? theme.primary.light : theme.background.main};
  position: relative;
  border: 1px solid ${({ theme }) => theme.background.main};;
  border-radius: 6px;
  &:after{
    content:"";
    left: -0.5rem;
    top: -0.325rem;
    width: 1.3rem;
    height: 1.3rem;
    position: absolute;
    border-radius: 50%;
    background-color: ${ ({ switched, theme }) => switched ? theme.primary.main : theme.primary.on};
    transform-origin: 50% 50%;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);
    transform: translate(${ ({ switched }) => switched ? '1.5rem' : 0});
    transition: transform 0.125s, background-color 0.125s;
  }
  transition: background-color 0.125s;
`;

interface SwitchProps {
  switched: boolean;
  label?: string;
  onClick: () => void;
}

export class Switch extends React.Component<SwitchProps> {

  renderLabel() {
    return this.props.label != undefined
      ? <label>{this.props.label}</label>
      : null;
  }

  render() {
    return (
      <SwitchContainer role='switch' aria-checked={this.props.switched} onClick={this.props.onClick}>
        <HiddenSwitch type='checkbox' checked={this.props.switched} />
        <PseudoSwitch switched={this.props.switched} />
        {this.renderLabel()}
      </SwitchContainer>
    );
  }

}
