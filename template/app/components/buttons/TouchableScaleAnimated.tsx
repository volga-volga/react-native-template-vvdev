import React from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import { getDefaultSpringConfig } from './animationConfig';
import { TouchableScaleAnimatedProps } from './interfaces';

export class TouchableScaleAnimated extends React.Component<TouchableScaleAnimatedProps> {
  static defaultProps: Partial<TouchableScaleAnimatedProps> = {
    pressInScale: 0.8,
    getSpringConfig: getDefaultSpringConfig,
  };

  constructor(props: TouchableScaleAnimatedProps) {
    super(props);
    this.handlePressIn = this.handlePressIn.bind(this);
    this.handlePressOut = this.handlePressOut.bind(this);
  }

  private handlePressIn(event: GestureResponderEvent) {
    this.animatePressIn();
    if (this.props.onPressIn) {
      this.props.onPressIn(event);
    }
  }

  private handlePressOut(event: GestureResponderEvent) {
    this.animatePressOut();
    if (this.props.onPressOut) {
      this.props.onPressOut(event);
    }
  }

  public animatePressIn() {
    this.animate(this.props.pressInScale!);
  }

  public animatePressOut() {
    this.animate(1);
  }

  private animate(toValue: number) {
    if (this.props.checkNeedAnimate) {
      if (!this.props.checkNeedAnimate()) {
        return;
      }
    }
    Animated.spring(this.props.animated, {
      ...this.props.getSpringConfig!(),
      toValue,
    }).start();
  }

  render() {
    const { TouchableComponent = TouchableOpacity } = this.props;
    return (
      <TouchableComponent
        activeOpacity={1}
        delayPressIn={0}
        {...this.props}
        onPress={this.props.onPress}
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}
      />
    );
  }
}
