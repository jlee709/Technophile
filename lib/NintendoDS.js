
var GameConsole = require('../lib/GameConsole');
var WebBrowser = require('../lib/WebBrowser');
var extend = require('../lib/Extend');

function NintendoDS(systemName){
  this.systemName = "Nintendo DS";
}
NintendoDS.prototype = Object.create(GameConsole.prototype);

extend(NintendoDS.prototype, WebBrowser.prototype);

module.exports = NintendoDS;


// combining 3 libs to the instance