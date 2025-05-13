class TemperatureConverter {
  constructor(celsius) {
    this.celsius = celsius;
  }

  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }

  static fromFahrenheit(f) {
    const celsius = (f - 32) / 1.8;
    return new TemperatureConverter(celsius);
  }
}


const temp = new TemperatureConverter(25);
console.log(temp.fahrenheit);

const tempFromF = TemperatureConverter.fromFahrenheit(77);
console.log(tempFromF.celsius); 