/**
*
* constants.js
* Declare all Constant variable
*
* @author - Faizal
* @date   - 24 June 2020
*
***/
// REACT NATIVE IMPORT
import React from 'react';

// ALL SHARED FILES
import * as Utils from './utils';
import * as API_URL from './url';


// DECLARE GENERIC CONSTANT
export const GENERIC = {SUCCESS: 0,
	FAILED:  -1,
	VERIFY:  2,
	SESSION_EXPIRED:  3,
	TRUE:  1,
	FALSE:  0,
	MUL: '*',
	DIV: '/',
	OFFLINE_TYPE_SUCCESS: 'SUCCESS',
	OFFLINE_TYPE_FAIL: 'FAIL',
	APP_CLOSED: 'unknown',
    MALE: 'M',
    FEMALE: 'F'
};

// DECLARE STORAGE CONSTANT
export const STORAGE = {
    USER_OBJECT: 'userObject',
	IS_INTRO_COMPLETED: 'isIntroCompleted',
	IS_LOGGED:     'isLogged',
	TOKEN:         'phptk',
};

// DECLARE ERROR CODE CONSTANT
export const MESSAGE = {
	ERROR_001: 'Username or Password is incorrect. Please try again.',
    ERROR_002: 'Username and Password are required.',
    ERROR_003: 'Please fill all required fields.',
    ERROR_004: 'New password and confirmation password do not match.',
    ERROR_005: 'Old password is incorrect. Please try again.',
    ERROR_006: 'Something went wrong. Please try again later.',
    ERROR_007: 'Customer Name should contain only alphabets and space.',
    ERROR_008: 'Please provide valid Contact Number. Only numbers and + sign are allowed.',
    ERROR_009: 'Please provide valid Notes. Only alphanumeric and the following special characters are allowed ,-_.?()&><.',
    ERROR_010: 'Currency value should contain only numbers and decimal point.',
    ERROR_011: 'Please select an Account Type.',
    ERROR_012: 'Please select a Customer.',
    ERROR_013: 'Please provide valid Sell Notes. Only alphanumeric and the following special characters are allowed .,@+=',
    ERROR_014: 'Please provide valid Buy Notes. Only alphanumeric and the following special characters are allowed .,@+=',
    ERROR_015: 'Sell Rate should contain only numbers and decimal point.',
    ERROR_016: 'Sell Amount should contain only numbers and decimal point.',
    ERROR_017: 'Buy Rate should contain only numbers and decimal point..',
    ERROR_018: 'Buy Amount should contain only numbers and decimal point.',
    ERROR_019: 'Please select a Sell Currency.',
    ERROR_020: 'Please select a Buy Currency.',
    ERROR_021: 'Please provide either Sell / Buy details or both.',
    ERROR_022: 'Please provide Sell Rate.',
    ERROR_023: 'Please provide Sell Amount.',
    ERROR_024: 'Please provide Buy Rate.',
    ERROR_025: 'Please provide Buy Amount.',
    ERROR_026: 'Limit exceeded. You are not allowed to create more than ${params.limit} Customers.',
    ERROR_027: 'Limit exceeded. You are not allowed to create more than ${params.limit} Notes.',
    ERROR_028: 'Limit exceeded. You are not allowed to create more than ${params.limit} Reports.',
    ERROR_029: '${params.customer_name} linked to ${params.count} report(s). If you delete ${params.customer_name}, ${params.count} report(s) linked to ${params.customer_name} will also be deleted. Do you want to continue?',
    ERROR_030: '${params.customer_name} name already exists. Please enter a different Customer Name.',
    ERROR_031: 'No Internet connection. Please make sure that Wi-Fi or mobile data is turned on, then try again.',
    ERROR_032: 'Invalid Email ID. Please provide a valid email address.',
    ERROR_033: 'Email ID already exists. Please try another Email ID.',
    ERROR_034: 'Your account has been locked. Please contact admin at help.onmoney@gmail.com for more information.',
    ERROR_035: 'Email ID is required.',
    ERROR_036: 'Failed to send Report to {email}. Please try again later.',
    ERROR_037: 'Something went wrong. Plea(s)e try again later.',
	ERROR_038: 'You have been logged out due to inactivity. Please log in again to continue.',
};