export const colors = {
  white: '#fff',
  mediumWhite: '#f0f0f0',
  lightenWhite: '#f5f5f5',
  darkenWhite: '#eee',
  black: '#000',
  grey: '#333',
  greyDarken3: '#424242',
  secondaryGrey: '#9F9F9F',
  lightGrey: '#ccc',
  mediumGrey: '#767676',
  blue: '#3086F6',
  darken_blue: '#01579b',
  lightBlue: '#73C3DC',
  highBlue: '#012138',
  success: '#1b5e20',
  error: '#990000',
  info: '#0277bd',
} as const;

export const font = {
  light: 300,
  normal: 400,
  semiBold: 500,
  bold: 700,
  family: {
    Roboto: "'Roboto',sans-serif",
  },
} as const;

export const ZIndex = {
  base: 10,
  dropdown: 15,
  menu: 20,
  overlay: 30,
  modal: 40,
} as const;

export const breakpoints = {
  small: '576px',
  medium: '768px',
  ipadAir: '820px',
  large: '992px',
  xlarge: '1200px',
  xxlarge: '1400px',
} as const;

export const sizes = {
  normal: '40px',
} as const;

export const drawerWidth = '255px' as const;
export const tabHeight = '68px' as const;
