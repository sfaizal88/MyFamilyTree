/**
*
* termsncondition.js
* Terms and Condition Screen
*
* @author - Faizal
* @date   - 24 April 2020
*
***/
// REACT NATIVE IMPORT
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Alert} from 'react-native';
import { Input, Button } from 'react-native-elements';

// ALL PAGE FILES
import { MHeader  } from '../layout/header';
import { Subheader  } from '../layout/subheader';

// ALL COMPONENT
import { Loader  } from '../../component/complex/loader';

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';

export const SupportScreen = ({ navigation }) => {

	// DECLARE STATE VARIABLE
	const [screenIsWaiting, setScreenIsWaiting] = useState(true);

  	// USE EFFECT ON LOAD PROCESS
	useEffect(() => {
		setScreenIsWaiting(false)
	}, []);

	return (
    <>
      	<Loader show={screenIsWaiting} />
    	<SafeAreaView style={styles.safeViewContainer}>
        	<Subheader title={'Customer Support'}/>
	        <ScrollView style={[styles.body, styles.p0]}>
	        	<View style={[styles.contentBody, styles.mt0]}>
	                <Text style={styles.contentBodyText}>{'\t'}OnMoney is a personal money management app. For further support or more infomation, feel free to contact us at help.onmoney@gmail.com.</Text>
	            </View>
	        </ScrollView>
  		</SafeAreaView>
  	</>
  );
} 