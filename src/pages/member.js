/**
*
* member.js
* Show screen when no result or empty result
*
* @author - Faizal
* @date   - 24 June 2020
*
***/
'use strict';
// REACT NATIVE IMPORT
import React, {useState, useEffect} from 'react';
import { FlatList, RefreshControl, Text, View, SafeAreaView, TouchableHighlight, StatusBar} from 'react-native';
import { Icon } from 'react-native-elements';
import { useIsFocused } from '@react-navigation/native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

// ALL COMPONENT
import { Loader  } from '../component/complex/loader';
import { Empty  } from '../component/complex/empty';
import { MHeader  } from './layout/header';
import { Subheader  } from './layout/subheader';
import { SearchBar  } from '../component/complex/searchBar';
import { Menu  } from '../component/complex/menu';

// ALL SERVICES
import * as API from '../service/api';

// ALL SHARED FILES
import { styles  } from '../shared/stylesheet';
import { Colors } from '../shared/colors';
import * as Data from '../shared/data';
import * as Utils from '../shared/utils';
import { URL } from '../shared/url';

export const MemberScreen = ({navigation}) => {

	// DECLARE STATE VARIABLE
	const [screenIsWaiting, setScreenIsWaiting] = useState(true);
    const [isFetching, setIsFetching]           = useState(false);
	const [state, setState]                     = useState([]);
	const [stateUC, setStateUC]                 = useState([]);

	// THIS HOOK RETURNS `TRUE` IF THE SCREEN IS FOCUSED, `FALSE` OTHERWISE
	const isFocused = useIsFocused();

	// USE EFFECT ON LOAD PROCESS
	useEffect(() => {
		// HIDE LOADER
		setScreenIsWaiting(false)
	}, []);

	// USE EFFECT ON LOAD PROCESS
	useEffect(() => {
	    if (isFocused) {
			// HIDE LOADER
			setScreenIsWaiting(false);
			// GET ALL MEMBER
			getAllMember();
		    // UPDATE STATUS COLOR
		    StatusBar.setBarStyle('light-content');
	    }
	}, [isFocused]);

	/**
	* Get All Member
	*
	* @input  NA
	* @return NA
	*/
	const getAllMember = () => {
		// SHOW FETCH LOADER
		setIsFetching(true);
		// FECTHING ALL REPORT
		API.get({URL: URL.GET_ALL_MEMBER}).then((result) => {
			// HIDE LOADER AND PULL DOWN LOADER TAG
			setScreenIsWaiting(false);
			setIsFetching(false);
			// UPDATING DATA INTO STATE
			setState(result.output);
			setStateUC(result.output);
		}).catch((error) => {
		  // HIDE LOADER AND PULL DOWN LOADER TAG
		  setScreenIsWaiting(false);
		  setIsFetching(false);
		});
	};

	// RENDER HTML
	return (
		<>
			<Loader show={screenIsWaiting} />
      		<SafeAreaView style={[styles.safeViewContainer, {backgroundColor: Colors.memberBG}]} forceInset={Data.SafeAreaViewSetting}>
            <MHeader title="Family Members" icon="money"/>
          	<SearchBar placeholder={'Search by Name'} onSearch={setState} data={stateUC} searchByKey={'member'}/>
          	<View style={[styles.body, styles.p0, {backgroundColor: Colors.memberBG}]}>
          		<FlatList data={state}
                refreshControl={
                  <RefreshControl 
                  refreshing={isFetching} 
                  onRefresh={getAllMember} />
                }
                extraData={state}
                showsHorizontalScrollIndicator={true}
                renderItem = { ({item, index}) => (
                <TouchableHighlight underlayColor="transparent">
                  	<View style={[styles.listType3Container, index%2 === 0 ? styles.listType3ContainerAlter : '']} key={'SINGAPORE_REPORT_' + index}>
	                  	<View style={styles.listType3LeftIconContainer}>
	                    	<Icon iconStyle={styles.listType3LeftIcon} containerStyle={styles.listType3LeftIconBox} name="bullseye" size={22} type='font-awesome'></Icon>
	                  	</View>
                  		<View style={styles.listType3Content}>
		                    <View style={[styles.row]}>
		                      	<View style={[styles.flex5]}>
			                        <Text style={styles.listType3Title}>{item.member}</Text>
			                        <View style={[styles.rowAC, styles.selfS, styles.pt5]}>
			                        	<Text style={[styles.listType3Descr, item.father_of ? '' : styles.displayN]}>{item.gender === 'M' ? 'F/O' : 'M/O'} {item.father_of}</Text>
			                          	<Icon name="group" color={Colors.grayLight} type={'font-awesome'} size={16} iconStyle={[styles.pr5, item.father_of ? styles.pl15 : '', item.family_name === 'Unknown' ? styles.displayN : '']}/>
			                          	<Text style={[styles.listType3Descr, item.family_name === 'Unknown' ? styles.displayN : '']}>{item.family_name}</Text>
			                        </View>
		                      	</View>
		                      	<View style={[styles.flex1, styles.selfC, styles.alignE]}>
		                      		<Icon name="male" color={item.gender === 'M' ? Colors.male : Colors.female} type={'font-awesome'} size={RFValue(25)} iconStyle={styles.pr5}/>
		                      	</View>
		                    </View>
						</View>
                	</View>
                </TouchableHighlight>
                )}
                ListEmptyComponent = {() => (
                  <Empty icon={'group'} title='No Family member' subtitle='Create your family' color={Colors.white}/>
                )}
              keyExtractor = {(item, index) => 'sgReportIndex_' + index.toString()}/>
          	</View>
	        <Menu navigation={navigation} activeMenu={'MEMBER'}></Menu>
          	</SafeAreaView>
      	</>
  	);
} 
