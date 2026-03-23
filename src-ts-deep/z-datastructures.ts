// Define an array of tasks
let tasks: string[] = ['Write blog post', 'Review code', 'Push to GitHub'];

// Add a new task
tasks.push('Update LinkedIn profile');
// Remove the last task
const lastTask = tasks.pop();
// Iterate over tasks
tasks.forEach((task, index) => {
  console.log(`${index + 1}: ${task}`);
});