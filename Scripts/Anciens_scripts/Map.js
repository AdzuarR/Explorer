// Classe à préciser, gérera probablement une partie de la logique ou de
// L'affiche du joueur
// Auteur : Adzuar Rémy the Giant snail
// Copyleft 2020


class Map{
  /**
  Classe destiné à gérer le background (Matrice) et les entité rattachée à cette
  matriceTest
  */

  constructor(mat){
    this.matrice = new Matrix(mat);
    this.matriceCopie = new Matrix(mat);

  }

  setPlayer(lin, col){
    this.matriceCopie.setValue(lin,col,1);
  }

  testMov(x,y){
    let valeurOriginale = this.matrice.getValue(2,2);
    this.matriceCopie.setValue(2,2,valeurOriginale);
  }

  printMap(){
    /**
    * Fonction qui rafraichi l'affiche du plateau de jeu dans la table de
    * index.html
    */
    let table = document.getElementById('map');

    // Suppression de l'ancien contenu
    while (table.firstChild){
      table.removeChild(table.firstChild);
    }
    for (let i = 0; i < this.matriceCopie.getHeight(); i++){
      let row = table.insertRow();

      for (let j = 0; j < this.matriceCopie.getWidth(); j++){
        let cell = row.insertCell();

        cell.innerHTML = this.matriceCopie.getValue(i,j).to_img();

      }


    }
  }

}

/*
*
* ############################################################################
* # ZONE DE TEST UNITAIRES ########################## ZONE DE TEST UNITAIRES #
* ############################################################################
*
*/

Test_map = new Map(matrice1);
Test_map.setPlayer(2,2);
Test_map.testMov();
Test_map.printMap();
