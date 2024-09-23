/**
*
* SETTING.js
* Declare all main setting variable declare
* @author - Faizal
* @date   - 20 April 2020
*
***/
'use strict';
// REACT NATIVE IMPORT
import { Dimensions, StatusBar, Platform, NativeModules } from 'react-native';

// DECALRE SETTING VARIABLE
const { StatusBarManager } = NativeModules;
export const Setting = {
  usTextSize: 10,
  xxsTextSize: 12,
  sxTextSize: 13,
  sTextSize: 14,
  nTextSize: 15,
  lTextSize: 38,
  h1TextSize: 26,
  h2TextSize: 24,
  h3TextSize: 22,
  h4TextSize: 20,
  h5TextSize: 18,
  h6TextSize: 17,
  moreIconSize: 22,
  STATUSBAR_HEIGHT: Platform.OS === 'ios' ? 40 : StatusBarManager.HEIGHT,
  APPBAR_HEIGHT: Platform.OS === 'ios' ? 44 : 56,
  DEVICE_WIDTH: Dimensions.get('window').width,
};
