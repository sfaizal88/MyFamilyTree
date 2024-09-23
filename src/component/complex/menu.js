/**
*
* menu.js
* Bottom menu
*
* @author - Faizal
* @date   - 4 May 2020
*
***/
'use strict';
// REACT NATIVE IMPORT
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';
import { Colors } from '../../shared/colors';
import * as Utils from '../../shared/utils';

export const Menu = ( props ) => {
  const {
    activeMenu = 'DASHBOARD'
  } = props;

  /**
  * Navigate between screen
  *
  * @input  Object - Single chapter details object
  * @return NA
  */
  const _navigate = (path) => {
    // NAVIGATING TO LESSON SCREEN WITH SINGAPORE CHAPTER OBJECT
    props.navigation.navigate(path);
  }

	// RENDER HTML
	return (
		<View style={[styles.menuContainer, props.menuContainerStyle]}>
  			<View style={styles.menus}>
          <TouchableOpacity style={[styles.flex1, styles.centerView]} onPress={() => _navigate('DashBoard')}>
            <Icon name="home" color={activeMenu === 'DASHBOARD' ? Colors.greenBlue : Colors.grayDark} size={RFValue(24)} type='octicon'/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flex1, styles.centerView]} onPress={() => _navigate('Member')}>
            <Icon name="smiley" color={activeMenu === 'MEMBER' ? Colors.greenBlue : Colors.grayDark} size={RFValue(24)} type='octicon'/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flex1, styles.centerView]} onPress={() => _navigate('Tree')}>
            <Icon name="repo-forked" color={activeMenu === 'TREE' ? Colors.greenBlue : Colors.grayDark} size={RFValue(24)} type='octicon'/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flex1, styles.centerView]} onPress={() => _navigate('Connect')}>
            <Icon name="light-bulb" color={activeMenu === 'CONNECT' ? Colors.greenBlue : Colors.grayDark} size={RFValue(24)} type='octicon'/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flex1, styles.centerView]} onPress={() => _navigate('More')}>
            <Icon name="more" color={activeMenu === 'MORE' ? Colors.greenBlue : Colors.grayDark} size={RFValue(24)}/>
          </TouchableOpacity>
        </View>
  	</View>
  );
} 
