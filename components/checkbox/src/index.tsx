// third party
import React from 'react';

// first party
import styled from '@daltanius/styled';


const CheckBoxContainer = styled.div`
  display: flex;
  &, * { cursor: pointer; }
  & > label {
    margin-left: 0.2rem;
  }
`;

const HiddenCheckBox = styled.input`
  display: none;
`;

interface PseudoCheckBoxProps {
  checked: boolean;
}

const PseudoCheckBox = styled<PseudoCheckBoxProps, 'div'>('div')`
  width: 1rem;
  height: 1rem;
  border: 2px solid ${ ({ checked, theme }) => checked ? theme.primary.main : theme.primary.main};
  background-color: ${ ({ checked, theme }) => checked ? theme.primary.main : 'transparent'};

  border-radius: 2px;
  position: relative;

  &:after{
    content:"";
    top: 40%;
    left: 50%;
    width: 0.25rem;
    height: 0.6rem;
    position: absolute;
    border: solid ${ ({ theme }) => theme.surface.main};
    border-width: 0 2px 2px 0;
    transform-origin: 50% 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  transition: background-color 0.25s;
`;

interface CheckBoxProps {
  checked: boolean;
  label?: string;
  onClick: () => void;
}

export class CheckBox extends React.Component<CheckBoxProps> {

  renderLabel() {
    return this.props.label != undefined
      ? <label>{this.props.label}</label>
      : null;
  }

  render() {
    return (
      <CheckBoxContainer role='checkbox' aria-checked={this.props.checked} onClick={this.props.onClick}>
        <HiddenCheckBox type='checkbox' checked={this.props.checked} />
        <PseudoCheckBox checked={this.props.checked} />
        {this.renderLabel()}
      </CheckBoxContainer>
    );
  }

}
