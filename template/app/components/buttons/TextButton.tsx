import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { TextButtonProps } from './interfaces';
import { Typography } from '../Typography';
import { StyleGuide, TypographyTypes } from '../../resources/StyleGuide';

const styles = StyleSheet.create({
  wrapper: {
    margin: -6,
  },
  text: {
    padding: 6,
  },
});

export function TextButton(props: TextButtonProps) {
  const { color, typography, wrapperStyle, text, onPress } = props;
  return (
    <View style={wrapperStyle}>
      <TouchableOpacity onPress={onPress}>
        <Typography
          color={color}
          style={styles.text}
          type={typography!}
        >
          {text}
        </Typography>
      </TouchableOpacity>
    </View>
  );
}

TextButton.defaultProps = {
  wrapperStyle: styles.wrapper,
  typography: TypographyTypes.REGULAR12,
  color: StyleGuide.palette.black,
};
