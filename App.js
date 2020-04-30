import React from 'react';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet, View } from 'react-native';

import ArticlesPage from './pages/Articles.page';
import ProfilePage from './pages/Profile.page';


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgba(255, 45, 85, 0)',
  },
};

const Tab = createBottomTabNavigator();


export default function App() {

  return (
      <NavigationContainer theme={MyTheme}>
        <View style={styles.container}>
          <View style={styles.phoneHeader}></View>
        <Tab.Navigator>
          <Tab.Screen name="Articles" component={ArticlesPage} />
          <Tab.Screen name="Profile" component={ProfilePage} />
          </Tab.Navigator>
        </View>
      </NavigationContainer>
  );
}


const styleObject = {
  container: {
    flex: 1,
    backgroundColor: "#00A3AD",
  },
  phoneHeader: {
    height: '4%',
    backgroundColor: "rgba(0,0,0,0.2)"
  },
}

const styles = StyleSheet.create(styleObject);