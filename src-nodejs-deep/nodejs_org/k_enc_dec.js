/**
 * The stringDecoder.end() method is used to return all the remaining 
 * input stored in the internal buffer as a string. This method ensures 
 * that any incomplete UTF-8 and UTF-16 characters are replaced with 
 * substitution characters that are appropriate for character encoding.
 */
 const { StringDecoder } = require("string_decoder");
  
 const decoder = new StringDecoder("utf-8");
   
 //stringDecoder.end( [buffer] )

 // Using the end() method
 const text_one = Buffer.from("GeeksforGeeks Ý ¨", "UTF-8");
 let decoded_text = decoder.end(text_one);
 console.log("Decoded Text:", decoded_text);

 const decoder2 = new StringDecoder("utf-16");
 const text_one2 = Buffer.from("GeeksforGeeks Ý ¨", "UTF-16");
decoded_text = decoder2.end(text_one2);
 console.log("Decoded Text:", decoded_text);
   
 // The Euro Symbol is denoted using
 // the bytes [0xE2, 0x82, 0xAC]
   
 console.log("Decoding the Euro Symbol:");
   
 // Decoding the euro symbol
 // Using the write() method to
 // write the first two parts
 console.log(decoder.write(Buffer.from([0xE2])));
 console.log(decoder.write(Buffer.from([0x82])));
   
 // Finishing the symbol using the end() method
 // with that gives an additional call to write()
 // using the last part of the buffer
 console.log(decoder.end(Buffer.from([0xAC])));
 console.log(decoder.end(Buffer.from('Ý')));
 console.log(decoder.end(Buffer.from('¨')));