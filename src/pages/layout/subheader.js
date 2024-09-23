/**
*
* subheader.js
* SubHeader of the Application
*
* @author - Faizal
* @date   - 20 April 2020
*
***/
'use strict';
// REACT NATIVE IMPORT
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';

export const Subheader = (props) => {

  	// RENDER HTML
	return (
		<>
	  		<View style={[styles.subheaderContainer, styles.rowDirection, styles.centerView]}>
	  			<View style={styles.flex2}>
	    			<Text style={styles.subheaderTitle}>{props.title}</Text>
	    		</View>
	    		<View style={styles.flex1}>
	    			<Text style={[styles.subheaderTitle, styles.selfE]}>{props.rightTitle}</Text>
	    		</View>
	  		</View>
      	</>
  	);
} 
