function makeList() {
    const medhelp = require('./MedHelp')
    const myHelper = new medhelp.MedHelp('./data.json');

    // Establish the array which acts as a data source for the list
    let listData = myHelper.getData();
    // Make a container element for the list
    listContainer = document.createElement('div');
    listContainer.setAttribute('class', 'container is-fluid');
    // Make the list
    listElement = document.createElement('ul'),
    // Set up a loop that goes through the items in listItems one at a time
    // Add it to the page
    document.getElementById('listDiv').appendChild(listContainer);
    listContainer.appendChild(listElement);

    Object.keys(listData).forEach(function(key) {
        // create an item for each one
        listItem = document.createElement('li');
        listItem.setAttribute('class', 'box');
        // Add the item text
        listItem.innerHTML = key;

        // Add listItem to the listElement
        listElement.appendChild(listItem);
    });
    listContainer
}

