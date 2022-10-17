class Monitor {
  brand; // Public
  _resolution; // Protected
  #display; // Private

  constructor(brand, resolution, display) {
    this.brand = brand;
    this._resolution = resolution;
    this.#display = display;
  }

  // Create static methods for different number of params
  static Brand(brand) {
    return new Monitor(brand, null, null);
  }

  static BrandAndResolution(brand, resolution) {
    return new Monitor(brand, resolution, null);
  }

  static BrandAndResolutionAndDisplay(brand, resolution, display) {
    return new Monitor(brand, resolution, display);
  }

  // Getters
  get brand() {
    return this.brand
  }

  get resolution() {
    return this._resolution
  }

  get display() {
    return this.#display
  }

  // Setters
  set changeBrand(newBrand) {
    this.brand = newBrand
  }

  set changeResolution(newResolution) {
    this._resolution = newResolution
  }

  set changeDisplay(newDisplay) {
    this.#display = newDisplay
  }

  // Methods
  toString() {
    if (!this._resolution && !this.#display) {
      const jsonFormat = {
        "properties": {
          "brand": this.brand
        }
      }
      return jsonFormat;

    } else if (!this.#display) {
      const jsonFormat = {
        "properties": {
          "brand": this.brand,
          "resolution": this._resolution
        }
      }
      return jsonFormat;

    } else {
      const jsonFormat = {
        "properties": {
          "brand": this.brand,
          "resolution": this._resolution,
          "display": this.#display
        }
      }
      return jsonFormat;
    }
  }


}

const newMonitor1 = Monitor.Brand("Asus");
const newMonitor2 = Monitor.BrandAndResolution("Apple", "1920*1080");
const newMonitor3 = Monitor.BrandAndResolutionAndDisplay("LG", "1920*1080", "LCD");

console.log(newMonitor1);
console.log(newMonitor1.toString());

console.log(newMonitor2);
console.log(newMonitor2.toString());

console.log(newMonitor3);
console.log(newMonitor3.toString());