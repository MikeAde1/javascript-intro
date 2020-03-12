const {checkAvailability} = require('./library.js');

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

// Write your code below:
var checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.')
var checkPants = checkAvailability('pants', 'Favorite Supply Co.')

var checkBags = checkAvailability('bags', 'Favorite Supply Co.');

Promise.all([checkSunglasses, checkPants, checkBags]).then(onFulfill).catch(onReject)


