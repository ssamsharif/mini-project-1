/*  In this file, we re-implement the Course and Assignment concepts 
    using *constructor functions*. 
    Constructor functions allow us to create multiple similar objects 
    without repeating code. They also let us attach methods to the 
    prototype so the methods are shared, not duplicated for every object. */


/*  ASSIGNMENT CONSTRUCTOR FUNCTION:

    The Assignment constructor creates new Assignment objects.
    Each assignment needs a title and a due date, so these are defined 
    as properties inside the constructor. These are unique per object. */

function Assignment(title, dueDate) {

    // These properties belong to the individual object being created.

    this.title = title;
    this.dueDate = dueDate;
}


/*  Attaching the printAssignment method to the prototype.

    Why?
    - Methods should be placed on the prototype so that all Assignment
      objects share one copy of the function.
    - This is more memory-efficient.
    - This matches how UML shows behavior belonging to the class, not
    - to each instance. */

Assignment.prototype.printAssignment = function () {
    console.log("   Title: " + this.title + " | Due Date: " + this.dueDate);
};

/*  COURSE CONSTRUCTOR FUNCTION:

    The Course constructor creates Course objects with the required
    attributes listed in the UML diagram. */

function Course(courseName, instructor, creditHours, assignments) {

    // These are instance-specific properties.

    this.courseName = courseName;
    this.instructor = instructor;
    this.creditHours = creditHours;


/*  The assignments property will hold an array of Assignment objects.
    We pass this array in so we can reuse the constructor to build 
    any Course with any number of assignments. */

    this.assignments = assignments;
}

/*  The courseInfo method is added to the Course prototype so that all
    Course objects share one copy of the function. 
 
    Why?
    - Matches proper JavaScript OOP design
    - Ensures consistency with the UML method section
    - Avoids duplicating the function in every object. */

Course.prototype.courseInfo = function () {
    console.log("Course: " + this.courseName +
        " | Instructor: " + this.instructor +
        " | Credit Hours: " + this.creditHours);

    console.log("Assignments >>>");

    // Loop through the assignemnts array and call the shared method.

    for (let a of this.assignments) {
        a.printAssignment();
    }
};

/*  Creating objects using the constructor functions.

    Now, we create Assignment objects using 'new Assignment(...)'.
    This aligns with the UML structure and replaces the plainObjects.js setup. */

let a1 = new Assignment("Project Proposal", "Jan 15");
let a2 = new Assignment("Midterm Report", "Feb 20");
let a3 = new Assignment("Final Report", "Mar 30");
let a4 = new Assignment("Presentation", "Apr 10");

/*  Courses are created using the Course Constructor.
    Each course receives an array of Assignment objects. */

let c1 = new Course("Software Engineering", "Dr. Pepper", 3, [a1, a2]);
let c2 = new Course("Data Science", "Dr. Evil", 6, [a3, a4]);

//  Displaying output -- to match plainObjects.js

c1.courseInfo();
c2.courseInfo();

