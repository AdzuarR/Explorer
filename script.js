
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
      }}

  // GETTERS SECTION
  getColumns(){
    return this.width;
  }
  getLines(){
    return this.height;
  }
  getValue(x,y){
    let position = x*this.width+y;
    return this.values[position]
  }

  // SETTERS SECTION

  setValue(x,y, newValue){
    let position = x*this.width+y;
    this.values[position] = newValue;
  }

}

// Test Area

test = new Case();
matriceTest = new Matrix(10,10,0);
mTC = new Matrix(5,4,test);

console.log(test.name);
console.log(test.getNom());

console.log(matriceTest);
console.log(mTC);
console.log(mTC.getColumns());
console.log(mTC.getLines());

mTC.setValue(2,1,5);
mTC.getValue(2,1);
