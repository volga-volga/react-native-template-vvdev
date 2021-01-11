import React, { useMemo } from 'react';
import Animated from 'react-native-reanimated';
import { TouchableScaleAnimated } from './TouchableScaleAnimated';
import { TouchableScaleFeedbackProps } from './interfaces';

export function TouchableScaleFeedback(props: TouchableScaleFeedbackProps) {
  const scaleAnimated = useMemo(() => props.animated || new Animated.Value(1), [props.animated]);
  const { style, ...rest } = props;
  const wrapperStyle = useMemo(() => ([style, { transform: [{ scale: scaleAnimated }] }, props.wrapperStyle]), [style, scaleAnimated, props.wrapperStyle]);
  return (
    <Animated.View style={wrapperStyle}>
      <TouchableScaleAnimated
        {...rest}
        animated={scaleAnimated}
        style={style}
      />
    </Animated.View>
  );
}
