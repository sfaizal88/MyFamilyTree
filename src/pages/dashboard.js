/**
*
* dashboard.js
* Show screen when no result or empty result
*
* @author - Faizal
* @date   - 24 June 2020
*
***/
'use strict';
// REACT NATIVE IMPORT
import React, {useState, useEffect} from 'react';
import {Text, View, SafeAreaView, StatusBar} from 'react-native';
import { useIsFocused } from '@react-navigation/native';

// ALL COMPONENT
import { Loader  } from '../component/complex/loader';
import { PieChartSVG  } from '../component/complex/pieChart';
import { MHeader  } from './layout/header';
import { Subheader  } from './layout/subheader';
import { Menu  } from '../component/complex/menu';

// ALL SERVICES
import * as API from '../service/api';

// ALL SHARED FILES
import { styles  } from '../shared/stylesheet';
import { Colors } from '../shared/colors';
import * as Data from '../shared/data';
import * as Utils from '../shared/utils';
import { URL } from '../shared/url';
import * as Constant from '../shared/constant';

export const DashBoardScreen = ({navigation}) => {

	// DECLARE STATE VARIABLE
	const [screenIsWaiting, setScreenIsWaiting] = useState(false);
    const [isFetching, setIsFetching]           = useState(false);
    const [gender, setGender]                   = useState([0, 0]);

	// THIS HOOK RETURNS `TRUE` IF THE SCREEN IS FOCUSED, `FALSE` OTHERWISE
	const isFocused = useIsFocused();

	// USE EFFECT ON LOAD PROCESS
	useEffect(() => {
		// HIDE LOADER
		setScreenIsWaiting(false);
	    // UPDATE STATUS COLOR
	    StatusBar.setBarStyle('light-content');

	}, []);

	// USE EFFECT ON LOAD PROCESS
	useEffect(() => {
    if (isFocused) {
		// HIDE LOADER
		setScreenIsWaiting(false);
		getAllData();
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
	const getAllData = () => {
		console.log('Load dashboard data.')
		// SHOW FETCH LOADER
		setIsFetching(true);
		// FECTHING ALL REPORT
		API.get({URL: URL.GET_DASHBOARD_DETAILS}).then((result) => {
			// HIDE LOADER AND PULL DOWN LOADER TAG
			setScreenIsWaiting(false);
			setIsFetching(false);
			// UPDATING DATA INTO STATE
			let totalMale = result.output.filter(item => {
				return item.gender === Constant.GENERIC.MALE
			});
			let totalFemale = result.output.filter(item => {
				return item.gender === Constant.GENERIC.FEMALE
			});
			setGender([totalMale.length, totalFemale.length]);
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
      		<SafeAreaView style={[styles.safeViewContainer, {backgroundColor: Colors.dashboardBG}]} forceInset={Data.SafeAreaViewSetting}>
            <MHeader title="Welcome to My Family" icon="money"/>
          	<View style={[styles.body, styles.p0, styles.centerView, {backgroundColor: Colors.dashboardBG}]}>
          		<View style={[{paddingBottom: 30, paddingHorizontal: 20, top: -40}]}>
          			<View style={[{paddingBottom: 40}]}>
          				<Text style={[{fontSize: 26, fontWeight: '400', color: Colors.white, textAlign: 'center', fontWeight: 'bold'}]}>GENDER</Text>
          			</View>
          			<PieChartSVG data={gender}/>
          			<View style={[{marginTop: 50, width: '100%'}, styles.rowDirection]}>
          				<View style={[styles.rowAC, styles.centerView]}>
          					<View style={[{backgroundColor: Colors.male, marginHorizontal: 10, width: 20, height: 20}]}></View>
          					<Text style={[{fontSize: 16, fontWeight: '400', color: Colors.white}]}>Male ({gender[0]})</Text>
          				</View>
          				<View style={[styles.rowAC, styles.centerView]}>
          					<View style={[{backgroundColor: Colors.female, marginHorizontal: 10, width: 20, height: 20}]}></View>
          					<Text style={[{fontSize: 16, fontWeight: '400', color: Colors.white}]}>Female ({gender[0]})</Text>
          				</View>
          			</View>
          		</View>
          	</View>
	        <Menu navigation={navigation} activeMenu={'DASHBOARD'}></Menu>
          	</SafeAreaView>
      	</>
  	);
} 
