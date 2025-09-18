document.addEventListener('DOMContentLoaded', function () {
    const addStudentButton = document.getElementById('addStudentButton');
    const tableContent = document.getElementById('table-content');

    function addStudent() {
        const idNumber = document.getElementById('idNumber').value.trim();
        const firstName = document.getElementById('firstName').value.trim();
        const middleName = document.getElementById('middleName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();

        if (idNumber && firstName && middleName && lastName) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${idNumber}</td>
                <td>${firstName}</td>
                <td>${middleName}</td>
                <td>${lastName}</td>
            `;
            tableContent.appendChild(newRow);

            // Clear form fields
            document.getElementById('studentForm').reset();
        } else {
            alert('Please fill out all fields.');
        }
    }

    addStudentButton.addEventListener('click', addStudent);
});

document.addEventListener("DOMContentLoaded", () => {
    const subjectCodeEl = document.getElementById('subjectCode');
    const subjectNameEl = document.getElementById('subjectName');
    const unitsEl = document.getElementById('units');
    const tableContent = document.getElementById('table-content');
    const addBtn = document.getElementById('addSubject');

    function addSubject() {
        const subjectCode = subjectCodeEl.value.trim();
        const subjectName = subjectNameEl.value.trim();
        const units = unitsEl.value.trim();

        if (!subjectCode || !subjectName || !units) {
            alert('Please fill out all fields.');
            return;
        }

        // Create row and cells
        const newRow = document.createElement('tr');

        const codeCell = document.createElement('td');
        codeCell.textContent = subjectCode;

        const nameCell = document.createElement('td');
        nameCell.textContent = subjectName;

        const unitsCell = document.createElement('td');
        unitsCell.textContent = units;

        // Optional: Action buttons
        const actionCell = document.createElement('td');
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'btn btn-warning btn-sm me-1';
        editBtn.onclick = () => {
            subjectCodeEl.value = subjectCode;
            subjectNameEl.value = subjectName;
            unitsEl.value = units;
            newRow.remove();
        };

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'btn btn-danger btn-sm';
        deleteBtn.onclick = () => newRow.remove();

        actionCell.appendChild(editBtn);
        actionCell.appendChild(deleteBtn);

        // Append cells to row
        newRow.appendChild(codeCell);
        newRow.appendChild(nameCell);
        newRow.appendChild(unitsCell);
        newRow.appendChild(actionCell);

        // Append row to table
        tableContent.appendChild(newRow);

        // Clear inputs
        subjectCodeEl.value = '';
        subjectNameEl.value = '';
        unitsEl.value = '';
    }

    addBtn.addEventListener('click', addSubject);
});