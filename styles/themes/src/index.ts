// third party

// first party
import { colors } from '@daltanius/colors';


export interface BaselinePart {
  main: string; // the main color for each category
  on: string; // the font color that should be displayed on the main color
}

export interface PrimaryBaselinePart extends BaselinePart {
  dark: string; // a dark variant of the main color
  light: string; // a light variant of the main color
}

// derived from material design theming conventions https://material.io/design/color/the-color-system.html#color-theme-creation
export interface Theme {
  primary: PrimaryBaselinePart;
  secondary: PrimaryBaselinePart;
  background: BaselinePart;
  surface: BaselinePart;
  error: BaselinePart;
}

export const primaryTheme: Theme = {
  primary: {
    dark: colors.green['700'],
    main: colors.green['500'] ,
    light: colors.green['300'],
    on: '#fff',
  },
  secondary: {
    dark: colors.green['700'],
    main: colors.green['500'] ,
    light: colors.green['300'],
    on: '#fff',
  },
  background: {
    main: '#eee',
    on: '#000000',
  },
  surface: {
    main: '#fff',
    on: '#000000',
  },
  error: {
    main: '#b00020',
    on: '#fff',
  },
};
