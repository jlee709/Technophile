// // ### Smart Watch

// // This class inherits from 
// the Watch class and the Tablet class.

// // The constructor should 
// invoke the Watch class constructor.



var extend = require('../lib/Extend');
 var Watch = require('../lib/Watch');
 var Tablet = require('../lib/Tablet');
 
 function SmartWatch(){
   this.bodyPart = null;
 }
 SmartWatch.prototype = Object.create(Watch.prototype);
 
 extend(SmartWatch.prototype, Tablet.prototype);
 
 module.exports = SmartWatch; 
    
