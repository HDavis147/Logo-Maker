// Create triange, circle, square classes
// Try creating a shapes parent class to stay DRY

class Shape {
  constructor({ text, textColor, shape, shapeColor }) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }
} 

class Circle extends Shape {
  render() {
    return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect width="100%" height="100%" fill="${this.shapeColor}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="50%, 0 0, 100% 100%, 100%" fill="${this.shapeColor}" />`;
  }
}

module.exports = Shape;