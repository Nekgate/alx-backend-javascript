// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any; // This is the index signature
}

// Create a teacher object based on the Teacher interface
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Expected output:
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"
