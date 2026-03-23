

//1. Arrays
// Define an array of tasks
let tasks =  ['Write blog post', 'Review code', 'Push to GitHub'];

// Add a new task
tasks.push('Update LinkedIn profile');
// Remove the last task
const lastTask = tasks.pop();
console.log(lastTask);
// Iterate over tasks
tasks.forEach((task, index) => {
  console.log(`${index + 1}: ${task}`);
});


//2. Linked Lists
/**
 * Linked lists consist of nodes, each containing data and a reference to the next node. They’re ideal for applications requiring efficient insertions and deletions.
 */
 