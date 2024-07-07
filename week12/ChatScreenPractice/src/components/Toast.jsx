import React, {useRef, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

const Toast = ({content, visible, duration, handleCancel}) => {
  const tostValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) toastAnimation();
  }, [toastAnimation, visible]);

  const toastAnimation = useCallback(() => {
    tostValue.setValue(0);
    Animated.spring(tostValue, {
      toValue: 1,
      delay: 100,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (finished) {
        handleCancel();
        Animated.timing(tostValue, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
          delay: duration || 100,
        }).start();
      }
    });
  }, [duration]);

  return (
    <Animated.View
      style={[
        styles.toast,
        {
          opacity: tostValue,
          transform: [
            {
              translateX: tostValue.interpolate({
                inputRange: [0, 1],
                outputRange: [-40, -45],
              }),
            },
            {
              scale: tostValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0.9, 1],
              }),
            },
          ],
        },
      ]}>
      <View style={styles.toastContents}>
        <Text style={styles.toastText}>{content}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    top: 80,
    left: 100,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toastContents: {
    justifyContent: 'center',
    height: 39,
    backgroundColor: '#333',
    paddingHorizontal: 16,
    borderRadius: 100,
  },
  toastText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
  },
});

export default Toast;
