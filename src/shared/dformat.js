/**
*
* dformat.js
* Declare all post request or response formatted data
*
* @author - Faizal
* @date   - 20 April 2020
*
***/
// REACT NATIVE IMPORT
import React from 'react';

// ALL SHARED FILES
import * as Constant from './constant';
import * as Utils from './utils';
import * as Storage from './storage';
import * as API_URL from './url';
//----------- CREATE EMPTY OBJECT - STARTS -----------

// LOGIN DETAILS FORMATTED DATA
export const loginObject = {
  username: '',
  pwd: ''
}