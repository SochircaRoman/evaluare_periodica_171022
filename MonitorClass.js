class Monitor {
  brand; // Public
  resolution; //Public
  #dislay; //Private

  constructor(brand, resolution, dislay) {
    this.brand = brand;
    this.resolution = resolution
    this.#dislay = dislay
  }

  // Getters
  get brand() {
    return this.brand
  }

  get resolution() {
    return this.resolution
  }

  get dislay() {
    return this.#dislay
  }

  // Setters
  set changeBrand(newBrand) {
    this.brand = newBrand
  }

  set changeResolution(newResolution) {
    this.resolution = newResolution
  }

  set changeDislay(newDislay) {
    this.#dislay = newDislay
  }

  // Methods
  toString() {
    const jsonFormat = {
      "properties": {
        "brand": this.brand,
        "resolution": this.resolution,
        "display": this.#dislay
      }
    }
    return jsonFormat;
  }

  
}

newMonitor = new Monitor("Asus", "1234*5678", "LCD");
console.log(newMonitor.toString());