class vehicle {
        #chassi
        #speed
    constructor(type, brand, color, speed, passangers, chassi) {
        this.type = type;
        this.brand = brand;
        this.color = color;
        this.#speed = speed;
        this.passangers = passangers;
        this.#chassi
    }
    gas = function () {
        this.speed += 10;
        console.log(this.speed)
    }
    brake = () => {
        if (this.#speed > 0) {
            this.#speed -= 10;
            console.log(`${this.#speed}km/h`)
        }
    }
}

class plane extends vehicle {
    #mach
    constructor(type, brand, color, mach, passangers, company){
        super(type, brand, color, mach, passangers, company);
        this.company = company;
        this.mach = 0;
    }
    gas = function (){
        this.#mach += 0.1;
        console.log(`${this.#mach}mach`)
    }
    brake = () => {
        if (this.#mach > 0) {
            this.#mach -= 0.1;
            console.log(`${this.#mach}mach`)
        }
    }
    setVelocidade = function (valor) {
        this.#mach = valor
    }
    getVelocidade = function (){
        return this.#mach
    }
}


class ship extends vehicle {
    #nos
    constructor(type, brand, color, nos, passangers, size){
        super(type, brand, color, nos, passangers, size);
        this.size = size + "pés";
        this.nos = 0;
    }
    gas = function (){
        this.#nos += 10;
        console.log(`${this.nos}nós`)
    }
    brake = () => {
        if (this.#nos > 0) {
            this.#nos -= 10;
            console.log(`${this.nos}nós`)
        }
    }
}

const creation = () => {
    const car = new vehicle('Wagon', 'Volkswagen', 'Petroleum blue', 0, 5)
    const f14Atomcat = new plane ('Combate', 'Boeing', 'Metal', 0 , 2, 'Marinha')
    const iate = new ship('Iate', 'Royal', 'White', 0, 20, 56)

    console.log(car);
    car.gas();
    car.brake();

    console.log(f14Atomcat);
    f14Atomcat.gas();
    f14Atomcat.brake();

    console.log(iate);
    iate.gas();
    iate.brake();

    console.log(f14Atomcat.setVelocidade(10))
    console.log(f14Atomcat.getVelocidade());

}
creation();