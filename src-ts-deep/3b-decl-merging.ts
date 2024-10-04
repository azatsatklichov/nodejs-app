interface Mashin {
    name: string;
    go(): () => void;
}

//somewhere in app another Mashin interface  
interface Mashin {
    color: string;
    stop(): () => void;
}

//TS compliler merges it and sees as single interface
class Volga implements Mashin {
    go(): () => void {
        throw new Error("Method not implemented.");
    }
    name: string;
    color: string;

    stop(): () => void {
        throw new Error("Method not implemented.");
    }
}

let v = new Volga(); 
