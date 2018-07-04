import React from 'react';

import { library, IconProp } from '@fortawesome/fontawesome';
import { FontAwesomeIcon, Props } from '@fortawesome/react-fontawesome';

// actual icons
import barsLight from '@fortawesome/fontawesome-pro-light/faBars';
import barsRegular from '@fortawesome/fontawesome-pro-regular/faBars';
import barsSolid from '@fortawesome/fontawesome-pro-solid/faBars';

import balanceScaleLight from '@fortawesome/fontawesome-pro-light/faBalanceScale';
import balanceScaleRegular from '@fortawesome/fontawesome-pro-regular/faBalanceScale';
import balanceScaleSolid from '@fortawesome/fontawesome-pro-solid/faBalanceScale';

import chartLineLight from '@fortawesome/fontawesome-pro-light/faChartLine';
import chartLineRegular from '@fortawesome/fontawesome-pro-regular/faChartLine';
import chartLineSolid from '@fortawesome/fontawesome-pro-solid/faChartLine';

import circleLight from '@fortawesome/fontawesome-pro-light/faCircle';
import circleRegular from '@fortawesome/fontawesome-pro-regular/faCircle';
import circleSolid from '@fortawesome/fontawesome-pro-solid/faCircle';

import cogLight from '@fortawesome/fontawesome-pro-light/faCog';
import cogRegular from '@fortawesome/fontawesome-pro-regular/faCog';
import cogSolid from '@fortawesome/fontawesome-pro-solid/faCog';

import cogsLight from '@fortawesome/fontawesome-pro-light/faCogs';
import cogsRegular from '@fortawesome/fontawesome-pro-regular/faCogs';
import cogsSolid from '@fortawesome/fontawesome-pro-solid/faCogs';

import envelopeLight from '@fortawesome/fontawesome-pro-light/faEnvelope';
import envelopeRegular from '@fortawesome/fontawesome-pro-regular/faEnvelope';
import envelopeSolid from '@fortawesome/fontawesome-pro-solid/faEnvelope';

import exchangeLight from '@fortawesome/fontawesome-pro-light/faExchange';
import exchangeRegular from '@fortawesome/fontawesome-pro-regular/faExchange';
import exchangeSolid from '@fortawesome/fontawesome-pro-solid/faExchange';

import plusSquareLight from '@fortawesome/fontawesome-pro-light/faPlusSquare';
import plusSquareRegular from '@fortawesome/fontawesome-pro-regular/faPlusSquare';
import plusSquareSolid from '@fortawesome/fontawesome-pro-solid/faPlusSquare';

import searchLight from '@fortawesome/fontawesome-pro-light/faSearch';
import searchRegular from '@fortawesome/fontawesome-pro-regular/faSearch';
import searchSolid from '@fortawesome/fontawesome-pro-solid/faSearch';

import timesLight from '@fortawesome/fontawesome-pro-light/faTimes';
import timesRegular from '@fortawesome/fontawesome-pro-regular/faTimes';
import timesSolid from '@fortawesome/fontawesome-pro-solid/faTimes';

import universityLight from '@fortawesome/fontawesome-pro-light/faUniversity';
import universityRegular from '@fortawesome/fontawesome-pro-regular/faUniversity';
import universitySolid from '@fortawesome/fontawesome-pro-solid/faUniversity';

import userCircleLight from '@fortawesome/fontawesome-pro-light/faUserCircle';
import userCircleRegular from '@fortawesome/fontawesome-pro-regular/faUserCircle';
import userCircleSolid from '@fortawesome/fontawesome-pro-solid/faUserCircle';

import wifiLight from '@fortawesome/fontawesome-pro-light/faWifi';
import wifiRegular from '@fortawesome/fontawesome-pro-regular/faWifi';
import wifiSolid from '@fortawesome/fontawesome-pro-solid/faWifi';

import { } from '@fortawesome/fontawesome-free-brands';

library.add(
  barsLight, barsRegular, barsSolid,
  balanceScaleLight, balanceScaleRegular, balanceScaleSolid,
  chartLineLight, chartLineRegular, chartLineSolid,
  circleLight, circleRegular, circleSolid,
  cogLight, cogRegular, cogSolid,
  cogsLight, cogsRegular, cogsSolid,
  envelopeLight, envelopeRegular, envelopeSolid,
  exchangeLight, exchangeRegular, exchangeSolid,
  plusSquareLight, plusSquareRegular, plusSquareSolid,
  searchLight, searchRegular, searchSolid,
  timesLight, timesRegular, timesSolid,
  universityLight, universityRegular, universitySolid,
  userCircleLight, userCircleRegular, userCircleSolid,
  wifiLight, wifiRegular, wifiSolid,
);

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type IconVariant = 'solid' | 'regular' | 'light';
export type IconName = Extract<IconProp, 'bars' | 'balance-scale' | 'chart-line' | 'circle' | 'cog' | 'cogs' | 'search' | 'envelope'
                                       | 'exchange' | 'plus-square' | 'times' | 'university' | 'user-circle' | 'wifi'>;

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
const _Exchange = (props: IconInternalProps) => <FontAwesomeIcon {...props} icon={determineIconProp('exchange', props.variant)} />;
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
  Exchange: createIconVariants(_Exchange),
  PlusSquare: createIconVariants(_PlusSquare),
  Scale: createIconVariants(_Scale),
  Search: createIconVariants(_Search),
  University: createIconVariants(_University),
  UserCircle: createIconVariants(_UserCircle),
  Wifi: createIconVariants(_Wifi),
};
