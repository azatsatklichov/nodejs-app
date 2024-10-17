let productId: string | number = "12-34-56";
//TS has narrowed the union type based on the assignment
fetchProduct(productId);
productId = 123456; // OK
fetchProductBySerialNumber(productId); // OK
//You reused a variable This was confusing for the type checker and would be confusing for a human reader, too. 


//better solution 
const productId2 = "12-34-56";
fetchProduct(productId2);
const serial = 123456; // OK
fetchProductBySerialNumber(serial); // OK


//This is not to be confused with “shadowed” variables
{
    const productId = 123456; // OK, shadowed
    fetchProductBySerialNumber(productId); // OK
}




function fetchProduct(productId: string) {
    //TBD - some calc
}


function fetchProductBySerialNumber(productId: number) {
    //TBD - some calc
}