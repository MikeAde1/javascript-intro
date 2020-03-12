const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel(){
      if(typeof this._energyLevel === 'number') {
        return 'My current energy level is ' + this._energyLevel
      } else {
        return 'System malfunction: cannot retrieve energy level'
      }
    }
  };
  
  console.log(robot.energyLevel);


  //built in object methods
  const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot)

console.log(robotEntries);

// Declare newRobot below this line:

const newRobot = Object.assign({
  laserBlaster: true, voiceRecognition: true
}, robot)

console.log(newRobot);