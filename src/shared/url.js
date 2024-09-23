/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

const host = 'http://myfamily.iwaymen.com/src/php/';

export const URL = {
  // ALL GET API CALL
  LOGIN                 : host + "login.php",
  LOGOUT                : host + "logout.php",
  GET_ALL_MAIN_MEMBER   : host + "getAllMainMember.php",
  GET_ALL_MEMBER        : host + "getAllMember.php",
  GET_MEMBER            : host + "getMember.php",
  GET_TREE              : host + "getTree.php",
  GET_DASHBOARD_DETAILS : host + "loadDashboard.php",
  GET_ALL_RELATIONSHIP  : host + "getAllRelationship.php",
  GET_PARENT_ID         : host + "getParentId.php"
};
