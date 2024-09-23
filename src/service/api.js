/**
*
* api.js
* Handle API Service
*
* @author - Faizal
* @date   - 24 June 2020
*
***/
// REACT NATIVE IMPORT
import React from 'react';

// ALL SHARED FILES
import * as Constant from '../shared/constant';
import * as URLConstant from '../shared/url';
import * as Utils from '../shared/utils';
import * as Storage from '../shared/storage';

/**
* Post API
*
* @input  String URL
* @input  String Body
* @return NA
*/
export const post = ({URL, body}) => {
	return new Promise((resolve, reject) => {
		// CHECK FOR INTERNET CONNECT
	    Utils.isInternetConnected().then((isConnected) => {
    		// GET SESSION TOKEN
    		Storage._retrieveData(Constant.STORAGE.TOKEN).then(token => {
				// FETCH REQUEST
				fetch(URL, {
					method: 'POST', // or 'PUT'
			      	body: JSON.stringify({...body, token: token}),
					headers: {
				        'Cache-Control': 'no-cache'
				    }
				})
				.then((response) => response.json())
				.then((data) => {
					if (data.code === Constant.GENERIC.FAILED) {
						// ALERT POPUP
		        		Utils.alert('Failed', Utils.messageByKey(data), ['Ok'], [() => console.log('Cancel Pressed')], ['cancel']);
						reject(Utils.messageByKey(data));
					} else if (data.code === Constant.GENERIC.SESSION_EXPIRED) {
						// ALERT POPUP
		        		Utils.alert('Failed', Utils.messageByKey(data), ['Ok'], [() => console.log('Cancel Pressed')], ['cancel']);
						reject(Utils.messageByKey(data));
					} else {
						resolve(data);
					}
				}).catch((error) => {
					console.log(error);
					reject(error);
				});
			});
		});
	});	
};

/**
* Get API
*
* @input  String URL
* @return NA
*/
export const get = ({URL}) => {
	return new Promise((resolve, reject) => {
		// CHECK FOR INTERNET CONNECT
	    Utils.isInternetConnected().then((isConnected) => {
	    	// FETCH REQUEST
			fetch(URL, {
				headers: {
					'Cache-Control': 'no-cache'
				}
			})
			.then((response) => response.json())
			.then((data) => {
				// SAVE THE PROMISE RESOLVE
				resolve(data);
			}).catch((error) => {
				reject(error);
			});
		});
	});	
};