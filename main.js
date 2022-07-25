class Temperature {
    celsius;

    constructor(celsius) {
        this.celsius = celsius;
    }

    fahrenheit() {
        return 9 / 5 * this.celsius + 32;
    }

    kelvins() {
        return this.celsius + 273.15
    }
}

let temperature = new Temperature(45);
let myFahrenheit = temperature.fahrenheit();
let myKelvins = temperature.kelvins();

document.write("Nhiệt độ K: " + myKelvins + "<br>" + "Nhiệt độ F: " + myFahrenheit)

