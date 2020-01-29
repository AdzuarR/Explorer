
class Case {
  constructor() {
      this.name = "default";
  }

  getNom() {
    return this.name;
  }

}

test = new Case();

console.log(test.name);
console.log(test.getNom());
