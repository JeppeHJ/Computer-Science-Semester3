// opgave10.1.js
class Person {
    constructor(navn) { 
        this.navn = navn; 
    }
    toString() { 
        return this.navn; 
    }
    equals(p) {
        if (p.__proto__ === Person.prototype && p.navn === this.navn) {
            return true;
        } else {
            return false;
        }
    }
    static compare(p1, p2) {
        if (p1.navn > p2.navn) {
            return 1;
        } else if (p1.navn < p2.navn) {
            return -1;
        } else {
            return 0;
        }
    }

}
class Studerende extends Person {
    constructor(navn, id) { 
        super(navn); this.id = id; 
    }
    toString() { 
        return super.toString() + ": " + this.id; 
    };

    equals(s) {
        if (s.constructor === Studerende && s.id === this.id && s.navn === this.navn) {
            return true;
        } else {
            return false;
        }
    }
}


let p1 = new Person("Viggo");
let p2 = new Person("Viggo1");
let p3 = new Person("Viggo2");
let p4 = new Person("Viggo3");
let p5 = new Person("Viggo4");

let s1 = new Studerende("Ida", 123);
let s2 = new Studerende("Ida2", 123);

let liste = [p1, p2, p5, p3, s1, s2, p4];

class Kat {
    constructor(navn) { this.navn = navn; }
    toString() { return 'Kat: ' + this.navn; };
}

console.log(liste);
liste.sort(Person.compare);
console.log(liste);