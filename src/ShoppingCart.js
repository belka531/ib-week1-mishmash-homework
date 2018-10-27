module.exports = class {
  constructor(name) {
    this.name = name;
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  addItem(itemName, quantity, price) {
    this.items.push({
      name: itemName,
      quantity: quantity,
      pricePerUnit: price,
    });
  }

  clear() {
    this.items = [];
  }

  total() {
    return this.items.reduce((acc, value) => acc + (value.pricePerUnit * value.quantity), 0);
  }
}