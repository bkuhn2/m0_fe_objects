var foods = {
  apples: 23,
  grapes: 507,
  eggs: 48
}

var person = {
  height: "6 ft",
  weight: "160 lbs"
}

var post = {
  imageSrc: "./images/beach.png",
  caption: "At the beach with my besties",
  timestamp: "4:37 PM August 13, 2019",
  number_likes: 0,
  comments: 0
}

var post2 = {
  imageSrc: "./images/holiday-party.png",
  caption: "What a great holiday party omg",
  timestamp: "11:37 PM December 31, 2019",
  number_likes: 13,
  comments: 0
}
 console.log(Object.keys(foods));
 console.log(Object.keys(person));
 console.log(Object.keys(post));
 console.log(Object.keys(post2));
 console.log(Object.values(foods));
 console.log(Object.values(person));
 console.log(Object.values(post));
 console.log(Object.values(post2));
