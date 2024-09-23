/**
*
* storage.js
* Store app data into mobile 
*
* @author - Faizal
* @date   - 24 June 2020
*
***/
// REACT NATIVE IMPORT
import React from 'react';
import { AsyncStorage } from 'react-native';

/**
* Set inside storage
*
* @input  String key
* @input  String value
* @return NA
*/
export const _storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('_storeData - ' + error);
  }
};

/**
* Set inside storage
*
* @input  String key
* @return String value
*/
export const _retrieveData = (key) => {
  // SETTING UP PROMISES
  return new Promise((resolve, reject) => {
    // GET DATA FROM STORAGE
    AsyncStorage.getItem(key).then(item => {
      // SAVE INTO RESOLVE
      resolve(item)
    });
  });
};

/**
* Feature used to clear all storage
*
* @input  NA
* @return NA
*/
export const _clearAllStorage = () => {
  // CLEAR MOBILE STORAGE
  AsyncStorage.clear();
}

/**
* Feature used to submit payment form
*
* @input  NA
* @return NA
*/
export const _retrieveDataAsync = async (key) => {
    const userToken = await AsyncStorage.getItem(key);
    return userToken;
}

async function getAst(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getToken = (key) => {
    return getAst(key);
}