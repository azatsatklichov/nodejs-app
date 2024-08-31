//Finally, we can create static initializers to run upon class initialization. This lets us run some functionality when calling static properties or methods even though static methods cannot accept arguments. In the following example, we update the author static variable to “Hello World” upon class initialization:
let myUtlClass = class {
static className = "Utility Functions"
static author = "Some Author"
static {
this.author = "Hello World"
}
static classDetails() {
    console.log('initialized')
return `${this.className} by ${this.author}`
}
}
console.log(myUtlClass.classDetails()) // Utility Functions by Hello World


/**
 * Private Method Fields
Private method fields are not available outside of the class itself. 
While constructors in classes cannot be private, everything else can be. The following example shows 
a private field defined inside a class. Private fields are defined with a hash at the start:
 */
let myClass = class {
    #privateField = 1
    }
let newClass = new myClass()
