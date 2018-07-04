// third party
import { withProps } from 'recompose';

// first party
import styled from '@daltanius/styled';
import { Theme } from '@daltanius/themes';
import { ButtonBase, ButtonBaseProps } from '@daltanius/button-component';

import { borderWidth, gradient, partyColor, counterpartyColor } from './Helpers';

interface TaskCounterBaseButtonProps {
  aggregator: boolean;
  direction: 'row' | 'column';
  isCombined: boolean;
  selected: boolean;
}

const backgroundOnHover = `
    content: "";
    position: absolute;
    top: -${borderWidth};
    right: -${borderWidth};
    bottom: -${borderWidth};
    left: -${borderWidth};
    border-radius: 4px;
`;

interface DetermineBorder extends TaskCounterBaseButtonProps {
  theme: Theme;
}
const determineBorder = ({ theme, aggregator, isCombined }: DetermineBorder) => {
  if(aggregator){
    if(isCombined){
      return `border-image: ${gradient} 1;`;
    } else {
      return `border-color: ${theme.secondary.main};`;
    }
  } else {
    return '';
  }
};

// set padding to zero if issues with hover text
export const TaskCounterBaseButton = withProps<ButtonBaseProps, TaskCounterBaseButtonProps>({
  variant: 'outlined',
})(styled<TaskCounterBaseButtonProps, any>(ButtonBase)`
  display: flex;
  flex: 1 0 auto;
  flex-direction: ${ ({ direction }) => direction };
  justify-content: ${ ({ direction }) => direction === 'row' ? 'space-between' : 'center' };
  align-items: stretch;
  ${ determineBorder };
  ${ ({ direction }) => direction === 'column' ? 'line-height: 1rem;' : '' };
  border-width: ${borderWidth};
  ${ ({ theme, selected }) => selected
    ? `
        border-color: ${'#fff'};
        :hover:after{
          background: ${ theme.secondary.main };
          opacity: 0.20;
          ${backgroundOnHover}
        }
        :after {
          background: ${ theme.secondary.main };
          opacity: 0.16;
          ${backgroundOnHover}
        }
      `
    : ''
  }

${ ({ theme, aggregator, isCombined }) => aggregator
    ? `
      /* please forgive me Håkon Wium Lie */
      :before {
        content: "";
        position: absolute;
        top: -3px;
        left: -3px;
        bottom: -3px;
        right: -3px;
        border: 1px solid ${theme.surface.main};
        border-radius: 4px;
        z-index: 2;
      }
    `
    : `
      :before {
        content: "";
        position: absolute;
        top: -${borderWidth};
        left: -${borderWidth};
        bottom: -${borderWidth};
        width: 0.4rem;
        background: ${isCombined ? gradient : theme.secondary.main };
        border-radius: 4px 0 0 4px;
        z-index: 2;
      }
    `
  }

`);
