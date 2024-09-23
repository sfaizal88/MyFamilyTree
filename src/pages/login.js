/**
*
* login.js
* Login user
*
* @author - Faizal
* @date   - 21 April 2020
*
***/
// REACT NATIVE IMPORT
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, KeyboardAvoidingView, Platform, StatusBar} from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useIsFocused } from '@react-navigation/native';

// ALL COMPONENT
import { Loader  } from '../component/complex/loader';

// ALL IMAGES
import LoginIcon from '../../assets/img/login.png';

// ALL SERVICES
import * as API from '../service/api';

// ALL SHARED FILES
import { styles  } from '../shared/stylesheet';
import { Setting  } from '../shared/setting';
import { Colors } from '../shared/colors';
import { URL } from '../shared/url';
import * as DFormat from '../shared/dformat';
import * as Data from '../shared/data';
import * as Utils from '../shared/utils';
import * as Constant from '../shared/constant';
import * as Storage from '../shared/storage';

export const LoginScreen = ({ navigation }) => {

	// DECLARE STATE VARIABLE
  	const [state, setState] = useState(DFormat.loginObject);
	const [screenIsWaiting, setScreenIsWaiting] = useState(true);

	// THIS HOOK RETURNS `TRUE` IF THE SCREEN IS FOCUSED, `FALSE` OTHERWISE
	const isFocused = useIsFocused();

  	// USE EFFECT ON LOAD PROCESS
	useEffect(() => {
      // UPDATE STATUS COLOR
      StatusBar.setBarStyle('dark-content');
	}, []);

  	// USE EFFECT ON LOAD PROCESS
	useEffect(() => {
		// RESET FORM
		setState(DFormat.loginObject);
		// HIDE LOADER
		setScreenIsWaiting(false);
	}, []);


	/**
	* Update state value
	*
	* @input  String value
	* @return String field name
	*/
	const updateState = (text, name) => {
		setState({...state, [name]: text});
	};

	/**
	* Feature used to submit payment form
	*
	* @input  NA
	* @return NA
	*/
	const submitForm = () => {
		setScreenIsWaiting(true);
		// LOGIN PROCESS
	    API.post({URL: URL.LOGIN, body: state}).then((result) => {
	    	// HIDE LOADER AND PULL DOWN LOADER TAG
	        setScreenIsWaiting(false);
	        // CHECK WHETHER SUCCESS
	        if (result.code === Constant.GENERIC.SUCCESS) {
	        	// RESET THE FORM
	        	resetForm();
	        	console.log('Output: ' + result.output.name);
				// SAVING THE VALUE IN MOBILE STORAGE 
				Storage._storeData(Constant.STORAGE.USER_OBJECT, JSON.stringify(result.output));
				Storage._storeData(Constant.STORAGE.IS_LOGGED, result.output.name);
				Storage._storeData(Constant.STORAGE.TOKEN, result.output.token);
				// NAVIGATE TO HOME PAGE
				navigation.navigate('DashBoard');
	        }
	    }).catch((error) => {
	    	// HIDE LOADER AND PULL DOWN LOADER TAG
	        setScreenIsWaiting(false);
	    });
	}

	/**
	* Reset all From field
	*
	* @input  NA
	* @return NA
	*/
	const resetForm = () => {
	  // INITIATE OBJECT
	  setState(DFormat.loginObject);
	};

	/**
	* Register Popup
	*
	* @input  NA
	* @return NA
	*/
	const registerForm = () => {
	  	// ALERT POPUP
		Utils.alert('Register', 'Would you like to Register? Please send email with subject "Register" to iwaymen.support@gmail.com for registration with your full name and contact details. We will contact you shortly.', ['Ok'], 
		[() => console.log('Regsiter Process.')], ['cancel']);
	};

	

	return (
    <>
      	<Loader show={screenIsWaiting} />
      	<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={[styles.container, styles.centerContainer]}>
	        <View style={[styles.body, styles.loginContainer]}>
	        <Image source={LoginIcon} style={{...styles.lIcon, ...styles.mb40, alignSelf: 'flex-start', ...styles.ml10}}/>
	        <Text style={[styles.lHeader, styles.mb15, styles.pl10]}>Hello there!</Text>
	        <Text style={[styles.mHeader, styles.pl10]}>Welcome</Text>
	        <Text style={[styles.desc, styles.mb15, styles.pl10]}>Signin to continue with your login credentials.</Text>
	        
          	<Input placeholder='Username' value={state.username}  name='username' onChangeText={(text) => updateState(text, 'username')}
              inputContainerStyle={styles.textfieldContainer} leftIcon={{ type: 'font-awesome', name: 'envelope', size: 20, color: Colors.secondary }} leftIconContainerStyle={styles.pl15}
              inputStyle={styles.textfield} containerStyle={[styles.inputContainer]} errorMessage={''} errorStyle={styles.errorText}/>
            <Input  placeholder='Password' secureTextEntry={true} value={state.pwd}  name='pwd' onChangeText={(text) => updateState(text, 'pwd')}
              inputContainerStyle={styles.textfieldContainer} leftIcon={{ type: 'font-awesome', name: 'lock', size: 20, color: Colors.secondary }}  leftIconContainerStyle={styles.pl15}
              inputStyle={styles.textfield} containerStyle={styles.inputContainer} errorMessage={''} errorStyle={styles.errorText}/>
            <Button onPress={submitForm} title="Login" buttonStyle={styles.primaryBtnInput} titleStyle={styles.btnLabel}/>
            <Text style={styles.poweredBy}>Powered by iWaymen. <Text style={styles.link} onPress={registerForm}>Register here.</Text></Text>
		    </View>
  		</KeyboardAvoidingView>
  	</>
  );
}