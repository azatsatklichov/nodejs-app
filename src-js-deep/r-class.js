let HotSauce2 = class {
    // Fields here are added to this, so they are available
    constructor(name, hotness) {
        // We can assign arguments from new instances of our class to this as well
        this.hotness = hotness
        this.name = name
    }

    getName() {
        if(this.hotness < this.maxHotness) {
            return `${this.name} is ${this.hotness} ${this.units}`
        }
        else {
            return `${this.name} is too hot!`
        }
    }
}
let newSauce = new HotSauce2('Chilli Wave', 4600)
//Console logs 'Chilli Wave is too hot!'
console.log(newSauce.getName())



let Utility = class {
    static className = "Utility Functions"
    static author = "Some Author"
    static classDetails() {
        return `${this.className} by ${this.author}`
    }
}

// Utility Functions by Some Author
console.log(Utility.classDetails())



///you can not call static method by instance 
let callUtility = new Utility()
console.log(callUtility.classDetails())


//redefine classDetails() to something completely different:
Utility.myMethodNotReturnText = function() { 
    return "Some return text"
}

