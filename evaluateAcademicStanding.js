function evaluateAcademicStanding(GPA, major) {
    
//**************DO NO WRITE ABOVE THIS LINE********************

// 1. Inside the function, declare a variable called academicStanding.

// 2. Use conditional statements to determine the academic standing based on the GPA:
// - If GPA is greater than 3, set academicStanding to "Good".
// - If GPA is between 2 and 3, set academicStanding to "Average".
// - If GPA is less than or equal to 2, set academicStanding to "Probation".

// 3. Based on the academicStanding:
// - If academicStanding is "Good", use a switch statement to provide advice based on the major:
//   - For "Computer Science", display "Your academic standing is good. Consider taking advanced courses in algorithms and data structures."
//   - For "Engineering", display "Your academic standing is good. Focus on your core engineering courses."
//   - For "Business", display "Your academic standing is good. Explore internship opportunities in the business field."
//   - For any other major, display "Your academic standing is good. Plan your course schedule accordingly."
//   - Additionally, if GPA is greater than or equal to 3.5, display "Your academic standing is good. Plan your course schedule accordingly."

// - If academicStanding is "Average", use a switch statement to provide advice based on the major:
//   - For "Computer Science", display "Your academic standing is average. Consider seeking help from tutors for challenging courses."
//   - For "Engineering", display "Your academic standing is average. Attend review sessions for difficult subjects."
//   - For "Business", display "Your academic standing is average. Focus on improving your grades in core business courses."
//   - For any other major, display "Your academic standing is average. Review your study habits and seek academic advising if needed."
// - If academicStanding is "Probation", display "Your academic standing is below average. It's important to prioritize improving your grades and seeking academic support."
//**************DO NO WRITE BELOW THIS LINE********************

    return academicStanding; 
}

//Change values within the bracket below to check different cases for your code
evaluateAcademicStanding(3.2, "Engineering"); //evaluateAcademicStanding(GPA, "major");

module.exports = evaluateAcademicStanding;
