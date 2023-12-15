const dns = require("dns");
/**
 * 
 * dnsPromises.resolve( hostname, rrtype )
Parameters: This method has two parameters as mentioned above and described below:

hostname: This parameter specifies a string which denotes the hostname to be resolved.
rrtype: It specifies resource record type. Its default value is ‘A’. The values are from ‘A’, ‘AAAA’, ‘ANY’, ‘CNAME’, ‘MX’, ‘TXT’, ‘NS’, ‘NAPTR’, ‘PTR’, ‘SOA’, ‘SRV’.

A: IPv4 address
AAAA: IPv6 address
ANY: Any records
CNAME: Canonical name records
MX: Mail exchange records
NAPTR: Name authority pointer records
NS: Name server records
PTR: Pointer records
SOA: Start of authority records
SRV: Service records
TXT: Text records
 */
const dnsPromises = dns.promises;
// Set the rrtype value for
// dnsPromises.resolve() method
const rrtype2 = "NS";
// Calling dnsPromises.resolve() method
dnsPromises.resolve("geeksforgeeks.org", rrtype2).then((res) => {
  console.log(res);
});

//2
// Setting options for dnsPromises.lookup() method
const options = {
  // Setting family as 6 i.e. IPv6
  family: 6,
  hints: dns.ADDRCONFIG | dns.V4MAPPED,
};

// Calling dnsPromises.lookup() for hostname
// geeksforgeeks.org
dnsPromises.lookup("geeksforgeeks.org", options).then((response) => {
  console.log(" family: IPv%s address: %j", response.family, response.address);
});

//4
// Setting options for dnsPromises.lookup()
//  method, all as true
const optionsz = {
  all: true,
};

// Asynchronous function
(async function () {
  // Address from lookup function
  const addresses = await dnsPromises.lookup("geeksforgeeks.org", optionsz);

  // Printing  addresses
  console.log("from async: ");
  console.log(addresses);
})();

//5
// Calling dnsPromises.lookupService() method
// for 127.0.0.1 port  number 22
dnsPromises.lookupService("127.0.0.1", 22).then((res) => {
  console.log(res.hostname, res.service);
});

//7
const optionsk = {
  // Setting family as 4 i.e. IPv4
  family: 4,
  hints: dns.ADDRCONFIG | dns.V4MAPPED,
};

dnsPromises.lookup("geeksforgeeks.org", optionsk).then((response) => {
  if (response) {
    console.log(response);

    // Calling dnsPromises.lookupService() method
    dnsPromises.lookupService(response.address, 80).then((res) => {
      console.log(res.hostname, res.service);
    });
  }
});


//8   
// Calling dnsPromises.resolveNs() method 
dnsPromises.resolveNs('google.com').then((res) => {
    console.log("for google : ");
    console.log(res);
});

//9
// Accessing promises object from dns module
const { Resolver } = require('dns').promises;
  
// Calling Resolver constructor
const dnsPromises2 = new Resolver();
   
// Asynchronous function 
(async function() {
      
    // Address from getServers function
    const addresses = await dnsPromises2.getServers();
      
    // Printing  addresses
    console.log(addresses);   
})();
 