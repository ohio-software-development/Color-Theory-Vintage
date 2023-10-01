export default class Item {
    constructor(srcImage, price = "Variable", size = "No Size", brand = "Unknown Brand", description = "", catagory="Unkown", condition="Null") {
      this.srcImage = srcImage;
      this.price = price;
      this.size = size;
      this.brand = brand;
      this.description = description;
      this.catagory = catagory;
      this.condition = condition
    }
}