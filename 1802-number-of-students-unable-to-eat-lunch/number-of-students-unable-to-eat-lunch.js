
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    // Step 1: Count student preferences for type 0 and type 1
    const counts =[0, 0];
    for (const preference of students) {
        counts[preference]++;
    }
    
    // Step 2: Match sandwiches from the stack top-to-bottom
    for (const sandwich of sandwiches) {
        if (counts[sandwich] > 0) {
            counts[sandwich]--; // A student takes the sandwich and leaves
        } else {
            // No remaining students want this sandwich type; queue is locked
            break;
        }
    }
    
    // Step 3: Total remaining students who didn't eat
    return counts[0] + counts[1];
};
