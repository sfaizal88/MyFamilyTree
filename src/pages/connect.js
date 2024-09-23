/**
*
* connect.js
* Show screen when no result or empty result
*
* @author - Faizal
* @date   - 24 June 2020
*
***/
'use strict';
// REACT NATIVE IMPORT
import React, {useState, useEffect} from 'react';
import {Text, View, SafeAreaView, TouchableHighlight, ScrollView, FlatList, StatusBar} from 'react-native';
import { Icon } from 'react-native-elements';
import { useIsFocused } from '@react-navigation/native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

// ALL COMPONENT
import { Loader  } from '../component/complex/loader';
import { Empty  } from '../component/complex/empty';
import { MHeader  } from './layout/header';
import { Subheader  } from './layout/subheader';
import { Dropdown  } from '../component/complex/dropdown';
import { PopupDropdown  } from '../component/complex/popupDropDown';
import { Menu  } from '../component/complex/menu';

// ALL SERVICES
import * as API from '../service/api';

// ALL SHARED FILES
import { styles  } from '../shared/stylesheet';
import { Colors } from '../shared/colors';
import * as Data from '../shared/data';
import * as Utils from '../shared/utils';
import { URL } from '../shared/url';

export const ConnectScreen = ({navigation}) => {

	// DECLARE STATE VARIABLE
	const [screenIsWaiting, setScreenIsWaiting] = useState(true);
    const [isFetching, setIsFetching]           = useState(false);
	const [member, setMember]                   = useState([]);
	const [memberUC, setMemberUC]               = useState([]);
	const [linkConnection, setLinkConnection]   = useState([]);
	const [memberLeft, setMemberLeft]           = useState("");
	const [memberRight, setMemberRight]         = useState("");
	const [graphData, setGraphData]             = useState({});
	const [showConnect, setShowConnect]         = useState(false);
	const [showPopupLeft, setShowPopupLeft]     = useState(false);
	const [showPopupRight, setShowPopupRight]   = useState(false);
	const [step, setStep]                       = useState(1);

	// LOCAL VARIABLE
	 let graph_data = {};

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
		setShowConnect(false);
		// FETCH DATA
		getAllMember();
		getAllRelationship();
		setStep(1);
	    // UPDATE STATUS COLOR
	    StatusBar.setBarStyle('light-content');
    }
	}, [isFocused]);

	/**
	* FUNCTION USED TO FETCH ALL THE MEMBERS
	* @INPUT - NA
	* @OUTPUT - NA
	*/
	const getAllMember = () => {
		// SHOW FETCH LOADER
		setIsFetching(true);
		/* CALLING /GETALLFILES FUNCTION TO FETCH ALL THE MEMBERS */
		API.get({URL: URL.GET_ALL_MEMBER}).then((result) => {
			// HIDE LOADER AND PULL DOWN LOADER TAG
			setScreenIsWaiting(false);
			setIsFetching(false);
			// UPDATING DATA INTO STATE
			let formattedMember = result.output.map(item => {
				return {value: item.member_id, label: item.member};
			});
			setMemberUC(result.output);
			setMember(formattedMember);
		}).catch((error) => {
		  // HIDE LOADER AND PULL DOWN LOADER TAG
		  setScreenIsWaiting(false);
		  setIsFetching(false);
		});
	};

	const getMemberDetailsById = (memberId) => {
		if (memberId) {
			let memberDetails = memberUC.filter(item => {
				return memberId == item.member_id;
			});
			return memberDetails ? memberDetails[0] : {};
		} else {
			return {member: ''}
		}
	}

	/**
	* FUNCTION USED TO FETCH ALL THE RELATIONSHIP
	* @INPUT - NA
	* @OUTPUT - NA
	*/
	const getAllRelationship = () => {
		// SHOW FETCH LOADER
		setIsFetching(true);
		/* CALLING /GETALLFILES FUNCTION TO FETCH ALL THE MEMBERS */
		API.get({URL: URL.GET_ALL_RELATIONSHIP}).then((result) => {
			// HIDE LOADER AND PULL DOWN LOADER TAG
			setScreenIsWaiting(false);
			setIsFetching(false);
			// CREATING THE GRAPH
			createGraph(result.output);
		}).catch((error) => {
		  // HIDE LOADER AND PULL DOWN LOADER TAG
		  setScreenIsWaiting(false);
		  setIsFetching(false);
		});
	};

	const createGraph = (data) => {
		data.forEach(function (item) {
		    addEdges(item.source_member_id, item.dest_member_id);
		    addEdges(item.dest_member_id, item.source_member_id);
		});
		setGraphData(graph_data);
	};

	const addEdges = (node, edge) => {
		if (graph_data[node] && graph_data[node].indexOf(edge) === -1) {
		  graph_data[node].push(edge);
		} else {
		  graph_data[node] = [edge];
		}
	}

	const shortestPath = function(graph, source, target) {
        if (source == target) {   // Delete these four lines if
          console.log(source);          // you want to look for a cycle
          return;                 // when the source is equal to
        }                         // the target.
        var queue = [ source ],
            visited = { source: true },
            predecessor = {},
            tail = 0;
        while (tail < queue.length) {
          var u = queue[tail++],  // Pop a vertex off the queue.
              neighbors = graph[u];
          for (var i = 0; i < neighbors.length; ++i) {
            var v = neighbors[i];
            if (visited[v]) {
              continue;
            }
            visited[v] = true;
            if (v === target) {   // Check if the path is complete.
              var path = [ v ];   // If so, backtrack through the path.
              while (u !== source) {
                path.push(u);
                u = predecessor[u];          
              }
              path.push(u);
              path.reverse();
              console.log('Path: ' + JSON.stringify(path));
              setShowConnect(true);
              setLinkConnection(path);
              return;
            }
            predecessor[v] = u;
            queue.push(v);
          }
        }
        setLinkConnection([]);
        console.log('there is no path from ' + source + ' to ' + target);
      }

	const findLink = (source, target) => {
		shortestPath(graphData, source, target);
	};

	const updateLeftValue = (value) => {
		setMemberLeft(value);
		setStep(2);
	};

	const updateRightValue = (value) => {
		setMemberRight(value);
		setStep(3);
		findLink(memberLeft, value);
		setShowConnect(!showConnect);
	}

	const reset = () => {
		setMemberRight('');
		setMemberLeft('');
		setStep(1);
		setShowConnect(!showConnect);
        setLinkConnection([]);
	}

	// RENDER HTML
	return (
		<>
			<Loader show={screenIsWaiting} />
      		<SafeAreaView style={[styles.safeViewContainer, {backgroundColor: Colors.connectBG}]} forceInset={Data.SafeAreaViewSetting}>
            <MHeader title="Connect" icon="money"/>
          	<View style={[styles.body, styles.centerView, styles.connectContainer, {backgroundColor: Colors.connectBG}]}>
          		<TouchableHighlight onPress={() => setShowPopupLeft(true)} underlayColor="transparent" style={[ step === 1 ? '' : styles.displayN]}>
          			<View style={[{backgroundColor: Colors.primary, width: 200, height: 200, borderRadius: 200}, styles.centerView]}>
          				<Icon name="user" color={Colors.white} type={'font-awesome'} size={100}/>
          				<Text style={[{fontSize: 13, color: Colors.white, fontWeight: 'bold'}]}>SELECT FIRST USER</Text>
          			</View>
          		</TouchableHighlight>
          		<TouchableHighlight onPress={() => setShowPopupRight(true)} underlayColor="transparent" style={[ step === 2 ? '' : styles.displayN]}>
          			<View style={[{backgroundColor: Colors.primary, width: 200, height: 200, borderRadius: 200}, styles.centerView]}>
          				<Icon name="user" color={Colors.white} type={'font-awesome'} size={100}/>
          				<Text style={[{fontSize: 13, color: Colors.white, fontWeight: 'bold'}]}>SELECT SECOND USER</Text>
          			</View>
          		</TouchableHighlight>
          		<View style={[step === 3 ? '' : styles.displayN, styles.centerView, styles.row]}>
          			<TouchableHighlight onPress={() => reset()} underlayColor="transparent" style={[styles.centerView, {backgroundColor: Colors.primary, borderRadius: 100, padding: 15, position: 'absolute', top: 0, right: 15, zIndex: 2}]}>
          				<Icon name="refresh" color={Colors.white} type={'font-awesome'} size={25}/>
          			</TouchableHighlight>
	          		<FlatList data={linkConnection}
	                	extraData={showConnect}
	                	showsHorizontalScrollIndicator={false}
	                	renderItem = { ({item, index}) => (
	                		<>
			                <TouchableHighlight underlayColor="transparent" key={'CONNECT_INDEX_TAG_' + index}>
			                  	<View style={{backgroundColor: '#34495e', padding: 10, margin: 10, borderRadius: 5}}>
			                  		<Text style={[{color: Colors.white, fontSize: 17, fontWeight: '600', textAlign: 'center'}]}>{getMemberDetailsById(item).member}</Text>
			                  	</View>
			                </TouchableHighlight>
			                <Icon name="arrow-down" color={Colors.primary} type={'font-awesome'} size={RFValue(25)} iconStyle={[styles.pr5, linkConnection.length === (index + 1) ? styles.displayN : '']}/>
			                </>
	                	)}
		                ListEmptyComponent = {() => (
		                	<>	
		                		<TouchableHighlight underlayColor="transparent" key={'CONNECT_INDEX_TAG_LEFT'}>
				                  	<View style={{backgroundColor: '#34495e', padding: 10, margin: 10, borderRadius: 5}}>
				                  		<Text style={[{color: Colors.white, fontSize: 17, fontWeight: '600', textAlign: 'center'}]}>{getMemberDetailsById(memberLeft).member}</Text>
				                  	</View>
			                	</TouchableHighlight>
			                	<Icon name="remove" color={Colors.red} type={'font-awesome'} size={RFValue(25)} iconStyle={[styles.pr5]}/>
			                	<TouchableHighlight underlayColor="transparent" key={'CONNECT_INDEX_TAG_RIGHT'}>
				                  	<View style={{backgroundColor: '#34495e', padding: 10, margin: 10, borderRadius: 5}}>
				                  		<Text style={[{color: Colors.white, fontSize: 17, fontWeight: '600', textAlign: 'center'}]}>{getMemberDetailsById(memberRight).member}</Text>
				                  	</View>
			                	</TouchableHighlight>
		                	</>
		                )}
	              	keyExtractor = {(item, index) => 'connectIndex_' + index.toString()}/>
	            </View>
          		<PopupDropdown show={showPopupLeft} option={member} selectedValue={updateLeftValue} toggleShowHide={setShowPopupLeft}/>
          		<PopupDropdown show={showPopupRight} option={member} selectedValue={updateRightValue} toggleShowHide={setShowPopupRight}/>
          	</View>
	        <Menu navigation={navigation} activeMenu={'CONNECT'}></Menu>
          	</SafeAreaView>
      	</>
  	);
} 
