
class Case {
  // Object which represent a tile of the game map
  constructor() {
      this.name = "default";
  }

  getNom() {
    return this.name;
  }

}

class Matrix {
  // Object for matrix representation
  constructor(width, height, defaultValue = 0) {

      this.width = width ;
      this.height = height;
      this.values = new Array();
      let i = 0;
      while (i < width*height) {
        this.values[i] = defaultValue;
        i++;
      }
  }


}

// Test Area

test = new Case();

console.log(test.name);
console.log(test.getNom());
