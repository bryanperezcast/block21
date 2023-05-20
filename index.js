class Car {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    get getDescription(){
            return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
        }
}
class ElectricCar extends Car {
    constructor (make, model, year, range){
        super(make, model, year);
        this.range = range;
    }
    get getDescription() {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Range ${this.range}`;
    }
}
const tesla = new ElectricCar('Tesla', 'Model S', '2019', '300');
const toyota = new Car('toyota', 'camry', '2003');
console.log(tesla.getDescription)
console.log(toyota.getDescription)