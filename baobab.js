let empty_list = [];
class Possible_Fruit {
    constructor(powers, effect, season, name) {
        this.powers = powers;
        this.effect = effect;
        this.season = season;
        this.name = name;
    }
    toString() {
        return `${this.name} ${this.effect} ${this.powers} ${this.season}`;
    }
}
let fruits = new Possible_Fruit("changecolor", "gives energy", "wet", "big baobab");
empty_list.push(fruits);
console.log(fruits.toString());
console.log(empty_list);
class Seasons {
    constructor(seasons) {
        this.seasons = seasons;
    }
    predict_fruit() {
        for (let item of empty_list) {
            if (this.seasons === item.season) {
                console.log(`${item.name} was produced in this ${this.seasons} season`);
            }
        }
    }
}
let s = new Seasons("wet");
s.predict_fruit();

//Define the PossibleFruit class
// class PossibleFruit {
//     constructor(name, power, effects, season) { // fix typo and remove comma after last property
//       this.power = power;
//       this.name = name;
//       this.effects = effects;
//       this.season = season; // fix property name to match filter in predictFruit method
//     }
//   }
//   // Define the Season class
//   class Season {
//     constructor(name) {
//       this.name = name;
//     }
//   }
//   // Create some sample fruits and seasons
//   let fruits = [
//     new PossibleFruit("Baobab", "strength", "get strong", new Season("wet")),
//     new PossibleFruit("Banana", "energy", "boost energy", new Season("dry")),
//     new PossibleFruit("Mango", "immunity", "strengthen immunity", new Season("wet")),
//   ];
//   // Define the predictFruit method
//   function predictFruit(season) { // add parameter for season
//     let finalFruit = fruits.filter((item) => item.season.name === season.name); // fix filter condition to match Season object
//     return finalFruit;
//   }
//   // Call the predictFruit method
//   let result = predictFruit(new Season("wet"));
//   console.log(result);