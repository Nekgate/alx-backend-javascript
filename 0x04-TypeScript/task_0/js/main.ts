// Define an interface for the Student object
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two Student objects
const student1: Student = {
  firstName: 'Richard',
  lastName: 'Tim',
  age: 28,
  location: 'Port Harcourt'
};

const student2: Student = {
  firstName: 'Florence',
  lastName: 'Neka',
  age: 22,
  location: 'Port Harcourt'
};

// Create an array to hold the student objects
const studentsList: Student[] = [student1, student2];

// Create a table element
const table = document.createElement('table');
// Create a tbody element to hold the rows of the table
const tbody = document.createElement('tbody');

// Loop through each student in the studentsList array
studentsList.forEach((student) => {
  // Create a new table row for each student
  const row = document.createElement('tr');

  // Create a table cell for the student's first name
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName; // Set the text content to the student's first name
  row.appendChild(firstNameCell); // Append the cell to the row

  // Create a table cell for the student's location
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location; // Set the text content to the student's location
  row.appendChild(locationCell); // Append the cell to the row

  // Append the row to the tbody
  tbody.appendChild(row);
});

// Append the tbody to the table
table.appendChild(tbody);
// Append the table to the document body so it is displayed on the page
document.body.appendChild(table);
