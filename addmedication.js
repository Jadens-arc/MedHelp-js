const medName = document.getElementById("medication-name");
const medAmt = document.getElementById("medication-amount");
const medFreq = document.getElementById("medication-freq");
const medOther = document.getElementById("medication-other");
const addMedBtn = document.getElementById("addMedBtn");
const medhelp = require('./MedHelp')
const myHelper = new medhelp.MedHelp('./data.json');

medName.value = ((localStorage["medName"]) == null  ? "" : localStorage["medName"]);
medAmt.value = ((localStorage["medAmt"]) == null ? "" : localStorage["medAmt"]);
medFreq.value = ((localStorage["medFreq"]) == null ? "" : localStorage["medFreq"]);
medOther.value = ((localStorage["medOther"]) == null ? "" : localStorage["medOther"]);

addMedBtn.onclick = () => {
	myHelper.append(medName.value,
					medFreq.value,
					medAmt.value,
					medOther.value);
	myHelper.write();
};
