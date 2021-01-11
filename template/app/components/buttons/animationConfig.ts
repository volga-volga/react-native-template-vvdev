import Animated from 'react-native-reanimated';

export function getDefaultSpringConfig(): Omit<Animated.SpringConfig, 'toValue'> {
  return {
    restSpeedThreshold: 0.001,
    restDisplacementThreshold: 0.001,
    overshootClamping: true,
    stiffness: 100,
    damping: 10,
    mass: 1,
  };
}
