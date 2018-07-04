// third party
import React from 'react';
import autobind from 'autobind-decorator';

// first party
import styled, { Theme, StyledComponent } from '@daltanius/styled';

export type ButtonVariant = 'text' | 'outlined' | 'contained';

export interface ButtonBaseProps {
  onClick?: (args: {}) => void;
  variant: ButtonVariant;
}

export const ButtonBase = styled<ButtonBaseProps, 'button'>('button')`
  cursor: pointer;
  position: relative;
  font-size: 1rem;
  height: 2rem;
  line-height: 2rem;
  padding: 0 0.8rem;
  color: ${ (props) => props.variant === 'contained'
                                ? props.theme.primary.on
                                : props.theme.primary.main
  };
  background-color: ${ (props) => props.variant === 'contained'
                                ? props.theme.primary.main
                                : props.theme.surface.main
  };
  border: 1px solid ${ (props) => props.variant === 'text'
                                ? 'transparent'
                                : props.theme.background.main
  };

  &:focus {
    outline: none;
  }

  &:hover:after {
    content:"";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${ (props) => props.variant === 'contained'
                                ? props.theme.primary.on
                                : props.theme.primary.main
    };
    opacity: 0.08;
    border-radius: 4px;
  }
  transition: background-color 0.5s;
  border-radius: 4px;
  box-sizing: content-box;
`;

export interface ButtonProps {
  variant: ButtonVariant;
  onClick?: (args: {}) => void;
  className?: string;
}

export class Button extends React.Component<ButtonProps> {

  render(){
    return (
      <ButtonBase className={this.props.className} onClick={this.props.onClick} variant={this.props.variant}>
        {this.props.children}
      </ButtonBase>
    );
  }
}
