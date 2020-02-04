// Class contenant une matrice de valeur et l'API pour acceder à ces valeurs

class Matrix{
  constructor(width,height,defaultValue=0){
    this.width = width;
    this.height = height;
    this.values = [];
  }

  getWidth(){
    return this.width; 
  }

  getHeight(){
    return this.height;
  }

  getValue(lin,col){
    return this.values[lin*this.width+col];
  }

  setValue(lin,col,valeur){
    this.values[x*this.width+y] = valeur;
  }
}

/*
*
* ############################################################################
* # ZONE DE TEST UNITAIRES ########################## ZONE DE TEST UNITAIRES #
* ############################################################################
*
*/

let x = 4;
let y = 5;
Matrice = new Matrix(x,y);
console.log(Matrice.getWidth());
console.log(Matrice.getHeight());

