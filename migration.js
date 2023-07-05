
// class Migration {
//     constructor(weatherPattern, riverLevels) {
//         this.weatherPattern = weatherPattern;
//         this.riverLevels = riverLevels;
//     }
//     migration() {
//         if (this.weatherPattern === "dry" && this.riverLevels === "low") {
//             console.log("migration of animals will occur due to lack of water and food in their recent location");
//         } else {
//             console.log("the migration will not occur because there is presence of food and water");
//         }
//     }
// }
// const migrationInstance = new Migration("wet", "high");
// migrationInstance.migration();

class Migration {
    constructor(species, location, weatherPattern, riverLevels) {
        this.species = species;
        this.location = location;
        this.weatherPattern = weatherPattern;
        this.riverLevels = riverLevels;
    }
    migration() {
        if (this.weatherPattern === "dry" && this.riverLevels === "low") {
            console.log(`Migration of ${this.species} will occur from ${this.location} due to lack of water and food.`);
        } else {
            console.log(`Migration of ${this.species} will not occur from ${this.location} due to presence of food and water.`);
        }
    }
}

const migrationInstance = new Migration("wildebeest", "Serengeti", "wet", "high");
migrationInstance.migration();