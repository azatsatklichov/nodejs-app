class Mobile { //... 
}
class Tablet { //... 
}        


//union types used for parameters and return types
function getReport1(id: number | string) {
        //TBD         
} 

//intersection types
function getReport2(id: Mobile & Tablet) { //all properties must match
        //TBD         
}

interface Work {
   does(): void; 
}

//mixins
class Emp {
   position: string;     
}

//using like interfaces ;)  TS threads class as interface here 
class RandD implements Work, Emp {
    does(): void {
       console.log('doing a research and development'); 
    }
    //must have this
    position: string;     
}

//function applyMixins() 
//string literals - acts like distinct types  
let mr : 'Mister'; //type of variable
let mr1: 'Mister' = 'Mister';
let mr2: 'Mister' = 'Madam'; // err
//gives enum like behavior, e.g. to finite values
let mr3: 'Mister' | 'Madam' = 'Madam';
let mr4: 'Mister' | 'Madam' = 'Miss';//err

//type aliases
let mr5: 'Mister' | 'Madam' | 'Miss' = 'Miss';
type mrCategory= 'Mister' | 'Madam' | 'Miss';
let mr6: mrCategory= 'Madam';
let mr7: mrCategory= 'Madam';
let mr8: mrCategory= 'Mrs'; // err - is not assignable to type
