//https://www.geeksforgeeks.org/node-js-v8-complete-reference/
const v8 = require("v8");

// Calling v8.cachedDataVersionTag()
tag = v8.cachedDataVersionTag();
console.log("cache data version tag is " + tag);

// User defined function
function getTagVersion() {
  // Initializing with zero
  var tagVersion = 0;

  // Calling v8.cachedDataVersionTag()
  tagVersion = v8.cachedDataVersionTag();

  return tagVersion;
}

// Function call
var result = getTagVersion();
// Printing Tag version
console.log("The Cache Data Version is:", result);



stats = v8.getHeapSpaceStatistics();   

// Calling v8.getHeapSpaceStatistics() 
console.log(stats);


var myList = []
for (var i = 0; i < stats.length; i++){    
  var element = stats[i];
  
  myList.push({ "Space Name": element['space_name'], 
  "Space Size": element['space_size'], 
  "Used Space Size": element['space_used_size'], 
  "Space Available": element['space_available_size'], 
  "Physical Space Size":element['physical_space_size'] },  
  );
}
  
// Printing in tabular form
console.table(myList)
