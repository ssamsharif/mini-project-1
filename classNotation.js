/* In this file, we rewrite the Course and Assignment design using
    ES6 Class Notation.
    
    Classes provide a modern, cleaner, and more readable way to define 
    constructor functions and prototypes. Even though the syntax is 
    different, JavaScript still uses prototypes underneath. */



/* ASSIGMENT CLASS:

    The Assignment class defines both the constructor and methods 
    for Assignment objects. 

    Inside of the class...
    - The constructor sets up properties.
    - Methods are automatically placed on Assignment.prototype, so 
      they are shared across all assignment instances. */

class Assignment {

    /*  The constructor runs whenever we create a new Assignment object.
        We store title and dueDate as instance properties. */

    constructor(title, dueDate) {
        this.title = title;
        this.dueDate = dueDate;
    }

    /*  This method prints the assignment information.

        Why?
        - Defining it here places it automatically on the prototype,
          following proper OOP practices.
        - No need to manually assign to Assignment.prototype. */

    printAssignment() {
        console.log("   Title: " + this.title + " | Due Date: " + this.dueDate);
    }
}



/*  COURSE CLASS:
    
    The Course class represents the Course concept in the UML.
    It contains the attributes and the courseInfo() method. */

class Course {

    /*  The constructor initializes the Course's attributes.
        Each Course has a name, instructor, credit hours, and assignments. */

    constructor(courseName, instructor, creditHours, assignments) {
        this.courseName = courseName;
        this.instructor = instructor;
        this.creditHours = creditHours;
        this.assignments = assignments;
    }

    /*  The courseInfo method prints course details just like in the 
        constructorFunctions version.

        Why?
        - Methods defined inside the class body automatically become 
          prototype methods.
        - This matches the UML structure where courseInfo() belongs to the class. */

    courseInfo() {
        console.log("Course: " + this.courseName +
            " | Instructor: " + this.instructor +
            " | Credit Hours: " + this.creditHours);

        console.log("Assignments >>>");

        // Loop through and call the shared method printAssignment()
        
        for (let a of this.assignments) {
            a.printAssignment();
        }
    }
}



// Creating objects using class syntax.

let a1 = new Assignment("Project Proposal", "Jan 15");
let a2 = new Assignment("Midterm Report", "Feb 20");
let a3 = new Assignment("Final Report", "Mar 30");
let a4 = new Assignment("Presentation", "Apr 10");

let c1 = new Course("Software Engineering", "Dr. Pepper", 3, [a1, a2]);
let c2 = new Course("Data Science", "Dr. Evil", 6, [a3, a4]);

//  Displaying output -- to match plainObjects.js

c1.courseInfo();
c2.courseInfo();
