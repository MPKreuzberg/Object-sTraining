//1.
let votes = {
    upvotes: 87,
    downvotes: 1,
    totalVotes: function() {
      return this.upvotes - this.downvotes;
    }
  }
  console.log(votes.totalVotes());


  //2.

  let sizes = {
    width: 5,
    length: 2,
    height: 1,
  }
  function volume(sizes) {
    return sizes.width * sizes.length * sizes.height;
  }
  console.log(volume(sizes));  

  //3.
  let relation = {
    name: "R2D2",
    
  }
  function relationToLuke(relation) {
    if (relation.name === "Luke") {
      return "Darth Vader is your father.";
    } else if (relation.name === "Leia") {
      return "Leia is your sister.";
    } else if (relation.name === "Han") {
      return "Han is your brother in law.";
    } else if (relation.name === "R2D2") {
      return "R2D2 is your droid.";
    } else {
      return "I have no idea what you're talking about.";
    }
  }
 console.log(relationToLuke(relation));
 

  //4.
  let player = {
    name: "John",
    age: 30,
    height: 170,
    weight: 70,
    getAge: function() {
      return `${player.name} is ${player.age} years old.`;
    },
    getHeight: function() {
      return `${player.name} is ${player.height} cm tall.`;
    },
    getWeight: function() {
      return `${player.name} weighs ${player.weight} kg.`;
    },
  }
  console.log(player.getAge());
  console.log(player.getHeight());
  console.log(player.getWeight());

