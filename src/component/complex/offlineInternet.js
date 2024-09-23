/**
*
* offlineInternet.js
* Show Offline Internet connection
*
* @author - Faizal
* @date   - 15 April 2020
*
***/
'use strict';
// REACT NATIVE IMPORT
import React, {useEffect, useState} from 'react';
import {Text, View, StatusBar, AppState} from 'react-native';
import NetInfo from "@react-native-community/netinfo";

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';
import { Colors } from '../../shared/colors';
import * as Constant from '../../shared/constant';
import * as Storage from '../../shared/storage';
import * as Utils from '../../shared/utils';
import * as API from '../../service/api';
import { URL } from '../../shared/url';
import * as DFormat from '../../shared/dformat';

export const OfflineInternet = (props) => {
	
  	// DECLARE STATE VARIABLE
  	const [isConnected, setIsConnected] = useState(true);
  	const [appState, setAppState]       = useState(AppState.currentState);


	// INTERNET CONNECTION ONLINE / OFFLINE
	useEffect(() => {
		subscribeNetworkConnection();
	});

	useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);
    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
	}, []);

	const _handleAppStateChange = nextAppState => {
		if (appState.match(/inactive|background/) && nextAppState === "active") {
		  	console.log("App has come to the foreground!");
		}
		console.log('App status - ' + nextAppState);
		// WHEN THE APP IS CLOSED AND OPENED
		if (Constant.GENERIC.APP_CLOSED === nextAppState) {
			// CLEAR MOBILE STORAGE - REMOVED AS WE MOVING TO OFFLINE DATA
	    	//Storage._clearAllStorage();
	    	/*console.log('My App turned off and turned on now');
			// GETTING THE SESSION KEY TO CHECK THE STATUS
			Storage._retrieveData(Constant.STORAGE.USER_OBJECT).then(item => {
				console.log('After turned on. User object - ' + item);
				// PARSING THE OBJECT
				let user_object = (Utils.isNotEmpty(item)) ? JSON.parse(item) : '';
				//CHECK THE SESSION KEY IS NOT EMPTY
				// BEFORE CALLING VERIFY API TO RESET THE LOGIN DETAILS
				if (user_object && Utils.isNotEmpty(user_object.token)) {
					console.log('After turned on. Token is not empty - ' + user_object.token);
					// CHANGE PASSWORD PROCESS
				    API.post({URL: URL.VERIFY_TOKEN, body: user_object}).then((result) => {
						console.log('Successfully user active and Token didnt expired');
				    })
				}
			});*/
		}
		setAppState(nextAppState);
	};
	
	/**
	* Network connection check
	*
	* @input  NA
	* @return NA
	*/
	const subscribeNetworkConnection = () => {
		// CHECK NETWORK CONNECTION ONCE
		NetInfo.fetch().then(state => {
			// UPDATING THE NETWORK STATUS
			setIsConnected(state.isConnected);
		});	
		// CHECK NETWORK CONNECTION USING LISTENER 
		NetInfo.addEventListener(state => {
			// UPDATING THE NETWORK STATUS
			setIsConnected(state.isConnected);
		});
	}

	// RENDER HTML
	return (
		<>
		<StatusBar barStyle={'light-content'}/>
		<View style={[styles.offlineBox, isConnected ? styles.displayN : '']}>
        	<Text style={styles.offlineBoxText}>No Internet Connection</Text>
      	</View>
      	</>
  	);
} 
