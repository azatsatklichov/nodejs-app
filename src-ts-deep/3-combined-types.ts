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
