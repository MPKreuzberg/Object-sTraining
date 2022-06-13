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

// 3.
const lukeFamily = {
    Luke: {
      name: "Luke",
      relation: "father",
    },
    Leia: {
      name: "Leia",
      relation: "sister",
    },
    Han: {
      name: "Han",
      relation: "brother in law",
    },
    R2D2: {
      name: "R2D2",
      relation: "droid",
    }
  }
  function getRelation(name) {
    return lukeFamily[name].relation;
  }
  console.log(getRelation("R2D2"));
  
  console.log();
  

  


//4.
let player = {
  name: "John",
  age: 30,
  height: 170,
  weight: 70,


  getAge: function () {
    return `${this.name} is ${this.age} years old.`;
  },
  getHeight: function () {
    return `${this.name} is ${this.height} cm tall.`;
  },
  getWeight: function () {
    return `${this.name} weighs ${this.weight} kg.`;
  },
}
console.log(player.getAge() );
console.log(player.getHeight());
console.log(player.getWeight());
