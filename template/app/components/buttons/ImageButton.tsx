import React, { useMemo } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { ImageButtonProps } from './interfaces';
import { TouchableScaleFeedback } from './TouchableScaleFeedback';
import { StyleGuide } from '../../resources/StyleGuide';

const styles = StyleSheet.create({
  wrapper: {
    margin: -10,
  },
  icon: {
    margin: 10,
    width: 22,
    height: 22,
  },
});

export function ImageButton(props: ImageButtonProps) {
  const { tintColor, wrapperStyle, image, disabled, disabledTintColor = StyleGuide.palette.transparent, ...rest } = props;
  const imageStyle = useMemo(() => [styles.icon, { tintColor: disabled ? disabledTintColor : tintColor }, props.imageStyle], [props.imageStyle, disabledTintColor, tintColor, disabled]);
  return (
    <View style={wrapperStyle}>
      <TouchableScaleFeedback
        {...rest}
        disabled={disabled}
      >
        <Image
          source={image}
          style={imageStyle}
        />
      </TouchableScaleFeedback>
    </View>
  );
}

ImageButton.defaultProps = {
  wrapperStyle: styles.wrapper,
};
