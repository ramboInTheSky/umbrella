import { primaryTheme, Theme, PrimaryBaselinePart } from '@daltanius/themes';

export const partyColor = '#5bbfef';
export const counterpartyColor = '#ed843f';
export const gradient = `linear-gradient(${partyColor} 0%, ${partyColor} 40%, ${counterpartyColor} 60%, ${counterpartyColor} 100%)`;
export const borderWidth = '2px';

export const baseCatergory: PrimaryBaselinePart = {
  dark: '#eee',
  main: '#999',
  light: '#eee',
  on: '#eee',
};

export const partyCatergory: PrimaryBaselinePart = {
    dark: '#cfe4e8',
    main: partyColor,
    light: '#cfe4e8',
    on: '#fff',
};

export const counterpartyCatergory: PrimaryBaselinePart = {
  dark: '#eae4e0',
  main: counterpartyColor,
  light: '#eae4e0',
  on: '#fff',
};

type SelectedThemeProvider =  (selected: boolean) => Theme;

export const partyTheme: SelectedThemeProvider = (selected: boolean) => (
  {
    primary: selected ? partyCatergory : baseCatergory,
    secondary:partyCatergory,
    background: {
      main: selected ? partyColor : '#eee',
      on: '#000',
    },
    surface: primaryTheme.surface,
    error: primaryTheme.error,
  }
);

export const counterpartyTheme: SelectedThemeProvider = (selected: boolean) => (
  {
    primary: selected ? counterpartyCatergory : baseCatergory,
    secondary: counterpartyCatergory,
    background: {
      main: selected ? counterpartyColor : '#eee',
      on: '#000',
    },
    surface: primaryTheme.surface,
    error: primaryTheme.error,
  }
);

export const combinedTheme: SelectedThemeProvider = (selected: boolean) => (
  {
    primary: baseCatergory,
    secondary: baseCatergory,
    background: {
      main:'#eee',
      on: '#000',
    },
    surface: primaryTheme.surface,
    error: primaryTheme.error,
  }
);
