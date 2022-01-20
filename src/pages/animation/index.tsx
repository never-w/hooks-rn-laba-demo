import React, { useState } from 'react';
import { Animated, Switch, View } from 'react-native';
import {
  useAnimation,
  useStatusBar,
  useNavigationHeaderCustomColor,
} from '@fruits-chain/hooks-laba-rn';

export default () => {
  // 设置状态栏颜色hook
  useStatusBar({
    barStyle: 'dark-content',
    translucent: true,
  });
  const [bool, setBool] = useState(false);

  const animatedValue = useAnimation({
    type: 'timing',
    toValue: bool ? 1 : 0,
    duration: 1000,
    useNativeDriver: true,
  });

  // 自定义d导航 头部状态栏颜色
  useNavigationHeaderCustomColor();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 10 }}>
        <Switch value={bool} onValueChange={setBool} />
      </View>
      <View
        style={{
          flex: 1,
          padding: 10,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Animated.View
          style={[
            { width: 100, height: 100, backgroundColor: 'red' },
            {
              opacity: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
          ]}
        />
        <Animated.View
          style={[
            { width: 100, height: 100, backgroundColor: '#000' },
            {
              transform: [
                {
                  scale: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.3, 1],
                  }),
                },
              ],
            },
          ]}
        />
      </View>
    </View>
  );
};
