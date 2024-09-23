/**
*
* stylesheet.js
* Declare all style details.
*
* @author - Faizal
* @date   - 24 June 2020
*
***/
// REACT NATIVE IMPORT
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

// ALL SHARED FILES
import { Colors } from './colors';
import { Setting } from './setting';
import  * as Utils from './utils';

/* LAYOUT - STARTS */
const layoutStyle ={
	container: {
    	flex: 1,
    	backgroundColor: Colors.white
	},
	safeViewContainer: {
    	flex: 1,
    	backgroundColor: Colors.primary
	},
	body: {
		flex: 1,
		backgroundColor: Colors.white,
		paddingTop: 20,
		paddingBottom: 20,
		paddingHorizontal: 5,
        flexDirection: 'column',
	},
	safeViewAvoid: {
		backgroundColor: Colors.white,
	},
	headerContainer: {
	    height: 'auto',
	    paddingBottom: 10,
	    shadowColor: 'transparent',
	    paddingTop: 10,
	    paddingHorizontal: 15,
	    //backgroundColor: Colors.primary, 
		alignItems: 'flex-start'
	},
	headerTitle: {
		/*fontSize: Setting.h5TextSize,
		fontWeight: '600',
		textAlign: 'center',
		color: Colors.white,*/


        fontSize: 42,
        fontWeight: '700',
        color: Colors.white,
		alignSelf: 'center',
		//top: -50,
		textAlign: 'center',
		shadowOffset:{  width: 1,  height: 1  },
		shadowColor: Colors.grayDarkest,
		shadowOpacity: 0.5,
		marginTop: 20
	},
	subheaderContainer: {
		backgroundColor: Colors.subheaderBg,
		height: 25,
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingHorizontal: 5
	},
	subheaderTitle: {
		color: Colors.subheaderBgTitle,
		fontSize: Setting.sxTextSize,
		fontWeight: 'bold',
		paddingHorizontal: 7,
		textTransform: 'uppercase',
		//letterSpacing: 1,
		fontWeight: '600'
	},
	centerContainer: {
		flex: 1,
		flexDirection: 'row', 
		alignItems: 'center'
	}
}
/* LAYOUT - ENDS */
/* NAVIGATION BAR - STARTS */
const navBarStyle ={
 	mainNavBar: {
 		backgroundColor: Colors.white, 
 		paddingBottom: 0, 
 		//marginBottom: -25,
 		height: 'auto', 
 		paddingTop: 0, 
 		justifyContent: 'center',
 		borderTopColor: Colors.borderColor,
 		borderTopWidth: 1
 	},
 	mainNavBarText: {
 		fontSize: Setting.usTextSize,
 		fontWeight: '600'
 	},
 	topTabContainer: {
 		backgroundColor: Colors.primary,
 		borderBottomColor: Colors.primary,
 		borderBottomWidth: 1
 	},
 	topTabLabel: {
 		fontSize: 12,
 		fontWeight: '500',
 		padding: 0,
 	},
 	topTab: {
 		paddingTop: 0,
 		width: 'auto',
 		height: 45
 	},
 	topTabIndicator: {
 		backgroundColor: Colors.white
 	},
}
/* NAVIGATION BAR - ENDS */
/* ERROR - STARTS */
const errorStyle = {
	emptyContainer: {
		flex: 1,
		flexDirection: 'column',
		paddingTop: '48%',
		paddingHorizontal: 30,
		alignItems: "center",
		justifyContent: "center"
	},
	emptyTitle: {
		color: Colors.grayLight,
		fontSize: Setting.h5TextSize,
		alignSelf: 'center',
		marginTop: 5,
		marginBottom: 5
	},
	emptyDescr: {
		color: Colors.grayLight,
		fontSize: Setting.TextSize,
		alignSelf: 'center'

	},
	emptyIcon: {
		color: Colors.grayLight

	},
}
/* ERROR - ENDS */
/* FORM FIELDS - STARTS */
 const formFieldStyle = {
 	searchContainer: {
 		flexDirection: 'row',
 		backgroundColor: Colors.white,
		shadowOffset:{  width: -0.5,  height: 0.5  },
		shadowColor: Colors.grayLight,
		shadowOpacity: 0.5,
		marginTop: 10,
		marginBottom: 10,
		marginHorizontal: 10,
		padding: 0,
		paddingRight: 5
 	},
 	searchTextfield: {
 		paddingTop: 11,
 		paddingBottom: 11,
 		paddingHorizontal: 0,
 		margin: 0,
 		fontSize: Setting.h6TextSize,
 		color: Colors.grayDarkest,
 	},
 	leftIconField: {
 		width: 38,
 		padding: 0,
		justifyContent: "center",
		alignItems: "center"
 	},
 	inputContainer: {
 		padding: 0,
 		marginBottom: 0,
		justifyContent: "center",
		alignItems: "center",
		height: 55
 	},
	textfieldContainer: {
		height: 45,
		backgroundColor: Colors.white,
		borderWidth: 1,
		borderColor: Colors.fBorderColor,
		borderRadius: 5,
		paddingHorizontal: 0,
		paddingBottom: 10,
		paddingTop: 10,
		margin: 0
	},
	textfield: {
		padding: 12,
		fontSize: Setting.nTextSize,
	},
	selectfield: {
		backgroundColor: Colors.white,
		borderWidth: 1,
		borderColor: Colors.fBorderColor,
		padding: 12,
		fontSize: Setting.nTextSize,
 		marginBottom: 15,
 		marginHorizontal: 10,
		borderRadius: 5,
		paddingLeft: 10,
	},
	readOnlySelectfield: {
		borderWidth: 0,
		alignSelf: 'flex-start',
		fontSize: Setting.nTextSize,
		color: Colors.grayDarkest,
		fontWeight: '700',
	},
	selectfieldOption: {
		height: 40,
		textAlign: 'left',
		backgroundColor: Colors.white,
		fontSize: Setting.nTextSize,
	},
	textfieldLabel: {
		alignSelf: 'flex-start',
 		fontSize: Setting.xxsTextSize,
 		fontWeight: '600',
 		textTransform: 'uppercase',
 		color: Colors.grayDarkest,
		position: 'absolute',
		zIndex: 1,
		top: -8,
		left: 20,
		backgroundColor: Colors.white
	},
	textfieldLabelExtra: {
		position: 'relative',
		top: 7,
	},
	selectFieldLabelExtra: {
		left: 16,
		top: -6
	},
	readOnlyTextfield: {
		fontSize: Setting.nTextSize,
		color: Colors.grayDarkest,
		opacity:1,
		fontWeight: '700',
	},
	readOnlyTextfieldContainer: {
		borderColor: Colors.white,
		color: Colors.grayDarkest,
	},
	errorText: {
		padding: 0,
		marginBottom: 0,
		alignSelf: 'flex-start'
	},
	primaryBtnInput: {
		backgroundColor: Colors.primary,
		marginHorizontal: 10,
		borderRadius: 5,
		padding: 10,
	},
	secondaryBtnInput: {
		backgroundColor: Colors.white,
		marginHorizontal: 10,
		borderRadius: 5,
		padding: 10,
		borderWidth: 1,
		borderColor: Colors.fBorderColor
	},
	secondaryBtnLabel: {
		fontSize: Setting.h6TextSize,
		fontWeight: '600',
		textTransform: 'uppercase',
		letterSpacing: 1,
		color: Colors.grayDarkest
	},
	sBtnInput: {
		padding: 5,
		marginHorizontal: 3,
	},
	sBtnLabel: {
		fontSize: Setting.xxsTextSize, 
	},
	btnLabel: {
		fontSize: Setting.h6TextSize,
		fontWeight: '600',
		textTransform: 'uppercase',
		letterSpacing: 1
	},
	btnExtra: {
		marginBottom: 40
	},
	tabBtn: {
		backgroundColor: Colors.grayDark,
		color: Colors.white,
	},
	textarea: {
		padding: 12,
		fontSize: 16,
		backgroundColor: Colors.white,
		borderWidth: 1,
		borderColor: Colors.fBorderColor,
		borderRadius: 5,
		paddingHorizontal: 10,
		paddingBottom: 10,
		paddingTop: 10,
		marginHorizontal: 10,
		maxHeight: 120,
		marginBottom: 20
	},
	readOnlyField: {
		alignSelf: 'flex-start',
		fontSize: Setting.nTextSize,
		color: Colors.grayDarkest,
		fontWeight: '500',
		paddingLeft: 18
	},
	readOnlyTextField: {
		alignSelf: 'flex-start',
		fontSize: Setting.nTextSize,
		color: Colors.grayDarkest,
		fontWeight: '500',
	}
 }
/* FORM FIELDS - ENDS */
/* SPECIAL ICONS - STARTS */
const specialIconStyle = {
	loaderContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
		zIndex: 1
		//backgroundColor: `rgba(0,0,0,${dimLights})`
	},
	subLoaderContainer: {
		padding: 20,
		backgroundColor: Colors.white,
		borderRadius: 13,
		alignItems: "center",
		justifyContent: "center",
		zIndex: 2
	},
	statusBar: {
    	height: Setting.STATUSBAR_HEIGHT,
    	top: 0,
    	left: 0,
    	width: '100%',
  	},
  	lIcon: {
  		width: 100,
  		height: 100,
		alignSelf: 'center'
  	},
  	moreHor: {
  		transform: [{ rotate: '90deg' }]
  	},
  	poweredBy: {
  		color: Colors.grayM,
  		fontSize: Setting.sTextSize,
  		fontWeight: '400',
  		alignSelf: 'center',
  		marginTop: 15
  	},
  	actionMenuIcon: {
  		paddingHorizontal: 15
  	},
  	selectFieldIcon: {
  		right: 23,
  		top: 12
  	},
  	noBorder: {
  		borderWidth: 0,
  		borderBottomWidth:0,
  	},
	plusV: {
		backgroundColor: Colors.green,
		color: Colors.white,
		//color: Colors.green,
		paddingTop: 3,
		paddingBottom: 3,
		paddingHorizontal: 5,
		borderRadius: 5,
		fontSize: Setting.h6TextSize,
		fontWeight: '700',
		marginBottom: 5,
		overflow: 'hidden'
	},
	minusV: {
		backgroundColor: Colors.red,
		color: Colors.white,
		//color: Colors.red,
		padding: 5,
		borderRadius: 5,
		fontSize: Setting.h6TextSize,
		fontWeight: '700',
		marginBottom: 5,
		overflow: 'hidden'
	},
	divide: {
		alignItems: 'center',
		transform: [{ rotate: '125deg'}]
	},
	scircle: {
		position: 'absolute',
		width: 20,
    	height: 20,
    	borderRadius: 10,
    	fontSize: 10,
    	textAlign: 'center',
    	backgroundColor: Colors.red,
    	color: Colors.white,
    	fontWeight: 'bold',
    	top: -5,
    	right: -5,
    	lineHeight: 20,
    	overflow:"hidden"
	},
	symOpt: {
		position: 'absolute',
    	top: -32,
    	left: -20,
    	//backgroundColor: Colors.red,
    	color: Colors.grayDarkest,
    	padding: 10,
    	borderRadius: 13,
    	overflow: 'hidden',
    	zIndex: 2
	},
	nLabel: {
		fontSize: Setting.nTextSize,
    	color: Colors.grayDarkest,
    	fontWeight: '700',
    	textAlign: 'right',
    	paddingRight: 10

	},
	floatIcon: {
		position: 'absolute',
		width: 50,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		right: 15,
		bottom: 15,
		backgroundColor: Colors.primary,
		borderRadius: 50
	},
	link: {
		fontWeight: '500',
		color: Colors.link,
		width: 100,
		position: 'relative'
	},
}
/* SPECIAL ICONS - ENDS */

/* SPACING - STARTS */
const spacingStyle = {
	p0: {
		padding: 0,
		paddingTop: 0,
		paddingBottom: 0,
		paddingHorizontal: 0,
	},
	phb0: {
		paddingHorizontal: 0,
		paddingBottom: 0
	},
	ph0: {
		paddingHorizontal: 0
	},
	ph20: {
		paddingHorizontal: 20
	},
	pt0: {
		paddingTop: 0
	},
	pt5: {
		paddingTop: 5
	},
	pt15: {
		paddingTop: 15
	},
	pt20: {
		paddingTop: 20
	},
	pt25: {
		paddingTop: 25
	},
	pb0: {
		paddingBottom: 0
	},
	pb5: {
		paddingBottom: 5
	},
	pb10: {
		paddingBottom: 10
	},
	pb15: {
		paddingBottom: 15
	},
	ptb0: {
		paddingTop: 0,
		paddingBottom: 0
	},
	pl0: {
		paddingLeft: 0
	},
	pl5: {
		paddingLeft: 5
	},
	pl10: {
		paddingLeft: 10
	},
	pl15: {
		paddingLeft: 15
	},
	pl30: {
		paddingLeft: 30
	},
	pr5: {
		paddingRight: 5
	},
	mt0: {
		marginTop: 0
	},
	mt5: {
		marginTop: 5
	},
	mt10: {
		marginTop: 10
	},
	mt15: {
		marginTop: 15
	},
	mt20: {
		marginTop: 10
	},
	mt50: {
		marginTop: 50
	},
	mr0: {
		marginRight: 10
	},
	mr5: {
		marginRight: 5
	},
	mr10: {
		marginRight: 10
	},
	ml10: {
		marginLeft: 10
	},
	mb0: {
		marginBottom: 0
	},
	mb5: {
		marginBottom: 5
	},
	mb10: {
		marginBottom: 10
	},
	mb15: {
		marginBottom: 15
	},
	mb20: {
		marginBottom: 20
	},
	mb40: {
		marginBottom: 40
	},
}
/* SPACING - ENDS */

/* LIST - STARTS */
 const listStyle = {
 	listType1Container: {
 		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		//height: 60,
		borderBottomColor: '#f3f3f3',
		borderBottomWidth: 1,
		margin: 0,
		padding: 0,
		paddingTop: 5
 	},
	listType1LeftIcon: {
		width: 70,
		alignItems: 'center',
		justifyContent: 'center',
		paddingLeft: 10
	},
	listType1RightIcon: {
		width: 50,
		alignItems: 'center',
		justifyContent: 'center'
	},
	listType1Content: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingHorizontal: 5
	},
	listType1Title: {
		fontSize: Setting.nTextSize,
		fontWeight: 'bold',
		paddingBottom: 3,
		color: Colors.grayDarkest,
		textTransform: 'capitalize'
	},
	listType1Descr: {
		fontSize: Setting.xxsTextSize,
		fontWeight: '400',
		color: Colors.grayDark
	},
	listType1TitleDate: {
		fontSize: Setting.usTextSize,
		fontWeight: '600',
		color: Colors.grayDarkest,
		textTransform: 'uppercase'
	},
	listType1DescrDate: {
		fontSize: Setting.h3TextSize,
		fontWeight: '600',
		color: Colors.grayDarkest
	},
	listType2Container: {
 		flex: 1,
 		flexDirection: 'row',
 		backgroundColor: Colors.white,
		padding: 0,
 		borderBottomColor: Colors.borderColor,
 		borderBottomWidth: 1,
 		marginHorizontal: 0,
 		paddingHorizontal: 5,
 		paddingTop: 9,
 		paddingBottom: 9,
 		backgroundColor: Colors.white
 	},
	listType2LeftIcon: {
		width: 60,
		alignItems: 'center',
		justifyContent: 'center'
	},
	listType2Content: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingHorizontal: 5
	},
	listType2Title: {
		fontSize: Setting.sxTextSize,
		fontWeight: '600',
		paddingBottom: 3,
		color: Colors.grayDarkest,
		textTransform: 'uppercase'
	},
	listType2Descr: {
		fontSize: Setting.xxsTextSize,
		fontWeight: '400',
		color: Colors.grayDarkest
	},
 	listType2RightIcon: {
		width: 35, 
		justifyContent: 'center', 
		alignItems: 'center',
 		fontSize: Setting.nTextSize,
 		color: Colors.grayDarkest,
 	},
 	listType3Container: {
 		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		//height: 100,
		backgroundColor: Colors.white,
		borderBottomColor: Colors.borderColor,
		borderBottomWidth: 1,
		margin: 0,
		padding: 0,
 	},
 	listType3ContainerAlter: {
 		backgroundColor: Colors.alterRowColor,
 	},
	listType3LeftIconContainer: {
		width: 25,
		alignItems: 'center',
		justifyContent: 'center',
		borderRightColor:  Colors.borderColor,
		borderRightWidth: 2,
		zIndex: 2
	},
	listType3LeftIcon: {
		color: Colors.lBorderColor,
		backgroundColor: Colors.White
	},
	listType3LeftIconBox: {
		position: 'absolute',
		zIndex: 1,
		right: -10,
	},
	listType3Content: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingLeft: 20,
		paddingRight: 10,
		paddingTop: 10,
		paddingBottom: 10,
	},
	listType3Title: {
		fontSize: Setting.h6TextSize,
		fontWeight: '500',
		paddingBottom: 3,
		color: Colors.grayDarkest,
		textTransform: 'capitalize'
	},
	listType3Descr: {
		fontSize: Setting.xxsTextSize,
		fontWeight: '400',
		color: Colors.grayDark,
		textTransform: 'capitalize'
	},
	listType3DescrTitle: {
		fontSize: Setting.xxsTextSize,
		fontWeight: '500',
		color: Colors.grayDark,
		textTransform: 'uppercase'
	},
	listType3DescrNo: {
		fontSize: Setting.nTextSize,
		fontWeight: '600',
		color: Colors.grayDarkest,
		textTransform: 'uppercase',
	},
	listType3RedTitle: {
		fontSize: Setting.h3TextSize,
		fontWeight: '400',
		paddingBottom: 3,
		color: Colors.grayDarkest,
		textTransform: 'uppercase'
	},
	listType3RightIcon: {
		alignItems: 'center',
		paddingHorizontal: 7
	},
	activeList: {
		backgroundColor: Colors.activeList,
		borderBottomColor: Colors.activeListB,
	}
 }
/* LIST FIELDS - ENDS */
/* BOX - STARTS */
 const boxStyle = {
 	containerBox: {
 		borderColor: Colors.fBorderColor,
 		borderWidth: 1,
 		borderRadius: 5,
 		padding: 5,
 		paddingTop: 20,
 		margin: 10,
 		marginBottom: 20
 	},
 	containerBoxTitle: {
 		fontSize: Setting.xxsTextSize,
 		fontWeight: '600',
 		textTransform: 'uppercase',
 		color: Colors.grayDarkest,
		position: 'absolute',
		zIndex: 1,
		top: -8,
		left: 10,
		backgroundColor: Colors.white
 	},
	offlineBox: {
		backgroundColor: Colors.red,
		height: 40 + Setting.STATUSBAR_HEIGHT,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: Setting.STATUSBAR_HEIGHT
	},
	offlineBoxText: {
		color: Colors.white,
		textAlign: 'center',
		flex: 1,
		lineHeight: 30,
		fontWeight: '600',
		fontSize: Setting.nTextSize

	},
	contentBody: {
		borderTopWidth: 0,
		borderTopColor: Colors.borderColor,
		paddingTop: 30,
		marginTop: 10,
	},
	contentBodyText: {
		color: Colors.grayDarkest,
		fontSize: Setting.nTextSize,
		lineHeight: 18,
		paddingBottom: 20,
		fontWeight: '400',
		paddingHorizontal: 20
	},
	contentBodyTitle: {
		color: Colors.grayDarkest,
		fontSize: Setting.nTextSize,
		fontWeight: '500',
		lineHeight: 20,
		paddingBottom: 10,
		paddingTop: 20
	},
	greensBox: {
		backgroundColor: Colors.green,
		paddingTop: 3,
		paddingBottom: 3,
		paddingHorizontal: 5,
		borderRadius: 5,
		color: Colors.white,
		fontSize: Setting.xxsTextSize,
		fontWeight: '700',
		marginBottom: 5,
		overflow: 'hidden'
	},
	redsBox: {
		backgroundColor: Colors.red,
		padding: 5,
		borderRadius: 5,
		color: Colors.white,
		fontSize: Setting.xxsTextSize,
		fontWeight: '700',
		marginBottom: 5,
		overflow: 'hidden'
	},
	loginContainer: {
		paddingHorizontal: '10%',
		marginTop: '-10%'
	}

 }
/* BOX - ENDS */
/* ALIGN - STARTS */
const alignStyle = {
	row: {
		flex: 1,
		flexDirection: 'row',
	},
	rowDirection: {
		flexDirection: 'row',
	},
	column: {
		flex: 1,
		flexDirection: 'column'
	},
	columnDirection: {
		flexDirection: 'column'
	},
	rowAC: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: "center",
		alignItems: "center",
	},
	rowACS: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: "center"
	},
	centerView: {
		alignItems: "center",
		justifyContent: "center"
	},
	centerViewV: {
		alignItems: "flex-end",
		justifyContent: "center"
	},
	displayN: {
		display: 'none'
	},
	displayB: {
		display: 'flex'
	},
	selfC: {
		alignSelf: 'center',
	},
	selfS: {
		alignSelf: 'flex-start',
	},
	selfE: {
		alignSelf: 'flex-end',
	},
	alignE: {
		alignItems: 'flex-end',
	}	
}
/* ALIGN - ENDS */
/* FLEX - STARTS */
const flexStyle = {
	flex1: {
		flex: 1
	},
	flex2: {
		flex: 2
	},
	flex3: {
		flex: 3
	},
	flex4: {
		flex: 4
	},
	flex5: {
		flex: 5
	},
	flex6: {
		flex: 6
	},
	flex7: {
		flex: 7
	}
}
/* FLEX - ENDS */
/* GRID - STARTS */
const gridStyle = {
	grid: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },
    gridItem: {
        flexBasis: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem100: {
        flexBasis: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
}
/* GRID - ENDS */
/* SLIDER - STARTS */
const sliderStyle = {
	slide: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
		shadowOffset:{  width: 2,  height: 2  },
		shadowColor: Colors.grayDarkest,
		shadowOpacity: 0.5,
    },
    slideTitle: {
        fontSize: 42,
        fontWeight: '700',
        color: Colors.grayDarkest,
		alignSelf: 'center',
		top: -50,
		textAlign: 'center',
		shadowOffset:{  width: 1,  height: 1  },
		shadowColor: Colors.grayDarkest,
		shadowOpacity: 0.5,
    },
    slideImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    slideImage: {
        height: 180,
        width: 180,
    },
    slideDesc: {
        fontSize: Setting.h6TextSize,
        fontWeight: '600',
        color: Colors.grayDarkest,
		textAlign: 'center',
		top: 30,
		paddingHorizontal: 40,
		lineHeight: 25
    },
}
/* SLIDER - ENDS */
/* DETAILS - STARTS */
const detailsStyle = {
	lHeader: {
		fontSize: Setting.lTextSize,
		fontWeight: 'bold',
		color: Colors.grayDarkest
	},
	desc: {
		fontSize: Setting.sTextSize, 
		color: Colors.grayM, 
		fontWeight: '400'
	},
	mHeader: {
		fontSize: Setting.h2TextSize, 
		fontWeight: '400', 
		color: Colors.grayDarkest
	},
	connectContainer: {
		padding: 15
	},
	aContainer: {
		textAlign: 'left', 
		color: Colors.source,
		borderWidth: 1,
		borderColor: '#e4e4e4',
		backgroundColor: '#fff',
		fontSize: 18,
		shadowOffset:{  width: 1,  height: 1  },
		shadowColor: '#c1c1c1',
		shadowOpacity: 0.5,
	},
	sourceContainer: {
		borderWidth: 1,
		borderColor: Colors.dest,
    	padding: 3,
	    borderRadius: 3,
    	marginTop: 3,
    	backgroundColor: Colors.dest,
    	paddingTop: 5,
    	paddingBottom: 5,
    	alignSelf: 'flex-start',
    	width: '100%',
    	flex: 1,
		flexDirection: 'row',
		textAlign: 'left',
		paddingLeft: 8
	},
	sourceContainerLabel: {
		fontSize: 18,
		color: Colors.source,
		textAlign: 'left',
    	textTransform: 'capitalize'
	},
	destContainer: {
		backgroundColor: Colors.source,
	    color: '#fff',
	    paddingHorizontal: 10,
	    paddingTop: 5,
	    paddingBottom: 5,
    	borderRadius: 3,
    	marginTop: 5,
    	alignSelf: 'flex-start',
    	width: '100%',
    	flex: 1,
		flexDirection: 'row',
		alignSelf: 'flex-start',
		textAlign: 'left'
	},
	destContainerLabel: {
		fontSize: 18,
		color: Colors.dest,
		textAlign: 'left',
    	textTransform: 'capitalize'
	},
	aContainer: {
	    textAlign: 'left',
	    color: Colors.source,
		borderWidth: 1,
		borderColor: '#e4e4e4',
	    backgroundColor: '#fff',
		shadowOffset:{  width: 1,  height: 1  },
		shadowColor: '#c1c1c1',
		shadowOpacity: 0.5,
	    fontSize: 18,
	    borderRadius: 4,
	    paddingTop: 0,
	    paddingHorizontal: 4,
	    paddingBottom: 3,
	    fontWeight: '500'
	},
	liTag: {
		textAlign: 'left',
		paddingLeft: 10,
		paddingTop: 7,
		paddingBottom: 0,
		paddingRight: 0
	},
	ulTag: {
		marginTop: 5
	},
	ulTagChild: {
		borderLeftWidth: 3,
		borderLeftColor: '#ccc',
		marginTop: 0,
		marginLeft: 5,
		paddingBottom: 0,
	},
	parentChildConnector: {
		width: 30,
		backgroundColor: '#ccc',
		height: 3,
		position: 'absolute',
		left: 0,
		top: 27
	},
	removeParentChildEConnector: {
		width: 10,
		backgroundColor: Colors.treeBG,
		height: 40,
		position: 'absolute',
		left: -3,
		top: 30,
		bottom: 0,
		height: '100%'
	},
	minmaxContainer: {
		position: 'absolute',
		width: 30,
		right: 0
	}
	
}
/* DETAILS - STARTS */

/* MODEL POPUP - STARTS */
 const modelStyle = {
	modelCenteredView: {
		flex: 1
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: RFValue(20),
		padding: 35,
		paddingLeft: 15,
		paddingRight: 20,
		alignItems: "center",
		/*shadowColor: "#000",
		shadowOffset: {
		  width: 0,
		  height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,*/
		//elevation: 5
	},
	smashModalView: {
		margin: 20,
		padding: 35,
		alignItems: "center",
		elevation: 5
	},
	smashLabel: {
		fontSize: RFValue(80),
        //...Setting.fontWeightBolder,
        color: Colors.white
	},
	smashDesc: {
		fontSize: RFValue(16),
        //...Setting.fontWeightBolder,
        color: Colors.white
	},
	modelTitle: {
		fontSize: Setting.h4TextSize,
        //...Setting.fontWeight500,
        color: Colors.grayDarkest,
        textAlign: 'center',
	},
	modelTitleContainer: {
		paddingTop: 10,
		paddingBottom: 0
	},
	modelmTitle: {
		fontSize: RFValue(50),
        //...Setting.fontWeight700,
        color: Colors.grayDarkest,
        textAlign: 'center',

	},
	modellTitle: {
		fontSize: RFValue(80),
	},
	modellBody: {
		paddingTop: 5,
		paddingBottom: 10,
		paddingHorizontal: 10,
	},
	modellText: {
		//...Setting.fontWeight400,
        color: Colors.grayDarkest,
        fontSize: Setting.sTextSize,
	},
	modellSubText: {
		//...Setting.fontWeight500,
        color: Colors.grayDarkest,
        fontSize: Setting.sTextSize,
	},
    modelLabel: {
		//...Setting.fontWeight600,
        color: Colors.grayDarkest,
        fontSize: Setting.nTextSize,
    },
    modelClose: {
    	position: 'absolute',
    	top: RFValue(20),
    	left: RFValue(20)
    },
    modelTable: {
  		backgroundColor: '#ecf0f1',
  		opacity: 0.8,
  		paddingTop: 8,
  		paddingBottom: 8,
  		paddingHorizontal: 10,
  		marginBottom: 8,
  		borderRadius: RFValue(10),
  		borderWidth: 1,
  		borderColor: Colors.borderColor
    },
    modelTableDark: {
  		backgroundColor: Colors.primary,
  		borderColor: Colors.primary
    }
}
/* MODEL POPUP - ENDS */

/* MENU - STARTS */
const menuStyle = {
	menuContainer: {
		alignItems: "center",
		justifyContent: "center",
		position: 'absolute',
		bottom: Utils.isIpad() ? RFValue(17) : 17,
		marginHorizontal: 70,
		left: 0,
		right: 0,
		zIndex: 2
	},
	menus: {
		flexDirection: 'row',
		width: RFValue(210),
		backgroundColor: Colors.white,
		shadowOffset:{  width: 0.5,  height: 0.5 },
		shadowColor: Colors.grayDark,
		shadowOpacity: 0.8,
		borderRadius: RFValue(50),
		paddingTop: 10,
		paddingBottom: 10,
		paddingHorizontal: 5,
		elevation: Utils.isAndroid() ? 2 : 1
		//borderWidth: 1,
		//borderColor: Colors.grayDark
	},
	activeMenuItem: {
		color: Colors.green
	}
}
/* MENU - ENDS */
export const styles = StyleSheet.create({
	...navBarStyle,
	...errorStyle,
	...layoutStyle,
	...formFieldStyle,
	...specialIconStyle,
	...spacingStyle,
	...listStyle,
	...boxStyle,
	...alignStyle,
	...gridStyle,
	...flexStyle,
	...sliderStyle,
	...detailsStyle,
	...menuStyle
	//...modelStyle
});
