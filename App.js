import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Dolar from './src/pages/Dolar';
import Euro from './src/pages/Euro';
import Bitcoin from './src/pages/Bitcoin';

const Tab = createBottomTabNavigator();

const icons = {
  Dólar: {
    name: 'logo-usd',
  },
  Euro: {
    name: 'logo-euro',
  },
  BitCoin: {
    name: 'logo-bitcoin',
  }
}

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={ ({route}) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />
        }
      }) }
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray'
      }}
      >
        <Tab.Screen name='Dólar' component={Dolar} />
        <Tab.Screen name='Euro' component={Euro} />
        <Tab.Screen name='BitCoin' component={Bitcoin} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
