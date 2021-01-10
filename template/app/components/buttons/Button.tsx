import React, { useMemo } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { ButtonProps } from './interfaces';
import { Typography } from '../Typography';
import { StyleGuide, TypographyTypes } from '../../resources/StyleGuide';
import { TouchableScaleFeedback } from './TouchableScaleFeedback';

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 16,
  },
  largeContainer: {
    height: 52,
    borderRadius: 12,
  },
  middleContainer: {
    borderRadius: 4,
    height: 35,
    width: 155,
  },
  smallContainer: {
    borderRadius: 4,
    height: 28,
  },
  content: {
    paddingHorizontal: 12,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    paddingHorizontal: 12,
  },
});

const containerStyles = {
  large: styles.largeContainer,
  medium: styles.middleContainer,
  small: styles.smallContainer,
};

export function Button(props: ButtonProps) {
  const { text, disabled, icon, size, disabledBackgroundColor, backgroundColor, textColor, disabledTextColor, containerStyle } = props;
  const _containerStyle = useMemo(() => [
    containerStyles[size!],
    containerStyle,
    { backgroundColor: disabled ? disabledBackgroundColor : backgroundColor },
  ], [containerStyle, size, disabled, disabledBackgroundColor, backgroundColor]);
  const textStyle = useMemo(() => [{ color: disabled ? disabledTextColor : textColor }, styles.text], [disabled, disabledTextColor, textColor]);
  return (
    <View style={[styles.wrapper, props.wrapperStyle]}>
      <TouchableScaleFeedback
        {...props}
        disabled={props.disabled || props.loading}
        style={_containerStyle}
      >
        <View style={styles.content}>
          {props.loading ? (
            <ActivityIndicator color={textColor} />
          ) : (
            <>
              {icon}
              {text ? (
                <Typography
                  numberOfLines={1}
                  style={textStyle}
                  textAlign='center'
                  type={TypographyTypes.REGULAR12}
                >
                  {text}
                </Typography>
                ) : null}
            </>
            )}
        </View>
      </TouchableScaleFeedback>
    </View>
  );
}

Button.defaultProps = {
  backgroundColor: StyleGuide.palette.black,
  textColor: StyleGuide.palette.white,
  size: 'large',
};
