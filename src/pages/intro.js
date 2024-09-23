/**
*
* intro.js
* App Intro Component
*
* @author - Faizal
* @date   - 24 June 2020
*
***/
// REACT NATIVE IMPORT
import React, {useState, useEffect} from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { SafeAreaView } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';

// ALL SHARED FILES
import { styles  } from '../shared/stylesheet';
import { Colors } from '../shared/colors';
import * as Data from '../shared/data';
import * as Constant from '../shared/constant';
import * as Storage from '../shared/storage';
import * as Utils from '../shared/utils';
 
export const IntroScreen = ({navigation}) => {

    // DECLARE STATE VARIABLE
    const [isLogged, setIsLogged] = useState(false);

    // USE EFFECT ON LOAD PROCESS
    useEffect(() => {
        // COMMENTTED OUT HERE, TO AVOID FLICK WHILE LOGIN AUTH
        // HIDE SPLASH SCREEN ONCE PAGE LOADED
        // GETTING THE SESSION KEY TO CHECK THE STATUS
        // WHEN USER ALREADY LOGGED IN THEN DONT HIDE THE SPLASH SCREEN
        Storage._retrieveData(Constant.STORAGE.IS_INTRO_COMPLETED).then(item => {
            // CHECKING WHEATHER USER LOGGED IN OR NOT ALREADY
            // IF YOU DONT LOGIN THEN HIDE SPLASH SCREEN
            if (Utils.isNotEmpty(item)) {
                navigation.navigate('Login');
            }
        });
    }, []);

    // USE EFFECT ON LOAD PROCESS
    useEffect(() => {
      // UPDATE STATUS COLOR
      StatusBar.setBarStyle('light-content');
        SplashScreen.hide();
    }, []);

    /**
    * Move to last slide
    *
    * @input  NA
    * @return NA
    */
    const onFinished = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        navigation.navigate('Login');
    }

    /**
    * Feature used to generate each slide
    *
    * @input  Object - Slider object
    * @return Tags
    */
    const generateItem = ({ item }) => {
        return (
          <View style={{...styles.slide, backgroundColor: item.backgroundColor}}>
            <Text style={{...styles.slideTitle, color: item.color}}>{item.title}</Text>
            <View style={styles.slideImageContainer}><Image source={item.image} style={styles.slideImage}/></View>
            <Text style={{...styles.slideDesc, color: item.color}}>{item.text}</Text>
          </View>
        );
    }
    
    // RENDER HTML
    return (
    <>  
        <AppIntroSlider 
            showPrevButton={true} 
            showSkipButton={true} 
            renderItem={generateItem} 
            data={Data.introSlides} 
            onDone={onFinished} 
            onSkip={onFinished}
        />
    </>
    );
};