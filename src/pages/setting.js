/**
*
* setting.js
* Show screen when no result or empty result
*
* @author - Faizal
* @date   - 24 June 2020
*
***/
'use strict';
// REACT NATIVE IMPORT
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';
import {Icon} from 'react-native-elements';

// ALL PAGE FILES
import { MHeader  } from './layout/header';
import { Subheader  } from './layout/subheader';

// ALL COMPONENT
import { Loader  } from '../component/complex/loader';
import { Menu  } from '../component/complex/menu';

// ALL SERVICES
import * as API from '../service/api';

// ALL SHARED FILES
import { styles  } from '../shared/stylesheet';
import { Colors } from '../shared/colors';
import { Setting } from '../shared/setting';
import { URL } from '../shared/url';
import * as Data from '../shared/data';
import * as Utils from '../shared/utils';
import * as Constant from '../shared/constant';
import * as Storage from '../shared/storage';

export const SettingScreen = ({ navigation }) => {

	// DECLARE STATE VARIABLE
  	const [screenIsWaiting, setScreenIsWaiting] = useState(true);

  	// USE EFFECT ON LOAD PROCESS
	useEffect(() => {
		// HIDE WAITING SCREEN
		setScreenIsWaiting(false);
	    // UPDATE STATUS COLOR
	    StatusBar.setBarStyle('light-content');
	}, []);

	/**
	* Logout of the application
	*
	* @input  NA
	* @return NA
	*/
	const logout = () => {
		// SHOWING CONFIRM ALERT BEFORE PROCEEDING
		Utils.alert('Logout', 'Would you still want to logout?', ['Yes', 'Cancel'], 
		[() => {logoutProcess()}, () => console.log('Cancel Pressed')],
		['', 'cancel']);
	}
	/**
	* Logout server call
	*
	* @input  NA
	* @return NA
	*/
	const logoutProcess = () => {
		// SHOW LOADER TAG
	    setScreenIsWaiting(true);
	    // CLEAR MOBILE STORAGE
		Storage._clearAllStorage();
		// NAVIGATING TO LOGIN SCREEN
		navigation.navigate('Login');
		// HIDE LOADER TAG
      	setScreenIsWaiting(false);
	    // DO LOGOUT PROCESS FROM SERVER
	    /*API.get({URL: URL.LOGOUT}).then((data) => {
	    	// CHECKING WHETHER REQUEST IS SUCCESS
	    	if (data.code === Constant.GENERIC.SUCCESS) {
	    		// CLEAR MOBILE STORAGE
	    		Storage._clearAllStorage();
	    		// NAVIGATING TO LOGIN SCREEN
	    		navigation.navigate('Login')
	    	}
			// HIDE LOADER TAG
	      	setScreenIsWaiting(false);
	    }).catch((error) => {
	    	// HIDE LOADER AND PULL DOWN LOADER TAG
	        setScreenIsWaiting(false);
	    });*/
	}

	// RENDER HTML
	return (
		<>
      	<Loader show={screenIsWaiting} />
    	<SafeAreaView style={{...styles.safeViewContainer}} forceInset={Data.SafeAreaViewSetting}>
	        <MHeader title="Setting" icon="gear"/>
	        <Subheader title="All Setting Options"/>
	        <ScrollView style={[styles.body, styles.p0, styles.pt5]}>
		    	<TouchableOpacity style={styles.listType2Container} onPress={() => navigation.navigate('TermsnCondition')}>
		    		<View style={styles.listType2LeftIcon}>
		    			<Icon name={'flag'} color={Colors.secondary} size={Setting.moreIconSize} type="font-awesome"/>
		    		</View>
		    		<View style={styles.listType2Content}>
						<Text style={styles.listType2Title}>Terms of Service</Text>
						<Text style={styles.listType2Descr}>Check the latest Terms of Service.</Text>
		    		</View>
			        <View style={styles.listType2RightIcon}>
			          <Icon name="angle-right" color={Colors.grayLight} size={25} type="font-awesome"/>
			        </View>
		    	</TouchableOpacity>
		    	<TouchableOpacity style={styles.listType2Container} onPress={() => navigation.navigate('PrivacyPolicy')}>
		    		<View style={styles.listType2LeftIcon}>
		    			<Icon name={'file'} color={Colors.secondary} size={Setting.moreIconSize} type="font-awesome"/>
		    		</View>
		    		<View style={styles.listType2Content}>
						<Text style={styles.listType2Title}>Privacy Policy</Text>
						<Text style={styles.listType2Descr}>Check the latest Privacy Policy.</Text>
		    		</View>
			        <View style={styles.listType2RightIcon}>
			          <Icon name="angle-right" color={Colors.grayLight} size={25} type="font-awesome"/>
			        </View>
		    	</TouchableOpacity>
		    	<TouchableOpacity style={styles.listType2Container} onPress={() => navigation.navigate('Support')}>
		    		<View style={styles.listType2LeftIcon}>
		    			<Icon name={'question'} color={Colors.secondary} size={Setting.moreIconSize} type="font-awesome"/>
		    		</View>
		    		<View style={styles.listType2Content}>
						<Text style={styles.listType2Title}>Get Help</Text>
						<Text style={styles.listType2Descr}>Provide your feedback.</Text>
		    		</View>
			        <View style={styles.listType2RightIcon}>
			          <Icon name="angle-right" color={Colors.grayLight} size={25} type="font-awesome"/>
			        </View>
		    	</TouchableOpacity>
		    	<TouchableOpacity style={styles.listType2Container}>
		    		<View style={styles.listType2LeftIcon}>
		    			<Icon name={'barcode'} color={Colors.secondary} size={Setting.moreIconSize} type="font-awesome"/>
		    		</View>
		    		<View style={styles.listType2Content}>
						<Text style={styles.listType2Title}>Version 1.0 (202004)</Text>
						<Text style={styles.listType2Descr}>Latest version released on April, 2020.</Text>
		    		</View>
		    	</TouchableOpacity>
		    	<TouchableOpacity style={styles.listType2Container} onPress={logout}>
		    		<View style={styles.listType2LeftIcon}>
		    			<Icon name={'power-off'} color={Colors.secondary} size={30} type="font-awesome"/>
		    		</View>
		    		<View style={styles.listType2Content}>
						<Text style={styles.listType2Title}>Logout</Text>
						<Text style={styles.listType2Descr}>Would you like to leave?</Text>
		    		</View>
		    	</TouchableOpacity>
		    </ScrollView>
	        <Menu navigation={navigation} activeMenu={'MORE'}></Menu>
  		</SafeAreaView>
  	</>
  	);
} 
