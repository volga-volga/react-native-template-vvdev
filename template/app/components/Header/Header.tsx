import React from 'react';
import {
  View, Text, ViewStyle, TouchableOpacity, StyleSheet, Platform, Dimensions,
} from 'react-native';
import { StyleGuide } from '../../resources/StyleGuide';
import { ImageButton } from '../buttons/ImageButton';
import { images } from '../../resources/images';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 5,
    backgroundColor: StyleGuide.palette.white,
    borderColor: StyleGuide.palette.separator,
    borderBottomWidth: 1,
    width: '100%',
    height: 44,
  },
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: StyleGuide.palette.black,
    fontSize: 14,
    fontWeight: Platform.OS === 'ios' ? '700' : 'bold',
  },
  rightButtonContainer: {
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
    borderRadius: 20,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  leftButtonContainer: {
    overflow: 'hidden',
    position: 'absolute',
    left: 18,
    borderRadius: 20,
  },
  titleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: width - 100,
  },
});

interface Props {
  onTitlePress?: () => void,
  title: string,
  tintColor?: string,
  onBackPress?: () => void,
  renderRightButton?: () => React.ReactElement,
  renderLeftButton?: () => React.ReactElement,
  wrapperStyle?: ViewStyle | ViewStyle[],
}

export function Header(props: Props) {
  const { wrapperStyle, tintColor = StyleGuide.palette.black, onBackPress, renderLeftButton, onTitlePress, title, renderRightButton } = props;
  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <View style={styles.container}>
        {onBackPress ? (
          <ImageButton
            image={images.back}
            onPress={onBackPress}
            tintColor={tintColor}
            wrapperStyle={styles.leftButtonContainer}
          />
          ) : null}
        {renderLeftButton ? (
          <View style={styles.leftButtonContainer}>
            {renderLeftButton()}
          </View>
          ) : null}
        <TouchableOpacity
          activeOpacity={1}
          disabled={!onTitlePress}
          onPress={onTitlePress}
          style={styles.titleWrapper}
        >
          <Text
            numberOfLines={1}
            style={[styles.title, { color: tintColor }]}
          >
            {title}
          </Text>
        </TouchableOpacity>
        {renderRightButton ? (
          <View style={styles.rightButtonContainer}>
            {renderRightButton()}
          </View>
          ) : null}
      </View>
    </View>
  );
}
