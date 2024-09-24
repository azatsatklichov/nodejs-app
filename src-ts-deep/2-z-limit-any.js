var ageInYears;
//ageInYears = '12';
// ~~~~~~~ Type 'string' is not assignable to type 'number'.
ageInYears = '12'; // OK
//calc age  after one year - chaos 
ageInYears += 1; // OK; at runtime, ageInYears is now "121"
console.log(ageInYears);
function calculateAge(birthDate) {
    console.log(birthDate);
    return 1; //tbd
}
var birthDate = '1990-01-19';
calculateAge(birthDate); // OK
