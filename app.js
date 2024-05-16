const pokemon = require("./data.js");

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
};

//console.dir(pokemon, { maxArrayLength: null });
//  with the use of { maxArrayLength: null } this allows the console to show more than the first 100 items in an array.

// assuming the numbers are in order the index goes like this
// desired number index == desired number value - 1

console.log(pokemon[58].name);

console.log(game);
/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
//dot notation is quicker
game.difficulty = "Med";

// OR
//bracket notation is a little different
const difficulty = "x";
// game[difficulty] = "Easy";
// console.log(game[difficulty]);
// console.log(game.difficulty);
// bracket notation in the log show's the assignment side by side inside the difficulty property.
console.log(game);
