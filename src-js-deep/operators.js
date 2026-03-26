let a = false;
let b = false;
let c = false;

if(!a && !b && !c){
    console.log("inverse");
}
if(!(a || b || c)){
    console.log("mine-optimized");
}

console.log('------------------------==============-------------');