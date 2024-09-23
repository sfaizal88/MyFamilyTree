/**
*
* App.js
* Main file use to trigger all navigation.
* org.reactjs.native.faizal88.myfamily
* @author - Faizal
* @date   - 24 June 2020
*
***/
import 'react-native-gesture-handler';
// REACT NATIVE IMPORT
import React, {useEffect, useState} from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen'

// ALL SHARED FILES
import { styles } from './src/shared/stylesheet';
import { Colors } from './src/shared/colors';
import * as Storage from './src/shared/storage';
import * as Constant from './src/shared/constant';
import * as Utils from './src/shared/utils';

// ALL COMPONENT FILES
import {HomeNavigation} from './src/component/navigation/homeNavigator';
import {SettingNavigation} from './src/component/navigation/settingNavigator';
import { OfflineInternet  } from './src/component/complex/offlineInternet';

// ALL MODULE PAGE FILES
import {LoginScreen} from './src/pages/login';
import {IntroScreen} from './src/pages/intro';
import {DashBoardScreen} from './src/pages/dashboard';
import {MemberScreen} from './src/pages/member';
import {TreeScreen} from './src/pages/tree';
import {ConnectScreen} from './src/pages/connect';

console.disableYellowBox = true;
export default  App = ({navigation}) => {

  // DECLARE NAVIGATION
  const Stack = createStackNavigator();

  // LOCAL VARIABLE DECLARATION
  const navigatorConfig = {
    title: '',
    headerBackTitle: '',
    headerShown: false,
    gestureEnabled: false
  };

  // USE EFFECT ON LOAD PROCESS
  useEffect(() => { 
    SplashScreen.hide();
  }, []);

  // RENDER HTML
  return (
    <>
        <OfflineInternet/>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={'Intro'}>
            <Stack.Screen name="Login" component={LoginScreen}  options={{...navigatorConfig}}/>
            <Stack.Screen name="DashBoard" component={DashBoardScreen}  options={{...navigatorConfig}} />
            <Stack.Screen name="Member" component={MemberScreen}  options={{...navigatorConfig}} />
            <Stack.Screen name="Tree" component={TreeScreen}  options={{...navigatorConfig}} />
            <Stack.Screen name="Connect" component={ConnectScreen}  options={{...navigatorConfig}} />
            <Stack.Screen name="More" component={SettingNavigation}  options={{...navigatorConfig}} />
            <Stack.Screen name="Intro" component={IntroScreen}  options={{...navigatorConfig}} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
  );
}
