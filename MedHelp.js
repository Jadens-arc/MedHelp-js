const fs = require('fs')

class MedHelp{
  constructor(path = './data') {
    this.path = path;
    this.patient = require(path);
	}

  append(name, time, amount) {
		this.patient[name] = {
      "time": time,
      "amount": amount
    };
	}

  write(path = this.path){
    const fs = require('fs');
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
