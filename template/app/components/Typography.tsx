import React, { useMemo } from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import { StyleGuide, TypographyTypes } from '../resources/StyleGuide';

type ExtTextStyle = TextStyle | undefined;

export interface TypographyProps extends TextProps {
  type: TypographyTypes;
  style?: ExtTextStyle | ExtTextStyle[];
  color?: string;
  textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through';
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  children: React.ReactNode;
}

export function Typography(props: TypographyProps) {
  const { type, style, color, textDecorationLine, textAlign, ...rest } = props;
  const textStyle = useMemo(() => [StyleGuide.typography[type], { color, textAlign, textDecorationLine }, style], [type, color, textAlign, textDecorationLine, style]);
  return (
    <Text
      {...rest}
      style={textStyle}
    />
  );
}

Typography.defaultProps = {
  color: StyleGuide.palette.black,
};
