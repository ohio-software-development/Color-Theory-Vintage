export default class Item {
    constructor(srcImage, price = "Variable", size = "No Size", brand = "Unknown Brand", description = "", type="Unkown", condition="Null") {
      this.srcImage = srcImage;
      this.price = price;
      this.size = size;
      this.brand = brand;
      this.description = description;
      this.type = type;
      this.condition = condition
    }
}