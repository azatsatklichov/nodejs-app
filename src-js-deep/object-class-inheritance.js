class HotSauce {
    // Fields here are added to this, so they are available
    // via this.units and this.maxHotness in methods
    units = 'gram'
    maxHotness = 20000000
    constructor(name, hotness) {
        // We can assign arguments from new instances of
        // our class to this as well
        this.hotness = hotness
        this.name = name
    }
    getName() {
        if (this.hotness < this.maxHotness) {
            return `${this.name} is ${this.hotness} ${this.units}`
        }
        else {
            return `${this.name} is too hot!`
        }
    }
}

/**
 * * Meanwhile, outside of constructors, you can only use super in the 
         * form super[field] or super.field to call upon parent properties. 
         * In fact, if you try to call it as a function outside of the constructor, 
         * an error will be thrown. That means in a class’s methods, we can use super only to
         * reference properties of the parent class. So for example, if we wanted to use 
         * our parents method, getName(), in our child class VeganHotSauce, 
         * then we’d call super.getName():
         * 
 */
class VeganHotSauce extends HotSauce {
    constructor(meat, name, hotness) {
        super(name, hotness)
        this.meat = meat
    }
    checkMeatContent() {
        console.log()
        /*

         we can’t call super.units – and 
         that’s because units are not on the prototype of VeganHotSauce.
         */
        if (this.meat) {
            return "this is not vegan.. but " + super.getName() 
        }
        else {
            return "no meat detected.. and " + super.getName()
        }
    }
}

let newVeganOption = new VeganHotSauce(false, "Vegan Lite", 2400)
console.log(newVeganOption)
console.log(newVeganOption.checkMeatContent())

