// Class représentant une case de la carte à afficher

class Case{

  constructor(index){
    let prop = list_Cases[index];
    this.name = prop['name'];
    this.src = prop['src'];
    this.solid = prop['solid'];
  }

  getSrc(){return this.src;}
  getSolid(){return this.solid;}

  to_img(){
    return "<img height = '32' width = '32' src='"+this.src+"'/>"
  }




}

/*
*
* ############################################################################
* # ZONE DE TEST UNITAIRES ########################## ZONE DE TEST UNITAIRES #
* ############################################################################
*
*/

caseTest = new Case(0);
console.log(caseTest);
let test = document.getElementById('map');
test.innerHTML = caseTest.to_img();
