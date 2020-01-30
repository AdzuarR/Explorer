
class Case {
  // Object which represent a tile of the game map
  constructor() {
      this.name = "default";
      this.src = 'https://images-na.ssl-images-amazon.com/images/I/61QX5rSzAsL._AC_SX679_.jpg'
  }

  getNom() {
    return this.name;
  }
  getSrc(){
    return this.src;
  }
  toImg(width, height){
    let img = document.createElement('img');
    img.setAttribute('src', this.src);
    img.setAttribute('width', width);
    img.setAttribute('height', height);
    return img;
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

class Map {
  // Used for showing the main fram in html format
  constructor(matrix){
    this.matrix = matrix;
  }

  printMap(){
    let table = document.getElementById("map");
    let row = table.insertRow();
    let cell = row.insertCell();
    cell.textContent = "prout";
    let cell2 = row.insertCell();
    cell2.textContent = "BOB";


    while (table.firstChild) {
      table.removeChild(table.firstChild);
    }



    for (let i = 0 ; i < this.matrix.getLines() ; i++){

      let row = table.insertRow();

      for (let j = 0 ; j < this.matrix.getColumns() ; j++){

        let cell = row.insertCell();
        // For debug`
        //cell.textContent = "{"+i+"_"+j+"}";
        cell.appendChild(this.matrix.getValue(i,j).toImg(32,32));
      }

    }

  }

}

// Test Area

test = new Case();
matriceTest = new Matrix(10,10,0);
mTC = new Matrix(80,80,test);
Mapping = new Map(mTC);
Mapping.printMap();

console.log(test.getSrc());

console.log(test.name);
console.log(test.getNom());

console.log(matriceTest);
console.log(mTC);
console.log(mTC.getColumns());
console.log(mTC.getLines());

mTC.setValue(2,1,5);
mTC.getValue(2,1);
