/* Task 1: Compile Participant Details with Shorthand Property Names */

//VARIABLES
const name = "Leah"
const age = 19;
const studyField = "Software Engineering";

// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.

const participant = { name, age, studyField};

console.log(participant);

/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.

const participantWithMethod = {
  ...participant,
  
  // Shorthand method definition
  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Field: ${this.studyField}`);
  }
};

participantWithMethod.displayInfo();

/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.

const participantWithArrow = {
  ...participant,
  
  // Arrow function version
  displayInfo: () => {
    console.log(`Name: ${this.name}, Age: ${this.age}, Field: ${this.studyField}`);
  }
};

participantWithArrow.displayInfo();


/*
 * Observations:
 * TODO: When  its run you get undefined for name, age and feild. This is because arrow function dont have their own "this."
 */

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.

function updateParticipantInfo(obj, propName, value) {
  return { ...obj, [propName]: value };
}
const updated = updateParticipantInfo(participant, "studyField", "Astrophysics");
console.log(updated);