/**
*
* data.js
* Static data
*
* @author - Faizal
* @date   - 24 June 2020
*
***/
import * as MockData from './mockData';

// ALL SHARED FILES
import * as Constant from './constant';

// INTRO SLIDE DATA
export const introSlides = [
  {
    key: 1,
    title: 'My Family',
    text: 'Manage your personal debit & credit details across different currencies and customer.',
    image: require('../../assets/img/money-management.png'),
    backgroundColor: '#0e8de2',
    statusColor: '#1088da',
    color: '#fff'
  },
  {
    key: 2,
    title: 'Find your ancestor',
    text: 'Create your own list of customers.\nYou can keep adding to your list.',
    image: require('../../assets/img/customer.png'),
    backgroundColor: '#d77065',
    statusColor: '#d06b60',
    color: '#fff'
  }
];


// DIFFERENT ACCOUNT TYPE DATA
export const filterListData = [
  'All',
  'UAE Account - AED',
  'Hongkong Account - HKD',
  'India Account - INR',
  'Srilanka Account - LKR',
  'Malaysia Account - RMB',
  'Singapore Account - SGD',
  'Thailand Account - THB',
  'USA Account - USD',
  'Cancel'
];
export const periodFilterListDataLabel = ['All', 'Today', 'Last 7 days', 'Current Month', 'Last 30 days', 'Last 3 Month', 'Last 90 days', 'Cancel'];
export const periodFilterListDataValue = ['', 0, 7, 2, 30, 3, 90, ''];

// SafeAreaView setting
export const SafeAreaViewSetting = {top: 'always'};