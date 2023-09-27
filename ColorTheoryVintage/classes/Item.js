export default class Item {
    constructor(srcImage, price = "Variable", size = "No Size", brand = "Unknown Brand") {
      this.srcImage = srcImage;
      this.price = price;
      this.size = size;
      this.brand = brand;
    }
  
    displayInfo() {
      console.log(`Image Source: ${this.srcImage}`);
      console.log(`Price: ${this.price}`);
      console.log(`Size: ${this.size}`);
      console.log(`Brand: ${this.brand}`);
    }
  }