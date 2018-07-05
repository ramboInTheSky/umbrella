import React from 'react';

import { library, IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, Props } from '@fortawesome/react-fontawesome';

// actual icons
import { faBars as barsLight } from '@fortawesome/free-solid-svg-icons';
import { faBars as barsRegular } from '@fortawesome/free-solid-svg-icons';
import { faBars as barsSolid } from '@fortawesome/free-solid-svg-icons';

import { faBalanceScale as balanceScaleLight } from '@fortawesome/free-solid-svg-icons';
import { faBalanceScale as balanceScaleRegular } from '@fortawesome/free-solid-svg-icons';
import { faBalanceScale as balanceScaleSolid } from '@fortawesome/free-solid-svg-icons';

import { faChartLine as chartLineLight } from '@fortawesome/free-solid-svg-icons';
import { faChartLine as chartLineRegular } from '@fortawesome/free-solid-svg-icons';
import { faChartLine as chartLineSolid } from '@fortawesome/free-solid-svg-icons';

import { faCircle as circleLight } from '@fortawesome/free-solid-svg-icons';
import { faCircle as circleRegular } from '@fortawesome/free-solid-svg-icons';
import { faCircle as circleSolid } from '@fortawesome/free-solid-svg-icons';

import { faCog as cogLight } from '@fortawesome/free-solid-svg-icons/';
import { faCog as cogRegular } from '@fortawesome/free-solid-svg-icons/';
import { faCog as cogSolid } from '@fortawesome/free-solid-svg-icons/';

import { faCogs as cogsLight } from '@fortawesome/free-solid-svg-icons';
import { faCogs as cogsRegular } from '@fortawesome/free-solid-svg-icons';
import { faCogs as cogsSolid } from '@fortawesome/free-solid-svg-icons';

import { faEnvelope as envelopeLight } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope as envelopeRegular } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope as envelopeSolid } from '@fortawesome/free-solid-svg-icons';

import { faPlusSquare as plusSquareLight } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare as plusSquareRegular } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare as plusSquareSolid } from '@fortawesome/free-solid-svg-icons';

import { faSearch as searchLight } from '@fortawesome/free-solid-svg-icons';
import { faSearch as searchRegular } from '@fortawesome/free-solid-svg-icons';
import { faSearch as searchSolid } from '@fortawesome/free-solid-svg-icons';

import { faTimes as timesLight } from '@fortawesome/free-solid-svg-icons';
import { faTimes as timesRegular } from '@fortawesome/free-solid-svg-icons';
import { faTimes as timesSolid } from '@fortawesome/free-solid-svg-icons';

import { faUniversity as universityLight } from '@fortawesome/free-solid-svg-icons';
import { faUniversity as universityRegular } from '@fortawesome/free-solid-svg-icons';
import { faUniversity as universitySolid } from '@fortawesome/free-solid-svg-icons';

import { faCircle as userCircleLight } from '@fortawesome/free-solid-svg-icons';
import { faCircle as userCircleRegular } from '@fortawesome/free-solid-svg-icons';
import { faCircle as userCircleSolid } from '@fortawesome/free-solid-svg-icons';

import { faWifi as wifiLight } from '@fortawesome/free-solid-svg-icons';
import { faWifi as wifiRegular } from '@fortawesome/free-solid-svg-icons';
import { faWifi as wifiSolid } from '@fortawesome/free-solid-svg-icons';

library.add(
  barsLight, barsRegular, barsSolid,
  balanceScaleLight, balanceScaleRegular, balanceScaleSolid,
  chartLineLight, chartLineRegular, chartLineSolid,
  circleLight, circleRegular, circleSolid,
  cogLight, cogRegular, cogSolid,
  cogsLight, cogsRegular, cogsSolid,
  envelopeLight, envelopeRegular, envelopeSolid,
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
