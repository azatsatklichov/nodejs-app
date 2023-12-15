// Accessing v8 module
const v8 = require('v8');
  
// Calling v8.serialize() 
serialized_data = v8.serialize("abcdefg");
console.log("\nSerialized data is ");
console.log(serialized_data);
  
serialized_data = v8.serialize(58375693);
console.log("\nSerialized data is ");
console.log(serialized_data);
  
serialized_data = v8.serialize(73847.0234);
console.log("\nSerialized data is ");
console.log(serialized_data);
  
serialized_data = v8.serialize('\n');
console.log("\nSerialized data is ");
console.log(serialized_data);


//// Calling v8.deserialize() 
deserialized_data = v8.deserialize(v8.serialize("abcdefg"));
console.log("\nDeserialized data is ");
console.log(deserialized_data);
  
deserialized_data = v8.deserialize(v8.serialize(58375693));
console.log("\nDeserialized data is ");
console.log(deserialized_data);
  
deserialized_data = v8.deserialize(v8.serialize(73847.0234));
console.log("\nDeserialized data is ");
console.log(deserialized_data);
  
deserialized_data = v8.deserialize(v8.serialize('Geek'));
console.log("\nDeserialized data is ");
console.log(deserialized_data);


///Serializer
const serializer = new v8.Serializer();
  
// Calling v8.serializer.writeUint64() method
// Nothing is returned so, this should 
// print undefined
console.log(serializer.writeUint64(5783, 78374));
console.log(serializer.releaseBuffer());