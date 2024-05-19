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
/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?
Solve Exercise 4 here:

*/
const bestStarter = pokemon[3]
let party = game.party
party.push(bestStarter)

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

game.party.push(pokemon[37])

party.unshift(pokemon[35])
party.unshift(pokemon[54])

/*
Exercise 6
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 6 here:
*/
const partyHp = () =>{
party.sort((a,b) => b.hp - a.hp)
party.forEach(member => {
  console.log(member.hp)
})
};
partyHp();
/*
Exercise 7
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 7 here:
*/

game.gyms.forEach(gym => {
  if (gym.difficulty < 3) {
    gym.completed = true
  }
  console.log(game.gyms)
});