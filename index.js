
const helper = require('./MedHelp')
const myHelper = new helper.MedHelp('./data.json');

myHelper.append('ha', 'everyday', 'alot');
myHelper.show();
myHelper.write();