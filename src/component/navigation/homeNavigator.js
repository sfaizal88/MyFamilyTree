/**
*
* homeNavigator.js
* Use to create navigation between home and login
*
* @author - Faizal
* @date   - 24 June 2020
*
***/
import 'react-native-gesture-handler';
// REACT NATIVE IMPORT
import React, {useEffect, useState} from 'react';
import { Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Icon } from 'react-native-elements';

// ALL SHARED FILES
import { styles } from '../../shared/stylesheet';
import { Colors } from '../../shared/colors';

// ALL MODULE PAGE FILES
import {SettingNavigation} from './settingNavigator';
import {DashBoardScreen} from '../../pages/dashboard';
import {MemberScreen} from '../../pages/member';
import {TreeScreen} from '../../pages/tree';
import {ConnectScreen} from '../../pages/connect';
import {SettingScreen} from '../../pages/setting';

export const HomeNavigation = (props) => {

  // DECLARE NAVIGATION
  const Tab = createMaterialBottomTabNavigator();

  // USE EFFECT ON LOAD PROCESS
  useEffect(() => {
    // UPDATE STATUS COLOR
    StatusBar.setBarStyle('light-content');
  }, []);

  // RENDER HTML
  return (
  <>
  <Tab.Navigator
    initialRouteName="DashBoard"
    backBehavior="initialRoute"
    activeColor={Colors.primary}
    inactiveColor={Colors.mText}
    barStyle={styles.mainNavBar}
    labeled= {true} 
    shifting = {false}>
    <Tab.Screen name="DashBoard" component={DashBoardScreen}
      options = {{
        tabBarLabel: <Text style={styles.mainNavBarText}> HOME </Text>,
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name="home" focused={focused} color={focused ? Colors.primary : Colors.grayDark} size={focused? 23: 22} type='font-awesome'/>
        )
      }}
    />
    <Tab.Screen name="Member" component={MemberScreen} 
      options = {{
        tabBarLabel: <Text style={styles.mainNavBarText}> MEMBER </Text>,
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name="bar-chart" focused={focused} color={focused ? Colors.primary : Colors.grayDark} size={focused? 25: 22} type='font-awesome'/>
        )
      }}
    />
    <Tab.Screen name="Tree" component={TreeScreen} 
      options = {{
        tabBarLabel: <Text style={styles.mainNavBarText}> TREE </Text>,
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name="accessibility" focused={focused} color={focused ? Colors.primary : Colors.grayDark} size={focused? 25: 22} />
        )
      }}
    />
    <Tab.Screen name="Connect" component={ConnectScreen} 
      options = {{
        tabBarLabel: <Text style={styles.mainNavBarText}> CONNECT </Text>,
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name="restore" focused={focused} color={focused ? Colors.primary : Colors.grayDark} size={focused? 25: 22} />
        )
      }}
    />
    <Tab.Screen name="More" component={SettingNavigation} 
      options = {{
        tabBarLabel: <Text style={styles.mainNavBarText}> MORE </Text>,
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name="more" focused={focused} color={focused ? Colors.primary : Colors.grayDark} size={focused? 25: 22}/>
        )
      }}
    />
  </Tab.Navigator>
  </>
  );
}