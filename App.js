import React, { useState } from 'react';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet, View } from 'react-native';

import ArticlesPage from './pages/Articles.page';
import ProfilePage from './pages/Profile.page';
import LoginPage from './pages/Login.page';
import Header from './components/Header';


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgba(255, 45, 85, 0)',
  },
};

const Tab = createBottomTabNavigator();


export default function App() {

  const [loggedInUser, setLoggedInUser] = useState();


  const handleLoginSuccessful = (user) => {
    setLoggedInUser(user)
  };

  const handleLogout = () => {
    setLoggedInUser(undefined)
  };

  return (
    <View style={styles.container}>
      <View style={styles.phoneHeader}></View>
      <Header user={loggedInUser} onLogout={handleLogout} />
      {loggedInUser &&
        <NavigationContainer theme={MyTheme}>
          <View style={styles.container}>
            <Tab.Navigator>
              <Tab.Screen name="Articles" component={ArticlesPage} />
              <Tab.Screen name="Profile" component={ProfilePage} />
            </Tab.Navigator>
          </View>
        </NavigationContainer>
      }
      {!loggedInUser &&
        <LoginPage onLoginSuccessful={handleLoginSuccessful} />
      }
    </View>
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