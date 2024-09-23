/**
*
* utils.js
* Declare all application utils
*
* @author - Faizal
* @date   - 24 June 2020
*
***/
// REACT NATIVE IMPORT
import React, {useEffect, useState} from 'react';
import { Alert, Platform } from 'react-native';
import Device from 'react-native-device-detection';
import NetInfo from "@react-native-community/netinfo";

// ALL SHARED FILES
import { Colors } from './colors';
import * as Constant from './constant';

/**
* Feature used to convert URL to html tags
*
* @input  String content
* @return String Formatted content url to anchor tag
*/
export const isInternetConnected = () => {
    return new Promise((resolve, reject) => {
      NetInfo.fetch().then(state => {
        // UPDATING THE NETWORK STATUS
        resolve(state.isConnected);
      }); 
    });
};

/**
* Feature used to convert String to date
*
* @input  String date
* @return String Formatted date
*/
export const stringToDate = (value) => {
  let dateTime = value.split(" ");
  let date     = dateTime[0].split("-");
  let time     = dateTime[1].split(":");
  return new Date(date[0],(date[1]-1),date[2],time[0],time[1],time[2]);
};
/**
* Feature used to find message by key
*
* @input  Object data
* @return String 
*/
export const messageByKey = (data) => {
    let message = Constant.MESSAGE[data.output];
    // CHECK WHETHER ITS HAS PARAM
    if (data.params) {
      let params = data.params;
      message = eval('`'+message+'`');
    }
    return message;
};
/**
* Feature used to convert URL to html tags
*
* @input  String content
* @return String Formatted content url to anchor tag
*/
export const convertHTML = (content) => {
    return content.replace(/((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g, '<a href="$1" target="_blank">More details</a>');
};

export const findPlaceURL = (place, url) => {
	place = place.split(' ').join('');
    let url_array      = url.split('/');
    let data_file_path = '/data/' + url_array[1].toLowerCase() + '/' +  url_array[2].toLowerCase() +  '/' + place.toLowerCase() + '.json';
    return data_file_path;
};

/**
* Feature used to check empty
*
* @input  String  content
* @return Boolean 
*/
export const isNotEmpty = (content) => {
    return (content === undefined || content === null || typeof content === 'undefined' || !content || content === '') ? false : true; 
};


/**
* Feature used to check empty
*
* @input  String  content
* @return Boolean 
*/
export const isEmpty = (content) => {
    return (content === undefined || content === null || typeof content === 'undefined' || !content || content === '') ? true : false; 
};

/**
* Validate email address
*
* @input  String email text
* @return Boolean
*/
export const validateEmail = (email) => {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

/**
* Feature used to convert first leter to capital
*
* @input  String value
* @return String Formatted value with first letter as capital
*/
export const convertToCapitalize = (name) => {
	// FETCHING ALL SAVED PLACE IDS AND CHECKING WHETHER ITS UNDEFINED OR NOT
	return name.charAt(0).toUpperCase() + name.slice(1);
}


/**
* Feature used to find wheather its ipad or not
*
* @return Array   
*/
export const isIpad = () => {
  let isPad = false;
  if (Platform.OS === 'ios' && Device.isTablet) {
    isPad = true;
  }
  return isPad
}

/**
* Feature used to find wheather its android or not
*
* @return Array   
*/
export const isAndroid = () => {
  return Platform.OS === 'android' ? true : false;
}


/**
* Alert pop 
*
* @input  String title
* @input  String message
* @input  Array  labels
* @input  Array  functions
* @input  Array  styles
* @return NA
*/
export const alert = (title, message, labels, functions, styles) => {
  // GENERATE BUTTON
  let btns = labels.map((item, index) => {
    return {text: item, onPress: functions[index], style: styles[index] ? styles[index] : ''};
  });
  setTimeout( () => {
    Alert.alert(title, message, btns, {cancelable: false});
  }, 200)
}