/**
*
* searchbar.js
* Search bar design and feature on explorer screen
*
* @author - Faizal
* @date   - 15 April 2020
*
***/
// REACT NATIVE IMPORT
import React, {useState, useEffect} from "react";
import { Text, View, TextInput } from "react-native";
import { Icon } from 'react-native-elements';
import { ActionSheet } from 'native-base';

// ALL SHARED FILES
import { Colors } from '../../shared/colors';
import { styles  } from '../../shared/stylesheet';
import * as Data from '../../shared/data';
import * as Constant from '../../shared/constant';
import * as Utils from '../../shared/utils';

export const SearchBar = (props) => {
  const {
    onSearch,
    placeholder,
    inputfieldStyle,
    data,
    searchByKey,
    filterByKey,
    enableFilterByPeriod = false,
    enableFilter = false,
    enableDownload = false,
    onDownload
  } = props;

  // USE EFFECT ON LOAD PROCESS
  useEffect(() => {
    setSearchOption({keyword: '', filterValue: '', selectFilterIndex: 0, selectPeriodIndex: 0});
  }, [data])

  // DECLARE STATE VARIABLE
  const [searchOption, setSearchOption] = useState({keyword: '', filterValue: '', selectFilterIndex: 0, selectPeriodIndex: 0});

  // DECLARE LOCAL VARIABLE
  const filterMenuOptions       = Data.filterListData;
  const cancelButtonFilterIndex = Data.filterListData.length - 1;
  const periodLabelMenuOptions  = Data.periodFilterListDataLabel;
  const periodValueMenuOptions  = Data.periodFilterListDataValue;
  const cancelButtonPeriodIndex = Data.periodFilterListDataLabel.length - 1;

  /**
  * Show Menu when user click filter icon
  *
  * @input  NA
  * @return NA
  */
  const showFilterActionMenu = () => {
    //To show the Bottom ActionSheet
    ActionSheet.show({
      options: filterMenuOptions,
      cancelButtonIndex: cancelButtonFilterIndex,
      destructiveButtonIndex: searchOption.selectFilterIndex,
      title: 'Which option you would like to chose?'
    },
    (buttonIndex) => {
      // IF USER CLICK CANCEL THEN DONT DO ANYTHING
      if (cancelButtonFilterIndex !== buttonIndex) {
        // FORMAT THE SELECTED FILTER VALUE
        let filterValue = (filterMenuOptions[buttonIndex] == 'All') ? '' : filterMenuOptions[buttonIndex].split('-')[1].trim();
        // CALLING UPDATE FUNCTION
        updateSearch(searchOption.keyword, filterValue, buttonIndex, searchOption.selectPeriodIndex);
      }
    });
  };

  /**
  * Show Menu when user click period icon
  *
  * @input  NA
  * @return NA
  */
  const showPeriodActionMenu = () => {
    //To show the Bottom ActionSheet
    ActionSheet.show({
      options: periodLabelMenuOptions,
      cancelButtonIndex: cancelButtonPeriodIndex,
      destructiveButtonIndex: searchOption.selectPeriodIndex,
      title: 'Which option you would like to chose?'
    },
    (buttonIndex) => {
      // IF USER CLICK CANCEL THEN DONT DO ANYTHING
      if (cancelButtonPeriodIndex !== buttonIndex) {
        // CALLING UPDATE FUNCTION
        updateSearch(searchOption.keyword, searchOption.filterValue, searchOption.selectFilterIndex, buttonIndex);
      }
    });
  };

  /**
  * Call Parent search logic when user key in something
  *
  * @input  String - User keyword
  * @return NA
  */
  const updateSearch = (value, filterValue, activeIndex, periodActiveIndex) => {
    // FILTER THE LIST
    let filteredItem = data.filter(item => {
      return value === '' || (item[searchByKey] && item[searchByKey].toLowerCase().indexOf(value.toLowerCase()) !== -1);
    });
    if (filterByKey && filterValue !== '') {
      // FILTER THE LIST
      filteredItem = filteredItem.filter(item => {
        return item[filterByKey] === filterValue;
      });
    }
    // PERIOD NOT ALLOWED FOR ALL AND CANCEL BUTTON
    // 2 - For Currenct Month
    // 3 - Last Three Month
    if (periodValueMenuOptions[periodActiveIndex] !== '') {
      // SELECTIVE PERIOD
      let periodIndex = periodValueMenuOptions[periodActiveIndex];
      // START OF DATE BUT WITH END HOURS
      let today   = new Date((new Date()).setHours(23,59,59,999));
      let to_date = new Date((new Date).setDate((new Date).getDate() - periodIndex));
      // CHECK FOR CURRENT MONTH 
      if (periodIndex === Constant.GENERIC.CURRENT_MONTH) {
         to_date = new Date((new Date).setDate(1));
      // CHECK FOR THREE MONTH 
      } else if (periodIndex === Constant.GENERIC.LAST_THREE_MONTH) {
         to_date = new Date((new Date()).setMonth((new Date()).getMonth() - 3));
         to_date = new Date((to_date).setDate(1));
      }
      // SET TO THE BEGINNING OF THE HOURS
      to_date = new Date(to_date.setHours(0,0,0,0));
      // FILTER THE LIST
      filteredItem = filteredItem.filter(item => {
        let check_date = Utils.stringToDate(item.date_created);
        return (check_date >= to_date && check_date <= today);
      });
    }
    // UPDATING THE MAIN STATE
    setSearchOption({...searchOption, keyword: value, filterValue: filterValue, selectFilterIndex: activeIndex, selectPeriodIndex: periodActiveIndex});
    // CALLING PARENT FUNCTION, TO TRIGGER SEARCH LOGIC
    onSearch(filteredItem);
  };

  // RENDER HTML
  return (
    <View style={styles.safeViewAvoid}>
    <View style={styles.searchContainer}>
      <View style={styles.leftIconField}>
        <Icon name="search" color={Colors.grayDarkest} size={25}/>
      </View>
      <View style={styles.container}>
        <TextInput
          maxLength={Constant.GENERIC.SEARCH_MAX_LENGTH} 
          style={[styles.searchTextfield, styles.inputfieldStyle]}
          onChangeText={text => updateSearch(text, searchOption.filterValue, searchOption.selectFilterIndex, searchOption.selectPeriodIndex)}
          value={searchOption.keyword}
          placeholder= {placeholder}
          clearButtonMode='while-editing'
        />
      </View>
      <View style={[styles.leftIconField, enableDownload ? '' : styles.displayN ]}>
          <Icon name="download" color={Colors.grayDarkest} size={25} onPress={showPeriodActionMenu} type='font-awesome' onPress={onDownload}/>
      </View>
      <View style={[styles.leftIconField, enableFilterByPeriod ? '' : styles.displayN ]}>
          <Icon name="calendar" color={Colors.grayDarkest} size={25} onPress={showPeriodActionMenu} type='font-awesome'/>
          <Text style={[styles.scircle, searchOption.selectPeriodIndex === 0 ? styles.displayN : '']}>1</Text>
      </View>
      <View style={[styles.leftIconField, enableFilter ? '' : styles.displayN ]}>
          <Icon name="filter-list" color={Colors.grayDarkest} size={25} onPress={showFilterActionMenu} />
          <Text style={[styles.scircle, searchOption.selectFilterIndex === 0 ? styles.displayN : '']}>1</Text>
      </View>
      <ActionSheet ref={(c) => { ActionSheet.actionsheetInstance = c; }}/>
    </View>
    </View>
  );
}