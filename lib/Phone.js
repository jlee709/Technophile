// ### Phone

// // The constructor should accept a single argument `phoneNumber`, and set a public variable 
// `phoneNumber` to the value of that constructor argument.

// // The class should define a `callPhone` method that accepts a single argument 
// `phoneNumber` and return a status message. status message should be in the format:
//  '`this phone number` calls `other phone number`'  
// // example: `5555555 calls 4444444`

console.log('hi');



function Phone(phoneNumber) {
  this.phoneNumber = phoneNumber;
}

//how to display and assign method  CONTEXT!!!!!
Phone.prototype.callPhone = function(phoneNumber) {
  return this.phoneNumber + ' calls ' + phoneNumber;
};

//maybe need mod pattern for requirements
// rquire uses relative path ../lib/phone

module.exports = Phone;

