class Ankara {
    constructor(temperatureRange, moodRange) {
      this.temperatureRange = temperatureRange;
      this.moodRange = moodRange;
    }
  
    getcolor() {
      const temp = this.temperatureRange;
      const mood = this.moodRange;
  
      if (this.temperature <= temp.start && this.temperature >= temp.end && this.mood<= mood.start && this.mood >= mood.end) {
        console.log("wear light and more pattened ankara");
      } else {
        console.log("wear dull and less partened ankara");
      }
    }
  }
  
  const tempRange = { start: 20, end: 30 };
  const moodRange = { start: 5, end: 10 };
  const ankara = new Ankara(tempRange, moodRange);
  ankara.temperature = 25;
  ankara.mood = 7;
  ankara.getcolor();

  class Animal {
    constructor(species, age, gender, location) {
      this.species = species;
      this.age = age;
      this.gender = gender;
      this.location = location;
    }
  
    move(newLocation) {
      this.newLocation=newLocation
     console.log(`there are ${this.gender} ${this.species} which migrated from ${this.location} to ${this.newLocation} `);
    }
}
let animal=new Animal("lion",34,"female","maasai mara")
animal.move("serengeti")  
