import { FC, useMemo } from 'react';
import React from 'react';
import { Button, Text, TouchableOpacity } from 'react-native';
import { useStatusBar, useNavigationRight, useNavigationBack } from '@fruits-chain/hooks-laba-rn';

interface IProps {
  navigation: any;
  route: any;
}

const Detail: FC<IProps> = ({ navigation }) => {
  // 设置状态栏颜色 hook
  useStatusBar({
    barStyle: 'dark-content',
  });

  // 右上角自定义组件
  const rightCom = useMemo(
    () => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 50 }}>右上角</Text>
      </TouchableOpacity>
    ),
    [navigation],
  );
  // 设置导航右上角组件 hook
  useNavigationRight(rightCom);

  // 设置左上角返回的自定义Icon，和点击事件 hook
  useNavigationBack({
    callback: () => {
      navigation.navigate('Home');
    },
    backNavigationElementFn: callback => (
      <Text style={{ color: 'red', fontSize: 15, marginRight: 10 }} onPress={callback}>
        《《《
      </Text>
    ),
    isBackHandle: false,
    backShown: false,
  });

  return (
    <>
      <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 50 }}>detail</Text>
      <Button
        title="跳转到Home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </>
  );
};

export default Detail;
