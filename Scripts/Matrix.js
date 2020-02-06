// Class contenant une matrice de valeur et l'API pour acceder à ces valeurs

class Matrix{
  constructor(DicoMat){
    this.width = DicoMat['width'];
    this.height = DicoMat['height'];
    this.values = [];

    for (let i = 0; i <this.width*this.height; i++){

      //let valueSrc = DicoMat["valueList"][i];

      this.values[i] = test;

    }
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
*/

test = new Case(0);

Mat = {"height":3,
  "width" : 5,
  "valuesList" : [0,0,0,0,0,
                  0,0,0,0,0,
                  0,0,0,0,0]
                }

Matrice = new Matrix(Mat);
console.log(Matrice.getWidth());
console.log(Matrice.getHeight());
