function Animal(name, age) {
    this.name = name;
    this.age = age;
}

Animal.prototype.canRun = function() {
    console.log("Yes, this can RUN");
}

let tiger = new Animal("Jeppe", 15);
tiger.canRun();

function Human(name, age, money) {
    Animal.call(this, name, age);
    this.money = money;
}

Human.prototype.canEarn = function() {
    console.log("Yes, this can EARN");
}

let human1 = new Human("Jeppe2", 16, 16000);
let human2 = new Human("Jeppe3", 21, 1111);
human1.canEarn();

Human.prototype.__proto__ = Animal.prototype;

human2.canRun = function() {
    console.log(this.name + " has a different running style.");
};

human2.canRun();
human1.canRun();