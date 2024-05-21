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
  difficulty: undefined,
  partyCount() {
    party.forEach((pokemon) => {
      monsterTally += 1;
      console.log(monsterTally);
    });
  },
  catchPokemon(pokemonObj) {
    party.push(pokemonObj);
  },
  gymStatus() {
    for (let i = 0; i < game.gyms.length; i++) {
      if (game.gyms[i].completed === true) {
        gymTally.completed += 1;
      } else {
        gymTally.incomplete += 1;
      }
    }
  },
};

//console.dir(pokemon, { maxArrayLength: null });
//  with the use of { maxArrayLength: null } this allows the console to show more than the first 100 items in an array.

// assuming the numbers are in order the index goes like this
// desired number index == desired number value - 1

// console.log(pokemon[58].name);
// Commenting to declutter the terminal...
// Excecise 2 answer
console.log(game);
/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?
Solve Exercise 3 here:
*/
//dot notation is quicker
// before both methods below the INITIAL value must be determined. here it is undefined because it will be defined below.

game.difficulty = "Med";
// OR
//bracket notation is a little different. you need to first make a new property and name it, then call the new property with the object and assign what their value should be.

// const newProperty = "difficulty";
// game[newProperty] = "Easy";

// console.log(game.difficulty);
// bracket notation in the log show's the assignment side by side inside the difficulty property.
// console.log(game);

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?
Solve Exercise 4 here:

*/
const bestStarter = pokemon[3];
let party = game.party;
party.push(bestStarter);

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

game.party.push(pokemon[37]);

party.unshift(pokemon[35]);
party.unshift(pokemon[54]);

/*
Exercise 6
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 6 here:
*/
const partyHp = () => {
  // the mdn says descending order should be like below, with the b variable proceeding the a variable
  party.sort((a, b) => b.hp - a.hp);
  party.forEach((member) => {
    console.log(member.hp);
  });
};
partyHp();
/*
Exercise 7
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 7 here:
*/
// more or less self explanitory
game.gyms.forEach((gym) => {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
});
console.log(game.gyms);
/*
Exercise 8
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. Remember that you're working with an array of objects - what array method is ideal for replacing one element with another? 

Solve Exercise 8 here:
*/
// console.log(party);

let evolveCharmander = () => {
  let charmanderSlot = party.findIndex((pokedex) => pokedex.number === 4);
  // so the index method when it CANNOT find something returns -1, when it does find the thing, it returns that value
  // the below logic only runs when that value is anything but -1, aka indexFound
  if (charmanderSlot !== -1) {
    // we open the party and at the location of charmanderSlot we are going to replace the Charmander info with Charmeleon

    // pokedex in these two functions refers to the pokemon variable inside data.js . i thought pokedex makes the most sense, though its confusing to get  from reading alone.
    party[charmanderSlot] = pokemon.find((pokedex) => pokedex.number === 5);
  }
};
evolveCharmander();
console.log(party);
/*
Exercise 9
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 9 here:
*/
for (let i = 0; i < party.length; i++) {
  console.log(party[i].name);
}
/*
Exercise 10
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 10 here:
*/
pokemon.forEach((entry) => {
  if (entry.starter !== false) {
    console.log(entry.name);
  }
});
/*
Exercise 11
1. Add a method called `catchPokemon` to the `game` object. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 11 here:
*/
// game.catchPokemon = (pokemonObj) => {
//   party.push(pokemonObj);                  <--- my original code. works but is anonymous
// };

game.catchPokemon(pokemon[10]); // caught Metapod

/*
Exercise 12
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 12 here:
*/

game.catchPokemon = (pokemonObj) => {
  let pokeball = game.items.find((item) => item.name === "pokeball");

  pokeball.quantity -= 1;

  party.push(pokemonObj);
};

game.catchPokemon(pokemon[67]); // use a pokeball to catch Machamp
game.catchPokemon(pokemon[150]); // using another to catch Mew. pokeball count should be 6
// console.log(party); // the party should include the new additions Metapod and Machamp
console.log(game.items);
/*
Exercise 13
1. Similar to Exercise 7, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 13 here:
*/

for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 6) {
    game.gyms[i].completed = true;
  }
}
console.log(game.gyms);
/*
Exercise 14
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 14 here:
*/
const gymTally = {
  completed: 0,
  incomplete: 0,
};
// originally this was where the anonymous function was but i like it better inside the game object.
game.gymStatus();

console.log(gymTally);
/*
Exercise 15
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 15 here:
*/
let monsterTally = 0;

game.partyCount();
/*
Exercise 16
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 16 here:
*/
for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 8) {
    game.gyms[i].completed = true;
  }
}
console.log(game.gyms);
/*
Exercise 17
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 17 here:
*/
console.log(game);
