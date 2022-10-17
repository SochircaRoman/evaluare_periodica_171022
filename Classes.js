/*
 * Abstract Class Product.
 */
class Product {
  brand;
  _resolution;

  constructor(brand, resolution) {
    if (this.contructor == Product) {
      throw new Error("Abstract classes can't be instantiated.");
    }
    this.brand = brand;
    this._resolution = resolution;
  }

  // Getters
  get brand() {
    return this.brand
  }

  get resolution() {
    return this._resolution
  }

  // Setters
  changeBrand(newBrand) {
    this.brand = newBrand
  }

  changeResolution(newResolution) {
    this._resolution = newResolution
  }

  productType () {
    throw new Error("Method 'productType()' must be implemented.");
  }
}

/**
 * extended Monitor class
 */

 class Phone extends Product {
  #price; // Private

  constructor(brand, resolution, price) {
    super(brand, resolution);
    this.brand = brand;
    this._resolution = resolution;
    this.#price = price;
  }

  // Create static methods for different number of params
  static Brand(brand) {
    return new Phone(brand, null, null);
  }

  static BrandAndResolution(brand, resolution) {
    return new Phone(brand, resolution, null);
  }

  static BrandAndResolutionAndPrice(brand, resolution, price) {
    return new Phone(brand, resolution, price);
  }

  // Getters
  get price() {
    return this.#price
  }

  // Setters
  changePrice(newPrice) {
    this.#price = newPrice
  }

  // Methods
  toString() {
    if (!this._resolution && !this.#price) {
      const jsonFormat = {
        "properties": {
          "brand": this.brand
        }
      }
      return jsonFormat;

    } else if (!this.#price) {
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
          "price": this.#price
        }
      }
      return jsonFormat;
    }
  }

  // Method from abstract Product class
  productType () {
    console.log("Phone");
  }


}

/**
 * extended Monitor class
 */

class Monitor extends Product {
  #display; // Private

  constructor(brand, resolution, display) {
    super(brand, resolution);
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
  get display() {
    return this.#display
  }

  // Setters
  changeDisplay(newDisplay) {
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

  // Method from abstract Product class
  productType () {
    console.log("Monitor");
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
console.log(newMonitor3.productType());

const newPhone = Phone.BrandAndResolutionAndPrice("Xiaomi", "450*560", 2000)
console.log(newPhone.toString());
console.log(newPhone.brand);
console.log(newPhone.changeBrand("Apple"));
console.log(newPhone.brand);