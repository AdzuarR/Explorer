// Classe contenant les informations à propos du joueur


class Joueur{
  constructor(nom,pointsDeVie, attaque, defense,positionX, positionY){
    this.nom = nom;
    this.pdv = pointsDeVie;
    this.attaque = attaque;
    this.defense = defense;
    this.x = positionX;
    this.y = positionY;
  }

  getNom(){return this.nom;}

  getPointsDeVie(){return this.pointsDeVie;}
  setPointsDeVie(pointDeVie){ this.pointsDeVie = pointDeVie;}

  getAttaque(){ return this.attaque}
  setAttaque(att){ this.attaque = att;}

  getDefense(){ return this.defense;}
  setDefense(def){this.defense = def;}

  getX(){ return this.positionX;}
  setX(x){this.positionX = x;}

  getY(){return this.positionY;}
  setY(y){this.positionY = y;}

  couple(){
    res = this.getX, this.getY;
    return res;
  }

/*
*
* ############################################################################
* # ZONE DE TEST UNITAIRES ########################## ZONE DE TEST UNITAIRES #
* ############################################################################
*
*/

joueur = new Joueur();

joueur.setPointsDeVie(10);
console.log("Pointds de vie "+joueur.getPointsDeVie());

joueur.setX(2);
joueur.setY(1);

joueur.couple();

