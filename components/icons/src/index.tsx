import React from 'react';

import { library, IconProp } from '@fortawesome/fontawesome';
import { FontAwesomeIcon, Props } from '@fortawesome/react-fontawesome';

// actual icons
import barsLight from '@fortawesome/free-solid-svg-icons/faBars';
import barsRegular from '@fortawesome/free-solid-svg-icons/faBars';
import barsSolid from '@fortawesome/free-solid-svg-icons/faBars';

import balanceScaleLight from '@fortawesome/free-solid-svg-icons/faBalanceScale';
import balanceScaleRegular from '@fortawesome/free-solid-svg-icons/faBalanceScale';
import balanceScaleSolid from '@fortawesome/free-solid-svg-icons/faBalanceScale';

import chartLineLight from '@fortawesome/free-solid-svg-icons/faChartLine';
import chartLineRegular from '@fortawesome/free-solid-svg-icons/faChartLine';
import chartLineSolid from '@fortawesome/free-solid-svg-icons/faChartLine';

import circleLight from '@fortawesome/free-solid-svg-icons/faCircle';
import circleRegular from '@fortawesome/free-solid-svg-icons/faCircle';
import circleSolid from '@fortawesome/free-solid-svg-icons/faCircle';

import cogLight from '@fortawesome/free-solid-svg-icons/faCog';
import cogRegular from '@fortawesome/free-solid-svg-icons/faCog';
import cogSolid from '@fortawesome/free-solid-svg-icons/faCog';

import cogsLight from '@fortawesome/free-solid-svg-icons/faCogs';
import cogsRegular from '@fortawesome/free-solid-svg-icons/faCogs';
import cogsSolid from '@fortawesome/free-solid-svg-icons/faCogs';

import envelopeLight from '@fortawesome/free-solid-svg-icons/faEnvelope';
import envelopeRegular from '@fortawesome/free-solid-svg-icons/faEnvelope';
import envelopeSolid from '@fortawesome/free-solid-svg-icons/faEnvelope';

import plusSquareLight from '@fortawesome/free-solid-svg-icons/faPlusSquare';
import plusSquareRegular from '@fortawesome/free-solid-svg-icons/faPlusSquare';
import plusSquareSolid from '@fortawesome/free-solid-svg-icons/faPlusSquare';

import searchLight from '@fortawesome/free-solid-svg-icons/faSearch';
import searchRegular from '@fortawesome/free-solid-svg-icons/faSearch';
import searchSolid from '@fortawesome/free-solid-svg-icons/faSearch';

import timesLight from '@fortawesome/free-solid-svg-icons/faTimes';
import timesRegular from '@fortawesome/free-solid-svg-icons/faTimes';
import timesSolid from '@fortawesome/free-solid-svg-icons/faTimes';

import universityLight from '@fortawesome/free-solid-svg-icons/faUniversity';
import universityRegular from '@fortawesome/free-solid-svg-icons/faUniversity';
import universitySolid from '@fortawesome/free-solid-svg-icons/faUniversity';

import userCircleLight from '@fortawesome/free-solid-svg-icons/faUserCircle';
import userCircleRegular from '@fortawesome/free-solid-svg-icons/faUserCircle';
import userCircleSolid from '@fortawesome/free-solid-svg-icons/faUserCircle';

import wifiLight from '@fortawesome/free-solid-svg-icons/faWifi';
import wifiRegular from '@fortawesome/free-solid-svg-icons/faWifi';
import wifiSolid from '@fortawesome/free-solid-svg-icons/faWifi';

import { } from '@fortawesome/fontawesome-free-brands';

library.add(
  barsLight as any, barsRegular as any, barsSolid as any,
  balanceScaleLight as any, balanceScaleRegular as any, balanceScaleSolid as any,
  chartLineLight as any, chartLineRegular as any, chartLineSolid as any,
  circleLight as any, circleRegular as any, circleSolid as any,
  cogLight as any, cogRegular as any, cogSolid as any,
  cogsLight as any, cogsRegular as any, cogsSolid as any,
  envelopeLight as any, envelopeRegular as any, envelopeSolid as any,
  plusSquareLight as any, plusSquareRegular as any, plusSquareSolid as any,
  searchLight as any, searchRegular as any, searchSolid as any,
  timesLight as any, timesRegular as any, timesSolid as any,
  universityLight as any, universityRegular as any, universitySolid as any,
  userCircleLight as any, userCircleRegular as any, userCircleSolid as any,
  wifiLight as any, wifiRegular as any, wifiSolid as any,
);

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type IconVariant = 'solid' | 'regular' | 'light';
export type IconName = Extract<IconProp, 'bars' | 'balance-scale' | 'chart-line' | 'circle' | 'cog' | 'cogs' | 'search' | 'envelope'
                                        | 'plus-square' | 'times' | 'university' | 'user-circle' | 'wifi'>;

export interface IconProps extends Omit<Props, 'icon'> {
  onClick?: () => void;
}

interface IconInternalProps extends IconProps {
  variant: IconVariant;
}

const determineIconProp = (name: IconName, variant: IconVariant) => (
  {
    prefix: determineIconType(variant),
    iconName: name,
  }
);

const determineIconType = (subtype: IconVariant): 'fas' | 'far' | 'fal' => {
  switch (subtype) {
    case 'solid': return 'fas';
    case 'regular': return 'far';
    case 'light': return 'fal';
  }
};

type PrivateIcon = (props: IconInternalProps) => JSX.Element;


const createIconVariants = (Icon: PrivateIcon) => (
  {
    Solid: (props: IconProps) => (<Icon {...props} variant='solid' />),
    Regular: (props: IconProps) => (<Icon {...props} variant='regular' />),
    Light: (props: IconProps) => (<Icon {...props} variant='light' />),
  }
);

const _Bars: PrivateIcon = (props: IconInternalProps) => <FontAwesomeIcon {...props} icon={determineIconProp('bars', props.variant)} />;
const _ChartLine: PrivateIcon = (props: IconInternalProps) => <FontAwesomeIcon {...props} icon={determineIconProp('chart-line', props.variant)} />;
const _Circle = (props: IconInternalProps) => <FontAwesomeIcon {...props} icon={determineIconProp('circle', props.variant)} />;
const _Cog = (props: IconInternalProps) => <FontAwesomeIcon {...props} icon={determineIconProp('cog', props.variant)} />;
const _Cogs = (props: IconInternalProps) => <FontAwesomeIcon {...props} icon={determineIconProp('cogs', props.variant)} />;
const _Cross = (props: IconInternalProps) => <FontAwesomeIcon {...props} icon={determineIconProp('times', props.variant)} />;
const _Envelope = (props: IconInternalProps) => <FontAwesomeIcon {...props} icon={determineIconProp('envelope', props.variant)} />;
const _PlusSquare = (props: IconInternalProps) => <FontAwesomeIcon {...props} icon={determineIconProp('plus-square', props.variant)} />;
const _Scale: PrivateIcon = (props: IconInternalProps) => <FontAwesomeIcon {...props} icon={determineIconProp('balance-scale', props.variant)} />;
const _Search = (props: IconInternalProps) => <FontAwesomeIcon {...props} icon={determineIconProp('search', props.variant)} />;
const _University = (props: IconInternalProps) => <FontAwesomeIcon {...props} icon={determineIconProp('university', props.variant)} />;
const _UserCircle =  (props: IconInternalProps) => <FontAwesomeIcon {...props} icon={determineIconProp('user-circle', props.variant)} />;
const _Wifi =  (props: IconInternalProps) => <FontAwesomeIcon {...props} icon={determineIconProp('wifi', props.variant)} />;


export const Icons = {
  Bars: createIconVariants(_Bars),
  ChartLine: createIconVariants(_ChartLine),
  Circle: createIconVariants(_Circle),
  Cog: createIconVariants(_Cog),
  Cogs: createIconVariants(_Cogs),
  Cross: createIconVariants(_Cross),
  Envelope: createIconVariants(_Envelope),
  PlusSquare: createIconVariants(_PlusSquare),
  Scale: createIconVariants(_Scale),
  Search: createIconVariants(_Search),
  University: createIconVariants(_University),
  UserCircle: createIconVariants(_UserCircle),
  Wifi: createIconVariants(_Wifi),
};
