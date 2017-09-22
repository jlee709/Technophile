var extend = require('../lib/Extend');
 var Phone = require('../lib/Phone');
 var Tablet = require('../lib/Tablet');
 var GameConsole = require('../lib/GameConsole');
 var WebBrowser = require('../lib/WebBrowser');
 
 function SmartPhone(phoneNumber, systemName){
   this.phoneNumber = phoneNumber;
   this.systemName = "Smart Phone";
 }
 SmartPhone.prototype = Object.create(Phone.prototype);
 
 extend(SmartPhone.prototype, Tablet.prototype);
 extend(SmartPhone.prototype, GameConsole.prototype);
 extend(SmartPhone.prototype, WebBrowser.prototype);
 
 module.exports = SmartPhone; 