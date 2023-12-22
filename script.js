//Task 1 lectiure 10
/*let age = prompt('Input your age:')
if (age<18) {console.log('You are a minor')}
else (console.log('You are an adult')) */

//Task 2 lectiure 10
/* let a = 3
let b = 2
let c = 10

if (a > b) {
    [a,b] = [b,a] }
if (b > c) {
    [b,c] = [c,b] }
if (a > b) {
    [a,b]=[b,a]
}

console.log('sorted values:' , a , b, c); */

//Task 3: https://www.educative.io/answers/how-to-get-the-frequency-of-smallest-array-value-in-javascript

/* let numbers = [3, 7, 2, 8, 5];
let max = numbers[0];
let min = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log(max)
console.log(min) */

//Lecture 11 task 1

/* function great (thename) {
    return 'Hello ' + thename + '!'}
console.log(great('Vincent')) */

//task 2.1

/*
function calculateCircleArea (radius) {
    return Math.PI * radius**2
}
console.log(calculateCircleArea(4)) */

//task 2.2
/*
function calculateTriangleArea (base,height) {
    return base * height
}
console.log(calculateTriangleArea(4,6)) */

//task 3
/*
let multiply = function (num1,num2) {
    return num1 * num2
}
console.log(multiply (2,3)) 

// task 4.1, 4.2

class Person {
constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
}
greet() {
    return 'Hello ' + this.name + '!'
}
};

let instPerson = new Person ('Fredrik', 45, 'test@test.se')
console.log(instPerson)
console.log(instPerson.greet());

//Task 5.1, 5.2

class Student extends Person {
constructor(name, age, email, studentID) {
    super(name, age, email)
    this.studentID = studentID;
}
presentInfo() {
    return 'Name: ' + this.name + '\nAge: ' + this.age + '\nEmail: ' + this.email + '\nStudentID: ' + this.studentID
}
}

let studPerson = new Student ('Berta', 47, 'test@test.se', 1518)
console.log(studPerson)
console.log(studPerson.presentInfo())

//Task 6
let numbers = [2, 4, 6, 8, 10];
let squaredNumbers = numbers.map(num => num ** 2);
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
const maxValue = Math.max(...numbers)
const minValue = Math.min(...numbers)
console.log(squaredNumbers)
console.log(sum)
console.log(maxValue)
console.log(minValue) 

//Excercise 2 - JavaScript


// Define the Activity class
class Activity {
    constructor(name, duration, excitementLevel, location, description) {
        this.name = name;
        this.duration = duration;
        this.excitementLevel = excitementLevel;
        this.location = location;
        this.description = description;
    }
}

// Initialize an array to store personalized activities
const activities = [];

// Function to check if an activity with the same name already exists
function activityExists(activityName) {
    return activities.find((activity) => activity.name === activityName);
}

// Function to add a new activity
function addActivity(name, duration, excitementLevel, location, description) {
    if (!name || !duration || !excitementLevel || !location || !description) {
        console.log("Please provide valid input for all fields.");
        return;
    }

    if (activityExists(name)) {
        console.log("Activity with the same name already exists. Cannot add.");
        return;
    }

    const activity = new Activity(name, parseFloat(duration), parseInt(excitementLevel), location, description);
    activities.push(activity);
    console.log("Activity added successfully!");
}

// Function to edit an existing activity based on the activity name
function editActivity(activityName, duration, excitementLevel, location, description) {
    const activityIndex = activities.findIndex((activity) => activity.name === activityName);

    if (activityIndex !== -1) {
        // Delete the existing activity using splice
        activities.splice(activityIndex, 1);

        // Add the updated activity
        addActivity(activityName, duration, excitementLevel, location, description);

        console.log("Activity edited successfully!");
    } else {
        console.log("Activity not found. Editing failed.");
    }
}

// Function to delete an activity based on the activity name
function deleteActivity(activityName) {
    const activityIndex = activities.findIndex((activity) => activity.name === activityName);
    if (activityIndex !== -1) {
        activities.splice(activityIndex, 1);
        console.log("Activity deleted successfully!");
    } else {
        console.log("Activity not found. Deletion failed.");
    }
}

// Function to list all personalized activities
function listActivities() {
    console.log("\nList of Personalized Fun Activities:");
    activities.forEach((activity, index) => {
        console.log(`\n${index + 1}. Activity: ${activity.name}`);
        console.log(`   - Duration: ${activity.duration} hours`);
        console.log(`   - Excitement Level: ${activity.excitementLevel}/10`);
        console.log(`   - Location: ${activity.location}`);
        console.log(`   - Description: ${activity.description}`);
    });
}

// Function to get user input for activity details
function getNewActivityDetails() {
    const name = prompt('Enter activity name: ');
    const duration = prompt('Enter duration (in hours): ');
    const excitementLevel = prompt('Enter excitement level (1-10): ');
    const location = prompt('Enter location: ');
    const description = prompt('Enter description: ');

    addActivity(name, duration, excitementLevel, location, description);
}

// Function to get user input for activity details for editing
function getEditActivityDetails() {
    const name = prompt('Enter activity name to edit: ');
    const newDuration = prompt('Enter new duration (in hours): ');
    const newExcitementLevel = prompt('Enter new excitement level (1-10): ');
    const newLocation = prompt('Enter new location: ');
    const newDescription = prompt('Enter new description: ');

    editActivity(name, newDuration, newExcitementLevel, newLocation, newDescription);
}

// Function to get user input for activity name to delete
function getDeleteActivityName() {
    const name = prompt('Enter activity name to delete: ');
    deleteActivity(name);
}

// Defined Console User Interface
function consoleInterface() {
    while (true) {
        console.log("\nChoose an option:");
        console.log("1. Add Activity");
        console.log("2. Edit Activity");
        console.log("3. Delete Activity");
        console.log("4. List Activities");
        console.log("5. Exit");

        const choice = prompt('Enter option: ');

        switch (choice.trim()) {
            case '1':
                getNewActivityDetails();
                break;
            case '2':
                getEditActivityDetails();
                break;
            case '3':
                getDeleteActivityName();
                break;
            case '4':
                listActivities();
                break;
            case '5':
                console.log("Exiting program. Goodbye!");
                return;
            default:
                console.log("Invalid choice. Please choose a valid option.");
        }
    }
}

// Example Usage:
// You can interact with the program through the console user interface here.
consoleInterface(); */

//Lecture 12, task 1

let count = 0;

const button = document.getElementById('myButton');
const showCount = document.getElementById('displayCount');
    
button.addEventListener('click', function () {
    showCount.innerText = count++
}) 

// Lecture 12, task 2
const inputField = document.getElementById('textField')
const showValue = document.getElementById('displayDiv')
 

inputField.addEventListener('keyup', (event) => { 
    const inputValue = event.target.value
    showValue.innerText = inputValue
    
})

//Lecture 12, task 3
const form = document.getElementById('targetForm')

form.addEventListener('submit', function(event) {
    event.preventDefault()
    alert('The form was not submitted')

})

//Lecture 12, task 4
const displayText = document.getElementById('hoverDiv')

displayText.addEventListener('mouseover', function() {
displayText.style.color = 'red'
})

displayText.addEventListener('mouseleave' , function() {

    displayText.style.color = 'black'
})




















