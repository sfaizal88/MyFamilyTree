
// REACT NATIVE IMPORT
/**
*
* dropDown.js
* Dropdonw component
*
* @author - Faizal
* @date   - 23 April 2020
*
***/
import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Icon } from 'react-native-elements';

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';
import { Colors } from '../../shared/colors';
 
export const Dropdown = (props) => {
    const {
        data,
        selectedValue,
        onChange,
        placeholder,
        name,
        label,
        labelStyle,
        style = {},
        iconStyle = {},
        disabled = false
    } = props
    return (
        <>
        <Text style={labelStyle}>{label}</Text>
        <RNPickerSelect
            placeholder={{label: placeholder, value: ''}}
            onValueChange={(value) => onChange(value, name)}
            value={selectedValue}
            disabled={disabled}
            style={{
                inputAndroid: {...styles.selectfield, ...style},
                inputIOS: {...styles.selectfield, ...style},
                iconContainer: {...styles.selectFieldIcon, ...iconStyle}
            }}
            items={data}
            Icon={() => {
                return <Icon 
                name="chevron-down" 
                color={Colors.grayDark} 
                size={20} 
                underlayColor="transparent"
                type="octicon"/>
            }}
        />
        </>
    );
};