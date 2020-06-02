const fs = require('fs')

class MedHelp {
  constructor(path = './data') {
    this.path = path;
    this.patient = require(path);
	}

  append(name, time, amount) {
    // adds/updates entry to json
		this.patient[name] = {
      "time": time,
      "amount": amount
    };
	}

  write(path = this.path) {
    // formatting and writing json to path
    const fs = require('fs'); // imports filesystem
    // writes file to path using indent size of 2
    fs.writeFile(path, JSON.stringify(this.patient, null, 2), 
      err => { 
      // Checking for errors 
      if (err) throw err;   
    });
  }

  getData() {
    // returns patient json
    return this.patient;
  }

  show() {
    // prints patient json
    console.log(this.patient);
  }
}

module.exports = { MedHelp }
