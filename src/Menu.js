import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Literature from './screens/Literature/Literature';
import Tasks from './screens/Tasks/Tasks';
import Profile from './screens/Profile/Profile';

export default function Menu() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName="Profile">
      <Tab.Screen
        name="Список литературы"
        component={Literature}
        options={{
          tabBarLabel: 'Список литературы',
          tabBarIcon: (color) => (
            <MaterialCommunityIcons name="book" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Заметки"
        component={Tasks}
        options={{
          tabBarLabel: 'Заметки',
          tabBarIcon: (color) => (
            <MaterialCommunityIcons name="note" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Профиль"
        component={Profile}
        options={{
          tabBarLabel: 'Профиль',
          tabBarIcon: (color) => (
            <MaterialCommunityIcons name="account" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}