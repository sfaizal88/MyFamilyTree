/**
*
* header.js
* Header of the Application
*
* @author - Faizal
* @date   - 20 April 2020
*
***/
'use strict';
// REACT NATIVE IMPORT
import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, ImageBackground, View} from 'react-native';

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';

export const MHeader = (props) => {
  	
  	// RENDER HTML
	return (
		<>
			<View style={[styles.headerContainer]}>
				<Text style={styles.headerTitle}>{props.title}</Text>
			</View>
      	</>
  	);
}