import type {FC} from 'react';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from './src/pages/detail';
import Home from './src/pages/home';
import Animation from './src/pages/animation';

interface IProps {}

const Stack = createNativeStackNavigator();

const App: FC<IProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Animation" component={Animation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
