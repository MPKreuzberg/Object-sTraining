//1.
let subVotes = {
  upvotes: 87,
  downvotes: 35,
  totalVotes: function () {
    return this.upvotes - this.downvotes;
  },
};
console.log(subVotes.totalVotes());

console.log();
//2.

let boxSize = {
  width: 4,
  length: 2,
  height: 2,
};
function volume(boxSize) {
  return boxSize.width * boxSize.length * boxSize.height;
}
console.log(volume(boxSize));

console.log();

//3.
let relative = {
  name: "R2D2",
};
function relationToLuke(relative) {
  if (relative.name === "Luke") {
    return "Darth Vader is your father.";
  } else if (relative.name === "Leia") {
    return "Leia is your sister.";
  } else if (relative.name === "Han") {
    return "Han is your brother in law.";
  } else if (relative.name === "R2D2") {
    return "R2D2 is your droid.";
  } else {
    return "I have no idea what you're talking about.";
  }
}
console.log(relationToLuke(relative));
console.log();

//4.
let player = {
  name: "John",
  age: 30,
  height: 170,
  weight: 70,
  getAge: function () {
    return `${player.name} is ${player.age} years old.`;
  },
  getHeight: function () {
    return `${player.name} is ${player.height} cm tall.`;
  },
  getWeight: function () {
    return `${player.name} weighs ${player.weight} kg.`;
  },
};
console.log(player.getAge());
console.log(player.getHeight());
console.log(player.getWeight());
