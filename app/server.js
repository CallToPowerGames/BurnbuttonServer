/**
 * Burnbutton
 * 
 * (c) Copyright 2018 Denis Meyer. All rights reserved.
 */

const express = require('express');
const bodyParser = require('body-parser');

const logger = require('./utils/logger');
const configAppInfo = require('./config/app-info');
const configOptions = require('./config/options');
const configServer = require('./config/server');
const configMappings = require('./config/mappings');
const mappingInfo = require('./mappings/info');

const MODULE_NAME = 'server';

const app = express();

app.use(bodyParser.json({
    type: 'application/json'
}));
app.use('/burnbutton', express.static('public'));

// load middleware functions at a path for all request methods
app.all('*', (req, res) => {
    logger.logDebug(MODULE_NAME, 'Incoming request: ' + req.method + ' ' + req.url, req.body);

    // Check mapping to server info path
    if (req.url.startsWith(configMappings.path.id)) {
        logger.logDebug(MODULE_NAME, 'Mapping to internal path');
        mappingInfo.handleRequest(req, res);
        return;
    }

    res.status(404).send('Not found');
});

logger.logInfo(MODULE_NAME, 'Starting ' + configAppInfo.shortName + ' server...');
logger.logDebug(MODULE_NAME, 'Options', configOptions);

const server = app.listen(configServer.port, configServer.address, () => {
    logger.logInfo(MODULE_NAME, 'Server started on "' + configServer.address + ':' + configServer.port + '"');
});
