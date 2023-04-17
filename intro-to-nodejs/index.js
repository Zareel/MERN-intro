const superheroes = require("superheroes");
const supervillains = require("supervillains");

superheroes.all;
supervillains.all;

const mySuperHero = superheroes.random();
const myVillain = supervillains.random();

console.log(`my super hero is ${mySuperHero}`);
console.log(`my favourite villain is ${myVillain}`);
