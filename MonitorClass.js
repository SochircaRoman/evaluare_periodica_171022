class Monitor {
  brand; // Public
  resolution; //Public
  #dislay; //Private

  constructor(brand, resolution, dislay) {
    this.brand = brand;
    this.resolution = resolution
    this.#dislay = dislay
  }
}