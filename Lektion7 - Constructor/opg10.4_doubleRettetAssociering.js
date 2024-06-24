class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.group = null;
    }
    addGroup(g) {
        if (this.group !== g) {
            this.group = g;
            g.addPerson(this);
        }
    }
}

class Gruppe {
    constructor() {
        this.list = [];
    }
    addPerson(p) {
        if (!this.list.includes(p)) {
            this.list.push(p);
            p.addGroup(this);
        }
    }
}
