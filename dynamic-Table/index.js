const tableBody = document.getElementById('table-body');
const addRowButton = document.getElementById('add-row');
const deleteRowButton = document.getElementById('delete-row');

let data = []; // Array to store table data

function createTableRow(rowData) {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const ageCell = document.createElement('td');
    const cityCell = document.createElement('td');
    const actionsCell = document.createElement('td');

    nameCell.textContent = rowData.name;
    ageCell.textContent = rowData.age;
    cityCell.textContent = rowData.city;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        const rowIndex = row.rowIndex;
        data.splice(rowIndex - 1, 1); // Remove data from array
        tableBody.removeChild(row);
        updateDeleteButtonState();
    });

    actionsCell.appendChild(deleteButton);

    row.appendChild(nameCell);
    row.appendChild(ageCell);
    row.appendChild(cityCell);
    row.appendChild(actionsCell);

    return row;
}

function addRow() {
    // Prompt user for data (replace with your preferred data collection method)
    const name = prompt('Enter Name:');
    const age = prompt('Enter Age:');
    const city = prompt('Enter City:');

    if (name && age && city) {
        const newData = { name, age, city };
        data.push(newData); // Add data to array

        const newRow = createTableRow(newData);
        tableBody.appendChild(newRow);
        updateDeleteButtonState();
    } else {
        alert('Please fill in all fields.');
    }
}

function updateDeleteButtonState() {
    deleteRowButton.disabled = data.length === 0;
}

addRowButton.addEventListener('click', addRow);
updateDeleteButtonState(); // Initially disable delete button

