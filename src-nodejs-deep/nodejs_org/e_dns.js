/**
 * DNS is a node module used to do name resolution facility which is provided by the operating system as well as used to do an actual DNS lookup.

DNS is a node module used to do name resolution facility which is provided by the operating system as well as used to do an actual DNS lookup.

No need for memorising IP addresses – DNS servers provide a nifty solution of converting domain or subdomain names to IP addresses.
*/
const dns = require("dns");

// Reading IP address of the current host
// and printing it to the console
console.log("Servers: " + dns.getServers());

const website = "sahet.net";
// Call to lookup function of dns
dns.lookup(website, (err, address, family) => {
  console.log("address of %s is %j family: IPv%s", website, address, family);
});

// Call to reverse function along with lookup function.
dns.lookup("www.geeksforgeeks.org", function onLookup(err, address, family) {
  console.log("address:", address);
  dns.reverse(address, function (err, hostnames) {
    console.log("reverse for " + address + ": " + JSON.stringify(hostnames));
  });
});

/**
 * dns.lookup( hostname, options, callback )
Parameters: This method has three parameters as mentioned above and described below:

hostname: This parameter specifies a string which denotes the hostname to be checked.

options: It is in the form of an integer or an object. It specifies the options to be used during lookup.
family: It is an integer value that specifies the family of the record. The value must be in 4, 6 or 0 where 0 indicates to return both IPv4 and IPv6 value, 4 indicates to return IPv4 and 6 indicates to return IPv6. Its default value is 0.
hints: It is a number that specifies one or more getaddrinfo flag(s). More than one flags can be passed by doing bitwise OR of their values.
all: It is a Boolean parameter. If it set to TRUE then callback returns all resolved address in an array otherwise it returns single address. Its default value is FALSE.
verbatim: It is a Boolean parameter. If its value is set to TRUE then callback get all resolved IPv4 and IPv6 address as returned by DNS resolver unordered. If set to FALSE IPv4 addresses are placed before IPv6 addresses. Default value is FALSE now but expected to be TRUE in near future.

callback: It specifies a function to be called after DNS resolution of the hostnames is done.
          error:It specifies error if generated. For example ‘ENOTFOUND’ is set if the hostname does not exist or the lookup fails.
          address: It is a string representation of IPv4 and IPv6 addresses.
          family: It is an integer value that specifies the family of the record. The value must be in 4, 6 or 0 where 0 indicates it’s not an IPv4 or IPv6 address. 0 is an indicator of fault in the name resolution service used by the operating system.
 * 
 */
// Setting options for dns.lookup() method
const options = {
  // Setting family as 6 i.e. IPv6
  family: 6,
  hints: dns.ADDRCONFIG | dns.V4MAPPED,
};

// Calling dns.lookup() for hostname geeksforgeeks.org
// and displaying them in console as a callback
dns.lookup("geeksforgeeks.org", options, (err, address, family) =>
  console.log("address: %j family: IPv%s", address, family)
);

// Setting options for dns.lookup()
// method, all as true
const options2 = {
  all: true,
};

// Calling dns.lookup() for hostname
//  geeksforgeeks.org and displaying
// them in console as a callback
dns.lookup("geeksforgeeks.org", options2, (err, addresses) =>
  console.log("addresses: %j", addresses)
);

///dns.lookupService() method in Node.js:
/**
 * Parameters: This method has three parameters as mentioned above and described below:

address: It specifies a string which denotes the address to be resolved.
port: It is a number that specifies the port number of the address whose service is to be resolved.
callback: It specifies a function to be called after resolution of the address and port.
error: It specifies error if generated.
hostname: String representation of the hostname. e.g. geeksforgeeks.org
service: It’s a string, specifies name of the service. e.g. http
 */

// Calling dns.lookupService() method for
// 127.0.0.1 port  number 22
dns.lookupService("127.0.0.1", 22, (err, hostname, service) => {
  // Printing hostname and service as callback
  console.log(hostname, service);
});
dns.lookupService("77.93.218.9", 22, (err, hostname, service) => {
  // Printing hostname and service as callback
  console.log(hostname, service);
});

//2
dns.lookup("www.geeksforgeeks.org", options, (err, address, family) => {
  console.log("address:", address);
  if (err) {
    console.log(err.stack);
  } else {
    // Calling dns.lookupService() method
    dns.lookupService(address, 80, (err, hostname, service) => {
      if (err) {
        console.log(err.stack);
      }

      // Printing hostname and service
      // as callback
      console.log(hostname, service);
    });
  }
});

//3
dns.lookup("www.sahet.net", options, (err, address, family) => {
  console.log("address:", address);
  if (err) {
    console.log(err.stack);
  } else {
    // Calling dns.lookupService() method
    dns.lookupService(address, 80, (err, hostname, service) => {
      if (err) {
        console.log(err.stack);
      }

      // Printing hostname and service
      // as callback
      console.log(hostname, service);
    });
  }
});

/**
 * dns.resolve( hostname, rrtype, callback )
Parameters: This method accept three parameters as mentioned above and described below:

hostname: This parameter specifies a string which denotes the hostname to be resolved.
rrtype: It specifies the resource record type. Its default value is ‘A’. The list of records (‘A’, ‘AAAA’, ‘ANY’, ‘CNAME’, ‘MX’, ‘TXT’, ‘NS’, ‘NAPTR’, ‘PTR’, ‘SOA’, ‘SRV’) are described below:
A: IPv4 address
AAAA: IPv6 address
ANY: Any records
CNAME: canonical name records
MX: mail exchange records
NAPTR: name authority pointer records
NS: name server records
PTR: pointer records
SOA: start of authority records
SRV: service records
TXT: text records
callback: It specifies a function which to be called after DNS resolution of the hostname.
error: It specifies error if generated.
records: It’s string or object that signifies the returned record.
Return Value: This method returns error, records through callback function, These data are passed as parameters to the callback function.
 */

// Set the rrtype for dns.resolve() method
const rrtype = "A";

// Calling dns.resolve() method for hostname
// geeksforgeeks.org and print them in
// console as a callback
dns.resolve("geeksforgeeks.org", rrtype, (err, records) =>
  console.log("records: %j", records)
);

//2
// Set the options for dns.resolve6() method
const optionsg = {
  ttl: true,
};

// Calling dns.resolve6() method for hostname
// geeksforgeeks.org and displaying them in
// console as a callback
dns.resolve6("geeksforgeeks.org", optionsg, (err, address) =>
  console.log("address: %j", address)
);

/**
 * The dns.resolveSoa() method is an inbuilt application programming interface 
 * of the dns module which is used to resolve SOA or start of 
 * authority records for the specified hostname using DNS protocol.
 * 
 * dns.resolveSoa( hostname, callback )
 * 
Parameters: This method has two parameters as mentioned above and described below:

hostname: This parameter specifies a string which denotes the hostname to be resolved.
callback: It specifies a function to be called after DNS resolution of the hostnames.
error: It specifies error if generated.
addresses: It is an array of string that signifies the returned a start of authority(SOA) records for the hostname.

 */

// Calling dns.resolveSoa() method for hostname
//  geeksforgeeks.org and displaying them in
// console as a callback
dns.resolveSoa("geeksforgeeks.org", (err, addresses) =>
  console.log("start of authority(SOA) records: %j", addresses)
);
