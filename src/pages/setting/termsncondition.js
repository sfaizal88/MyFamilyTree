/**
*
* termsncondition.js
* Terms and Condition Screen
*
* @author - Faizal
* @date   - 24 April 2020
*
***/
// REACT NATIVE IMPORT
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Alert} from 'react-native';
import { Input, Button } from 'react-native-elements';

// ALL PAGE FILES
import { MHeader  } from '../layout/header';
import { Subheader  } from '../layout/subheader';

// ALL COMPONENT
import { Loader  } from '../../component/complex/loader';

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';

export const TermsnConditionScreen = ({ navigation }) => {

	// DECLARE STATE VARIABLE
	const [screenIsWaiting, setScreenIsWaiting] = useState(true);

  	// USE EFFECT ON LOAD PROCESS
	useEffect(() => {
		setScreenIsWaiting(false)
	}, []);

	return (
    <>
      	<Loader show={screenIsWaiting} />
    	<SafeAreaView style={styles.safeViewContainer}>
        	<Subheader title={'Terms and Condition'}/>
	        <ScrollView style={[styles.body, styles.p0]}>
	        	<View style={[styles.contentBody, styles.mt0, styles.ph20]}>
                	<Text style={[styles.contentBodyTitle, styles.pt0]}>1. Terms</Text>
	                <Text style={styles.contentBodyText}>{'\t'}By accessing the website at http://onmoney.iwaymen.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</Text>
					<Text style={styles.contentBodyTitle}>2. Use License</Text>
					<Text style={styles.contentBodyText}>A. Permission is granted to temporarily download one copy of the materials (information or software) on OnMoney's website for personal, non-commercial transitory viewing only. This is the grant of a licence, not a transfer of title, and under this licence you may not:</Text>
					<Text style={styles.contentBodyText}>1. Modify or copy the materials;</Text>
					<Text style={styles.contentBodyText}>2. Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</Text>
					<Text style={styles.contentBodyText}>3. Attempt to decompile or reverse engineer any software contained on OnMoney's website;</Text>
					<Text style={styles.contentBodyText}>4. Remove any copyright or other proprietary notations from the materials; or</Text>
					<Text style={styles.contentBodyText}>5. Transfer the materials to another person or "mirror" the materials on any other server.</Text>
					<Text style={styles.contentBodyText}>B. This licence shall automatically terminate if you violate any of these restrictions and may be terminated by OnMoney at any time. Upon terminating your viewing of these materials or upon the termination of this licence, you must destroy any downloaded materials in your possession whether in electronic or printed format.</Text>
					<Text style={styles.contentBodyTitle}>3. Disclaimer</Text>
					<Text style={styles.contentBodyText}>The materials on OnMoney's website are provided on an 'as is' basis. OnMoney makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</Text>
					<Text style={styles.contentBodyText}>Further, OnMoney does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</Text>
					<Text style={styles.contentBodyTitle}>4. Limitations</Text>
					<Text style={styles.contentBodyText}>In no event shall OnMoney or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on OnMoney's website, even if OnMoney or a OnMoney authorised representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</Text>

					<Text style={styles.contentBodyTitle}>5. Accuracy of materials</Text>
					<Text style={styles.contentBodyText}>The materials appearing on OnMoney's website could include technical, typographical, or photographic errors. OnMoney does not warrant that any of the materials on its website are accurate, complete or current. OnMoney may make changes to the materials contained on its website at any time without notice. However OnMoney does not make any commitment to update the materials.</Text>

					<Text style={styles.contentBodyTitle}>6. Links</Text>
					<Text style={styles.contentBodyText}>OnMoney has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by OnMoney of the site. Use of any such linked website is at the user's own risk.</Text>

					<Text style={styles.contentBodyTitle}>7. Modifications</Text>
					<Text style={styles.contentBodyText}>OnMoney may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</Text>

					<Text style={styles.contentBodyTitle}>8. Governing Law</Text>
					<Text style={styles.contentBodyText}>These terms and conditions are governed by and construed in accordance with the laws of Singapore and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</Text>
	            </View>
	        </ScrollView>
  		</SafeAreaView>
  	</>
  );
} 