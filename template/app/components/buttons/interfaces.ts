import React from 'react';
import { ImageSourcePropType, ImageStyle, TouchableOpacityProps, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { TypographyTypes } from '../../resources/StyleGuide';

export interface TouchableScaleAnimatedProps extends TouchableOpacityProps {
  TouchableComponent?: React.ComponentClass<any>;
  animated: Animated.Value<number>;
  pressInScale?: number;
  checkNeedAnimate?: () => boolean;
  getSpringConfig?: () => Omit<Animated.SpringConfig, 'toValue'>;
}

export interface TouchableScaleFeedbackProps extends Omit<TouchableScaleAnimatedProps, 'animated'> {
  animated?: Animated.Value<number>;
  wrapperStyle?: ViewStyle;
  children: React.ReactNode;
}

export interface ButtonProps extends Omit<TouchableScaleFeedbackProps, 'children'> {
  loading?: boolean;
  backgroundColor?: string;
  disabledBackgroundColor?: string;
  textColor?: string;
  disabledTextColor?: string;
  text?: string;
  icon?: React.ReactNode;
  size?: 'large' | 'medium' | 'small';
  containerStyle?: ViewStyle;
  wrapperStyle?: ViewStyle;
}

export interface TextButtonProps {
  text: string;
  onPress: () => void;
  wrapperStyle?: ViewStyle;
  typography?: TypographyTypes;
  color?: string;
}

export interface ImageButtonProps extends Omit<TouchableScaleFeedbackProps, 'children'> {
  disabled?: boolean;
  image: ImageSourcePropType;
  imageStyle?: ImageStyle;
  onPress?: () => void;
  wrapperStyle?: ViewStyle;
  tintColor?: string;
  disabledTintColor?: string;
}
