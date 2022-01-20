import type { FC } from 'react';
import React from 'react';
import { Button, Text, View, StyleSheet /* Alert */ } from 'react-native';
import {
  useSafeHeight,
  useLayout,
  // useNavigationResume,
  useStatusBar,
} from '@fruits-chain/hooks-laba-rn';

interface IProps {
  navigation: any;
  route: any;
}

const Home: FC<IProps> = ({ navigation }) => {
  // 设置状态栏颜色hook 'dark-content', true /* 设置状态栏是否为透明 */
  useStatusBar({
    barStyle: 'dark-content',
  });
  // 获取安全区的高度hook
  const safeHeight = useSafeHeight();
  // 布局完成时获取组件的宽高和位置hook
  const { onLayout, ...layout } = useLayout();
  // 导航/路由/页面再次激活或离开后回来时触发
  // useNavigationResume(() => {
  //   Alert.alert('我重新聚焦');
  // });

  return (
    <View style={styles.layoutCenter}>
      <Text style={[styles.pageSty, styles.mb12]}>Home</Text>

      {/* 安全区域组件 */}
      <Text style={[styles.testFont, styles.mb12]}>设备安全区域的高度：{safeHeight}</Text>

      {/* 盒子组件 */}
      <View style={[styles.box, styles.mb12]} onLayout={onLayout}>
        <Text style={styles.testFont}>盒子</Text>
        <Text>{`宽:${layout.width.toFixed(2)}   高:${layout.height.toFixed(2)}`}</Text>
        <Text>{`x轴:${layout.x.toFixed(2)} y轴:${layout.y.toFixed(2)}`}</Text>
      </View>

      {/* 按钮 */}
      <Button
        title="跳转到Detail"
        onPress={() => {
          navigation.navigate('Detail');
        }}
      />
      <View style={styles.mb12} />
      <Button
        title="跳转到Animation"
        onPress={() => {
          navigation.navigate('Animation');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pageSty: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 50,
  },

  layoutCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  testFont: {
    color: '#000',
    fontSize: 20,
  },

  box: {
    width: 200,
    height: 200,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mb12: {
    marginBottom: 12,
  },
});

export default Home;
