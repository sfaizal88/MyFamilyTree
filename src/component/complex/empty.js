/**
*
* empty.js
* Show screen when no result or empty result
*
* @author - Faizal
* @date   - 20 April 2020
*
***/
'use strict';
// REACT NATIVE IMPORT
import React from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';
import { Colors } from '../../shared/colors';

export const Empty = (props) => {
	// RENDER HTML
	return (
		<>
			<View style={styles.emptyContainer}>
    			<Icon name={props.icon} style={[styles.emptyIcon]} size={50} type="font-awesome" color={props.color ? props.color : ''}/>
    			<Text style={[styles.emptyTitle, {color: props.color ? props.color : ''}]}>{props.title}</Text>
    			<Text style={[styles.emptyDescr, {color: props.color ? props.color : ''}]}>{props.subtitle}</Text>
    		</View>
      	</>
  	);
} 
