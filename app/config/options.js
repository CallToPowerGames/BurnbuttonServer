/**
 * Burnbutton
 * 
 * (c) Copyright 2018 Denis Meyer. All rights reserved.
 */

const MODULE_NAME = 'config::options';

let options = {
    dev: false,
    debug: false
};

if (options.dev) {
    options.debug = true;
}

module.exports = options;