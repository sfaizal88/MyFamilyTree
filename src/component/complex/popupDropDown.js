
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
import { TextInput, Text, Modal, KeyboardAvoidingView, SafeAreaView, View, ScrollView, TouchableOpacity} from 'react-native';
import { Icon, Input } from 'react-native-elements';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';
import { Colors } from '../../shared/colors';
import * as Data from '../../shared/data';
 
export const PopupDropdown = (props) => {
    const [state, setState] = useState("");
    const [option, setOption] = useState(props.option);
    const [optionUC, setOptionUC] = useState(props.option);

    // USE EFFECT ON LOAD PROCESS
    useEffect(() => {
      setOption(props.option);
      setOptionUC(props.option);
      setState("");
    }, [props.option])

    const updateSearch = (value) => {
      console.log(value);
      setState(value);
      let filteredData = optionUC.filter(item => {
        return value === '' || (item.label && item.label.toLowerCase().indexOf(value.toLowerCase()) !== -1);
      });
      setOption(filteredData);
    }

    const close = () => {
      props.toggleShowHide(false);
      setState("");
    }

    const selectValue = (value) => {
      props.selectedValue(value);
      close();
    }

    return (
      <Modal animationType="slide" transparent={false} visible={props.show}>
        <SafeAreaView>
        <KeyboardAvoidingView style={[styles.modelCenteredView]} behavior={Platform.OS == "ios" ? "padding" : "height"}>
          <View style={[{flexDirection: 'row', alignItems: "flex-start"}]}>
          <Input placeholder='Search by Name' value={state}  name='username' onChangeText={(text) => updateSearch(text)}
              inputContainerStyle={styles.textfieldContainer} leftIcon={{ type: 'font-awesome', name: 'search', size: 20, color: Colors.secondary }} leftIconContainerStyle={styles.pl15}
              inputStyle={styles.textfield} containerStyle={[styles.inputContainer, {width: '90%'}]} errorMessage={''} errorStyle={styles.errorText}/>
            <Icon name="x" color={Colors.grayDarkest} containerStyle={[styles.modelClose, {alignSelf: 'flex-start'}]} size={40} type='octicon' onPress={() => close()} />
          
         </View>
          <ScrollView>
            {option.map((item, index) => {
              return (
                <TouchableOpacity onPress={() => selectValue(item.value)} activeOpacity={1} underlayColor="transparent" style={[{paddingTop: 15, paddingBottom: 15, paddingLeft: 15, backgroundColor:  index%2 === 0 ? Colors.borderColor : Colors.white}]}>
                  <Text style={[{color: Colors.grayDarkest, fontSize: RFValue(14)}]}>{item.label}</Text>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
        </KeyboardAvoidingView>
        </SafeAreaView>
      </Modal>
    );
};