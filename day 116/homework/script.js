
class Car {
  constructor(brand, model, year, image, audio) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.image = image;
    this.audio = audio;
  }

  getInfo() {
    return `${this.brand} ${this.model}, წელი: ${this.year}`;
  }
}

class BMW extends Car {
  constructor(model, year, image, audio, turbo) {
    super("BMW", model, year, image, audio);
    this.turbo = turbo;
  }

  getInfo() {
    return super.getInfo() + `, ტურბო: ${this.turbo}`;
  }
}

class Mercedes extends Car {
  constructor(model, year, image, audio, mode) {
    super("Mercedes-Benz", model, year, image, audio);
    this.mode = mode;
  }

  getInfo() {
    return super.getInfo() + `, მართვის რეჟიმი: ${this.mode}`;
  }
}

class Audi extends Car {
  constructor(model, year, image, audio, quattro) {
    super("Audi", model, year, image, audio);
    this.quattro = quattro;
  }

  getInfo() {
    return super.getInfo() + `, Quattro: ${this.quattro}`;
  }
}

const cars = {
  bmw: new BMW("M5", 2022, "bmw.jpg", "bmw.mp3", true),
  mercedes: new Mercedes("C300", 2023, "mercedes.jpg", "mercedes.mp3", "Comfort"),
  audi: new Audi("RS5", 2021, "audi.jpg", "audi.mp3", true)
};

let currentCar = null;

function showCarInfo(key) {
  currentCar = cars[key];
  document.getElementById("carImage").src = currentCar.image;
  document.getElementById("carSpecs").innerText = currentCar.getInfo();
  document.getElementById("carAudio").src = currentCar.audio;
}

function getCarInfo() {
  if (currentCar) {
    alert(currentCar.getInfo());
  }
}

function playSound() {
  const audio = document.getElementById("carAudio");
  audio.play();
}