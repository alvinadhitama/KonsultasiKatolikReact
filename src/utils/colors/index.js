const mainColors = {
  navy: '#14153D',
  blue: '#CCDAFA',
  blue2: '#487CF9',
  gray: '#e9e9e9',
  gray2: '#7d8797',
  gray3: '#BDC8D2',
  black1: '#000000',
  black2: 'rgba(0,0,0,0.5)',
  red1: '#F20000',
};

export const colors = {
  primary: mainColors.navy,
  secondary: mainColors.blue,
  gray: mainColors.gray,
  gray2: mainColors.gray2,
  blue: mainColors.blue,
  blue2: mainColors.blue2,
  white: 'white',
  black: 'black',
  text: {
    primary: mainColors.navy,
    secondary: mainColors.gray,
    blue: mainColors.blue,
    gray: mainColors.gray2,
    black: 'black',
    white: 'white',
    inactive: mainColors.gray3,
    active: mainColors.blue2,
  },
  button: {
    primary: {
      background: mainColors.primary,
      text: 'white',
    },
    secondary: {
      background: mainColors.blue,
      text: 'black',
    },
    disable: {
      background: mainColors.gray3,
      text: 'white',
    },
  },
  border: {
    gray: mainColors.gray,
    blue: mainColors.blue,
  },
  cardLight: mainColors.blue,
  loadingBackground: mainColors.black2,
  error: mainColors.red1,
};
