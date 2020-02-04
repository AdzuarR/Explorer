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
    this.matrice = mat;
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
    for (let i = 0; i < this.matrice.getHeight(); i++){
      let row = table.insertRow();

      for (let j = 0; j < this.matrice.getWidth(); i++){
        let cell = row.insertCell();

        cell.appendChild(this.matrice.getValue(i,j));

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

Test_map = new Map(Matrice);

Test_map.printMap();
