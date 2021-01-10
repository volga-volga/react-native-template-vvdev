import { PixelRatio, TextStyle, ViewStyle } from 'react-native';

export type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

const fontWeight: {
  [name in
    | 'THIN'
    | 'EXTRA_LIGHT'
    | 'LIGHT'
    | 'NORMAL'
    | 'MEDIUM'
    | 'SEMI_BOLD'
    | 'BOLD'
    | 'EXTRA_BOLD'
    | 'HEAVY']: FontWeight;
} = {
  THIN: '100',
  EXTRA_LIGHT: '200',
  LIGHT: '300',
  NORMAL: '400',
  MEDIUM: '500',
  SEMI_BOLD: '600',
  BOLD: '700',
  EXTRA_BOLD: '800',
  HEAVY: '800',
};

export enum TypographyTypes {
  REGULAR12 = 'REGULAR12',
  REGULAR16 = 'REGULAR16',
}

const typography: { [key in TypographyTypes]: TextStyle } = {
  [TypographyTypes.REGULAR12]: {
    fontSize: 12,
  },
  [TypographyTypes.REGULAR16]: {
    fontSize: 16,
  },
};

const palette = {
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
  overlay: '#00000080',
  separator: '#00000033',
};

export const StyleGuide = {
  shadow: {
    shadowColor: palette.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  } as ViewStyle,
  halfPixelBorderWidth: PixelRatio.roundToNearestPixel(0.5),
  fontWeight,
  palette,
  typography,
};
