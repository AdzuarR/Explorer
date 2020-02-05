// Class contenant une matrice de valeur et l'API pour acceder à ces valeurs

class Matrix{
  constructor(DicoMat){
    this.width = DicoMat['width'];
    this.height = DicoMat['height'];
    this.values = DicoMat['valuesList'];
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

Mat = {"height":3,
  "width" : 5,
  "valuesList" : [0,1,2,3,4,
                  1,2,3,4,5,
                  2,3,4,5,6]
                }

Matrice = new Matrix(Mat);
console.log(Matrice.getWidth());
console.log(Matrice.getHeight());
