
/*
 *Understanding Backpressure Manually
Backpressure occurs when the Readable stream produces data faster than the Writable stream can consume it. While pipeline() handles this for you, here is how you would manage it manually using events: 
write() return value: If writable.write(chunk) returns false, it means the internal buffer has reached its highWaterMark (default 16KB). You must stop writing immediately.
The drain event: Once the buffer is empty and it is safe to write again, the Writable stream emits a 'drain' event. 
 */

function writeLargeData(writer, data) {
  let i = 1000000;
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        // Last time!
        writer.write(data);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        ok = writer.write(data);
      }
    } while (i > 0 && ok);

    if (i > 0) {
      // Had to stop early!
      // Write some more once it drains.
      writer.once('drain', write);
    }
  }
  write();
}