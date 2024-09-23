/**
*
* tree.js
* Show screen when no result or empty result
*
* @author - Faizal
* @date   - 24 June 2020
*
***/
'use strict';
// REACT NATIVE IMPORT
import React, {useState, useEffect} from 'react';
import {Text, View, SafeAreaView, ScrollView, TouchableOpacity, TouchableHighlight, StatusBar} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import {Icon} from 'react-native-elements';

// ALL COMPONENT
import { Loader  } from '../component/complex/loader';
import { MHeader  } from './layout/header';
import { Subheader  } from './layout/subheader';
import { Dropdown  } from '../component/complex/dropdown';
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
import { PopupDropdown  } from '../component/complex/popupDropDown';

export const TreeScreen = ({navigation}) => {

	// DECLARE STATE VARIABLE
	const [screenIsWaiting, setScreenIsWaiting] = useState(true);
    const [isFetching, setIsFetching]           = useState(false);
	let   [rootId, setRootId] = useState(1);
	let   [zoom, setZoom]     = useState(1.2);
	let   [member, setMember]     = useState([]);
	let   [memberUC, setMemberUC] = useState([]);
	let   [memberData, setMemberData] = useState([]);
	const [showTree, setShowTree]     = useState({});
	const [step, setStep]             = useState(1);
	const [showPopup, setShowPopup]   = useState(false);

	// LOCAL VARIABLE
	var result;
	var allTreeMember = {};

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
			getAllMainMember();
			getTree(rootId);
		    // UPDATE STATUS COLOR
		    StatusBar.setBarStyle('light-content');
	    }
	}, [isFocused]);


	const getParentTree = (rootId) => {
		// SHOW FETCH LOADER
		setScreenIsWaiting(true);
		// GET ALL PARENT DETAILS
	    API.post({URL: URL.GET_PARENT_ID, body: {"source_member_id": rootId}}).then((result) => {
	      	setScreenIsWaiting(false);
	      	/* SUCCESS CASE - SETTING UP THE FILE LIST IN THE SCOPE */
			if ( result.output[0] && result.output[0].source_member_id ) {
			  /* GET ALL MEMBERS */
			  getTree(result.output[0].source_member_id);
			} else {
			  Utils.alert('No data', "Selected Person doesn't have parent data.", ['Ok'], [() => console.log('Close pressed.')], ['cancel']);
			}
	    }).catch((error) => {
	      setScreenIsWaiting(false);
	    });
	};

	const refactor = (selectedIds, responseOutput) => {
		var total            = responseOutput.length;
		var refactoredOutput = [];
		var newSelectedIds   = [];
		while (selectedIds.length > 0) {
		  newSelectedIds = selectedIds;
		  selectedIds = [];
		  for (var i = 0; i < total; i++) {
		    if (newSelectedIds.indexOf(parseInt(responseOutput[i].source_member_id)) != -1) {
		        refactoredOutput.push(responseOutput[i]);
		        if (responseOutput[i].root_id > 0) {
		          selectedIds.push(parseInt(responseOutput[i].dest_member_id));
		        }
		    }
		  }
		}
		return refactoredOutput;
	}

	const getObject = (theObject, replaceObject) => {
		if(theObject instanceof Array) {
		  for(var i = 0; i < theObject.length; i++) {
		      result = getObject(theObject[i], replaceObject);
		  }
		}
		else
		{
		  for(var prop in theObject) {
		      if(prop == 'source_id') {
		          if(theObject[prop] == replaceObject["source_id"]) {
		              theObject["dest_1"] = replaceObject["dest_1"];
		              theObject["dest_id"] = replaceObject["dest_id"];
		              if (replaceObject["dest_2_id"]) {
		                theObject["dest_2"] = replaceObject["dest_2"];
		                theObject["dest_2_id"] = replaceObject["dest_2_id"];
		              }
		              theObject["relationship"] = replaceObject["relationship"];
		              theObject["products"] = replaceObject["products"];
		              replaceObject["found"] = true;
		              result = theObject;
		              break;
		          }
		      }
		      if(theObject[prop] instanceof Object || theObject[prop] instanceof Array)
		          result = getObject(theObject[prop], replaceObject);
		  }
		}
		return result;
	};

	/**
	* FUNCTION USED TO FETCH ALL THE MEMBERS
	* @INPUT - NA
	* @OUTPUT - NA
	*/
	const getAllMainMember = () => {
		// SHOW FETCH LOADER
		setScreenIsWaiting(true);
		// FECTHING ALL REPORT
		API.get({URL: URL.GET_ALL_MAIN_MEMBER}).then((result) => {
			// HIDE LOADER AND PULL DOWN LOADER TAG
			setScreenIsWaiting(false);
			/* SUCCESS CASE - SETTING UP THE FILE LIST IN THE SCOPE */
			let formattedMember = result.output.map(item => {
				allTreeMember = {...allTreeMember, ['SOURCE_' + item.member_id]: true};
				return {value: item.member_id, label: item.member};
			});
			setShowTree(allTreeMember);
			setMemberUC(result.output);
			setMember(formattedMember);
		}).catch((error) => {
		  // HIDE LOADER AND PULL DOWN LOADER TAG
		  setScreenIsWaiting(false);
		});
	};

	/**
	* FUNCTION USED TO FETCH ALL THE TREE
	* @INPUT - NA
	* @OUTPUT - NA
	*/
    const getTree = (rootId) => {
    	setRootId(rootId);
    	// SHOW FETCH LOADER
		setScreenIsWaiting(true);
        /* CALLING ADDDATA ACTION WITH DATA TO INSERT DATA INTO MONGODB */
        API.post({URL: URL.GET_TREE, body: {"source_member_id": rootId}}).then((result) => {
            rootId = parseInt(rootId);
            result.output = refactor([rootId], result.output);
            var x = {};
            var total = result.output.length;
            var i = 0;
            while(total > i) {
                var sHash = result.output[i].source_member_id.toString();
                if (typeof(x[sHash]) == "undefined") {
                    x[sHash] = [];
                }
                if ( result.output[i].root_id == 0) {
                    var family = {};
                    family["source_1"] = result.output[i].source_member_name;
                    family["source_id"] = result.output[i].source_member_id;
                    family["dest_1"] = result.output[i].dest_member_name;
                    family["dest_id"] = result.output[i].dest_member_id;
                    family["relationship"] = result.output[i].relationship;
                    family["products"] = (x[sHash].products) ? x[sHash].products : [];
                    x[sHash].push(family);
                } else {
                  var family = {};
                  family["source_1"] = result.output[i].dest_member_name;
                  family["source_id"] = result.output[i].dest_member_id;
                  if (x[sHash][0]) {
                    x[sHash][0].products.push(family);
                  }
                }
                i++;
            }

            /* FORMING ACTUAL JSON - STARTS */
            memberData   = JSON.parse(JSON.stringify(x[rootId]));
            var jsonData = [];
            for(let indexObj in x) {
				if ( x[indexObj].length > 1 ){
					x[indexObj][0]["dest_2"] = JSON.parse(JSON.stringify(x[indexObj][1]["dest_1"]));
					x[indexObj][0]["dest_2_id"] = JSON.parse(JSON.stringify(x[indexObj][1]["dest_id"]));
				}
              	jsonData.push(x[indexObj][0]);
            }
            if ( memberData.length > 1 ){
              memberData[0]["dest_2"] = JSON.parse(JSON.stringify(memberData[1]["dest_1"]));
              memberData[0]["dest_2_id"] = JSON.parse(JSON.stringify(memberData[1]["dest_id"]));
              memberData.splice(1, 1);
            }

            jsonData = jsonData.filter(function (obj) {
              return obj.source_id != rootId;
            });
            var groupData = JSON.parse(JSON.stringify(jsonData));
            while (groupData.length > 0) {
              for(let replaceObjectIndex in jsonData) {
                getObject(memberData, jsonData[replaceObjectIndex]);
                if (jsonData[replaceObjectIndex]["found"]) {
                  groupData = groupData.filter(function (obj) {
                    return obj["source_id"] != jsonData[replaceObjectIndex]["source_id"];
                  });
                  if (groupData.length == 0) {
                    break;
                  }
                }
              }
            }
            setMemberData(memberData);
	    	setScreenIsWaiting(false);
            /* FORMING ACTUAL JSON - ENDS */
        }).catch((error) => {
	    	setScreenIsWaiting(false);
	    });
    };

    const toggleTree = (sourceId) => {
    	let showHide = !showTree['SOURCE_' + sourceId];
    	showTree['SOURCE_' + sourceId] = showHide;
    	setShowTree({...showTree, ['SOURCE_' + sourceId]: showHide});
    }
    /**
    * RENDER ANOTHER FAMILY
    *
    * @input  NA
    * @return NA
    */
    const _renderFamily = (mData) => {
    	if (mData.products) {
	        return (
	          <View style={[styles.ulTag, styles.ulTagChild, {paddingBottom: 0}]}>
	          	{
	          		mData.products.map((item, index) => {
	          			return (
	            			<View style={[styles.liTag]}>
	            				<View style={[styles.parentChildConnector]}></View>
	            				<View style={[styles.removeParentChildEConnector, (mData.products.length === (index + 1)) ? '' : styles.displayN ]}></View>
	      						<View style={[styles.aContainer]}>
	      							<TouchableOpacity style={[styles.sourceContainer]} activeOpacity={1} underlayColor="transparent">
    									<Icon name={'camera'} color={Colors.source} size={20} type="font-awesome" iconStyle={[styles.mr10]}  onPress={() => showPhoto(item.source_id, item.source_1)}/>
				          				<Text style={[styles.sourceContainerLabel]} onPress={() => getParentTree(item.source_id)}>{item.source_1}</Text>
    									<TouchableOpacity onPress={() => toggleTree(item.source_id)} activeOpacity={1} underlayColor="transparent" style={[styles.minmaxContainer, item.products && item.products.length > 0 ? '' : styles.displayN]}>
											<Icon name={!showTree['SOURCE_' + item.source_id] ? 'minus' :'plus'} color={Colors.source} size={30} type="font-awesome" iconStyle={[styles.mr5]}/>
										</TouchableOpacity>
				          			</TouchableOpacity>
				          			<TouchableOpacity style={[styles.destContainer, item.dest_1 ? '' : styles.displayN]} activeOpacity={1} underlayColor="transparent">
    									<Icon name={'camera'} color={Colors.dest} size={20} type="font-awesome" iconStyle={[styles.mr10]}  onPress={() => showPhoto(item.dest_id, item.dest_1)}/>
				          				<Text style={[styles.destContainerLabel]} onPress={() => getParentTree(item.dest_id)}>{item.dest_1}</Text>
				          			</TouchableOpacity>
	      						</View>
	      						<View style={[showTree['SOURCE_' + item.source_id] ? styles.displayN : '']}>{_renderFamily(item)}</View>
			          		</View>
	          			)
	          		})
	        	}
	          </View>
	        );
	    }
    }

    const updateMainFamily = (value) => {
    	setRootId(value);
    	getTree(value);
    	setStep(2);
		// HIDE LOADER
		setScreenIsWaiting(false);
    }



	const reset = () => {
		setRootId(1);
    	setStep(1);
	}

	const showPhoto = (id, label) => {
		Utils.alert('No Photo', "Photo not available for " + label, ['Ok'], [() => console.log('Close pressed.')], ['cancel']);
	}

	// RENDER HTML
	return (
		<>
			<Loader show={screenIsWaiting} />
      		<SafeAreaView style={[styles.safeViewContainer, {backgroundColor: Colors.treeBG}]} forceInset={Data.SafeAreaViewSetting}>
            <MHeader title="Family Tree" icon="money"/>
          	<View style={[styles.body, styles.p0, {backgroundColor: Colors.treeBG}]}>
          		<View style={[styles.column, styles.pt20]}>
	          		<View style={[styles.flex1, styles.centerView, step === 1 ? '' : styles.displayN]}>
	          			<TouchableHighlight onPress={() => setShowPopup(true)} underlayColor="transparent">
		          			<View style={[{backgroundColor: Colors.primary, width: 200, height: 200, borderRadius: 200}, styles.centerView]}>
		          				<Icon name="user" color={Colors.white} type={'font-awesome'} size={100}/>
		          				<Text style={[{fontSize: 13, color: Colors.white, fontWeight: 'bold'}]}>SELECT MEMBER</Text>
		          			</View>
		          		</TouchableHighlight>
		          	</View>
		          	
		          	<View style={[styles.flex1, {padding: 15, paddingTop: 0}, step === 2 ? '' : styles.displayN]}>
			          	<TouchableHighlight onPress={() => reset()} underlayColor="transparent" style={[styles.centerView, {backgroundColor: Colors.primary, borderRadius: 100, padding: 15, position: 'absolute', top: 0, right: 15, zIndex: 2}]}>
	          				<Icon name="refresh" color={Colors.white} type={'font-awesome'} size={25}/>
	          			</TouchableHighlight>
		          		<ScrollView>
		          		<View style={[styles.ulTag]}>
		          		{
		          			memberData.map((item, index) => {
		          				return (
		          					<View style={[styles.liTag, styles.pl0]}>
		          						<View style={[styles.aContainer]}>
						          			<TouchableOpacity style={[styles.sourceContainer]} activeOpacity={1} underlayColor="transparent">
    											<Icon name={'camera'} color={Colors.source} size={20} type="font-awesome" iconStyle={[styles.mr10]} onPress={() => showPhoto(item.source_id, item.source_1)}/>
						          				<Text style={[styles.sourceContainerLabel]} onPress={() => getParentTree(item.source_id)}>{item.source_1}</Text>
    											<TouchableOpacity onPress={() => toggleTree(item.source_id)}  activeOpacity={1} underlayColor="transparent" style={[styles.minmaxContainer, item.products && item.products.length > 0 ? '' : styles.displayN]}>
    												<Icon name={showTree['SOURCE_' + item.source_id] ? 'minus' :'plus'} color={Colors.source} size={30} type="font-awesome" iconStyle={[styles.mr5]}/>
    											</TouchableOpacity>
						          			</TouchableOpacity>
						          			<TouchableOpacity style={[styles.destContainer, item.dest_1 ? '' : styles.displayN]} activeOpacity={1} underlayColor="transparent">
    											<Icon name={'camera'} color={Colors.dest} size={20} type="font-awesome" iconStyle={[styles.mr10]} onPress={() => showPhoto(item.dest_id, item.dest_1)}/>
						          				<Text style={[styles.destContainerLabel]} onPress={() => getParentTree(item.dest_id)}>{item.dest_1}</Text>
						          			</TouchableOpacity>
						          		</View>
						          		<View style={[showTree['SOURCE_' + item.source_id] ? '' : styles.displayN]}>{_renderFamily(item)}</View>
					          		</View>
		          				)
		          			})
		          		}
					    </View>
		          		</ScrollView>
					</View>

		        </View>
          	</View>
	        <Menu navigation={navigation} activeMenu={'TREE'}></Menu>
          	<PopupDropdown show={showPopup} option={member} selectedValue={updateMainFamily} toggleShowHide={setShowPopup}/>
          	</SafeAreaView>
      	</>
  	);
} 
