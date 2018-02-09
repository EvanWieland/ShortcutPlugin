/**
 * Shorty module allows creation and deletion of Android app shortcuts
 * @module shorty
 * @main shorty
 */

var exec      = require('cordova/exec');
var argscheck = require('cordova/argscheck');
var channel   = require('cordova/channel');

/**
 * Shorty module provides app shortcut creation and deletion functions (Android)
 * @class Shorty
 * @platform Android
 */
var Shorty = function () {};

/**
 * Add app shortcut
 @example
 Shorty.add(
    'My App',
    function(){
    	// Do something...
    },
    function(error){
        console.error(error); // Returns error
    }
 );
 * @method add
 * @param {String} shortcutText Shortcut text
 * @param {Function} successCallback Successful callback function
 * @param {Function} errorCallback Failed callback function
 * @param {Object} errorCallback.error Error status
 * @platform Android
 * @since 1.0.0
 */
Shorty.prototype.add = function (shortcutText, successCallback, errorCallback) {
    exec(
        successCallback,
        errorCallback,
        'Shorty',
        'add',
        [{ 
            "shortcuttext": shortcutText
        }]
    );
};

/**
 * Remove app shortcut
 @example
 Shorty.remove(
    'My App',
    function(){
    	// Do something...
    },
    function(error){
        console.error(error); // Returns error
    }
 );
 * @method remove
 * @param {String} shortcutText Shortcut text
 * @param {Function} successCallback Successful callback function
 * @param {Function} errorCallback Failed callback function
 * @param {Object} errorCallback.error Error status
 * @platform Android
 * @since 1.0.0
 */
Shorty.prototype.remove = function (shortcutText, successCallback, errorCallback) {
    exec(
        successCallback,
        errorCallback,
        'Shorty',
        'remove',
        [{ 
            "shortcuttext": shortcutText
        }]
    );
};

module.exports = new Shorty();
