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


        let amount = ((listData[key]["amount"]) == "" ? "" : `<p>Amount: ${listData[key]["amount"]}</p>`);
        let frequency = ((listData[key]["frequency"]) == "Other" ? "" : `<p>When To Take: ${listData[key]["frequency"]}</p>`);
        let other = ((listData[key]["other"]) == "" ? "" : `<p>Anything Else: ${listData[key]["other"]}</p>`);



        // Add the item text
        listItem.innerHTML = `
        <div style="display: flex;">
            <div style="">
                <b>${key}</b>
                <hr>
                <small>${amount}</small>
                <small>${frequency}</small>
                <small>${other}</small>
            </div>
            <div style="position: absolute; right: calc(10vw + 20px);">
                <div class="dropdown is-right" id="${key}Drop">
                  <div class="dropdown-trigger">
                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu2" id="${key}Btn">
                      <span class="icon is-small">
                        <i class="fas fa-cog" aria-hidden="true"></i>
                      </span>
                    </button>
                  </div>
                  <div class="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                      <div class="dropdown-item">
                        <a class="button" href="index.html" id="${key}DeleteBtn">Delete</a>
                        <a class="button">Edit</a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        `
        // Add listItem to the listElement
        listElement.appendChild(listItem);

        // bind dropdown click to dropdown button
        function handleDropClick() {
            var dropdown = document.getElementById(`${key}Drop`);
            dropdown.classList.toggle('is-active');
        }

        document.getElementById(`${key}Btn`).onclick = () => {handleDropClick()};

        // bind delete click to delete button
        function handleDeleteClick() {
            myHelper.remove(key);
            myHelper.write();
        }
        document.getElementById(`${key}DeleteBtn`).onclick = () => {handleDeleteClick()};

    });


    listContainer
}

