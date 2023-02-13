/**
 * Burnbutton
 * 
 * (c) Copyright 2018 Denis Meyer. All rights reserved.
 */

const pjson = require('../package.json');

const MODULE_NAME = 'config::app-info';

const appInfo = {
    name: 'Burnbutton',
    shortName: 'burnbutton',
    version: pjson.version
};

module.exports = appInfo;