class Filmproject {
    constructor(schedule, castmembers, budget) {
        this.schedule = schedule;
        this.castmembers = castmembers;
        this.budget = budget;
    }
}

// let movies = [];

function addFilm(film) {
    movies.push(film);
    console.log(movies);
}

function checkBudget(film, totalBudget) {
    if (totalBudget < film.budget) {
        console.log("you are within budget limit");
    } else {
        console.log("You have exceeded the budget limit");
    }
}
const myFilm = new Filmproject(["Monday", "Wednesday", "Friday"], ["John", "Jane", "Bob"], 100000.0);


addFilm(myFilm);


checkBudget(myFilm, 90000.0);

class Filmproject {
    constructor(schedule, castmembers, budget) {
        this.schedule = schedule;
        this.castmembers = castmembers;
        this.budget = budget;
    }
}

let movies = [];

function addFilm(film) {
    movies.push(film);
    console.log(movies);
}

function checkBudget(film, totalSpent) {
    let remainingBudget = film.budget - totalSpent;
    return remainingBudget;
}
let project1 = new Filmproject(["Monday", "Tuesday"], ["Actor1", "Actor2"], 10000.00);
let project2 = new Filmproject(["Wednesday", "Thursday"], ["Actor3", "Actor4"], 15000.00);

addFilm(project1);
addFilm(project2);

let totalSpent1 = 5000.00;
let remainingBudget1 = checkBudget(project1, totalSpent1);
console.log("Remaining budget for project1: " + remainingBudget1);


let totalSpent2 = 6000.00;
let remainingBudget2 = checkBudget(project2, totalSpent2);
console.log("Remaining budget for project2: " + remainingBudget2);


// class findPower{
//     constructor(fruit,season,power,effects){
//         this.fruit=fruit
//         this.season=season
//         this.power=power
//         this.effects=effects
//     }

// }
// let fruits=[]
// let firstFruit=("mango","dry","cold resistance","feeling cold")
// fruits.push(firstFruit)
// console.log(fruits);


class FilmProject {
    constructor(title, castMembers, shootingSchedule, budget) {
      this.title = title;
      this.castMembers = castMembers;
      this.shootingSchedule = shootingSchedule;
      this.budget = budget;
    }
    updateCastMembers(newCastMembers) {
      this.castMembers = newCastMembers;
    }
    updateShootingSchedule(newSchedule) {
      this.shootingSchedule = newSchedule;
    }
    updateBudget(newBudget) {
      this.budget = newBudget;
    }
    displayProjectDetails() {
      console.log(`Title: ${this.title}`);
      console.log(`Cast Members: ${this.castMembers.join(', ')}`);
      console.log(`Shooting Schedule: ${this.shootingSchedule}`);
    //   console.log(`Budget: $${this.budget}`);
    //   console.log("-------------------------");
    }
  }
  // Create film project instances
  const filmProject1 = new FilmProject("Movie 1", ["Actor 1", "Actor 2", "Actor 3"], "June 2023", 1000000);
  const filmProject2 = new FilmProject("Movie 2", ["Actor 4", "Actor 5"], "July 2023", 1500000);
  // Update film project details
  filmProject1.updateCastMembers(["Actor 1", "Actor 3"]);
  filmProject1.updateShootingSchedule("August 2023");
  filmProject2.updateBudget(2000000);