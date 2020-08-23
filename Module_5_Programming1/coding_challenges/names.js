// Challenge 1
// https://codepen.io/leesel/pen/abNBKoY?editors=0011

let names = ["Wesley Snipes", "Nicholas Cage", "Nasir Jones", "Sean Carter", "Sean Combs", "Michael Jordan", "Patrick Ewing"];

let first_names = [];
let last_names = [];

for(let i = 0; i < names.length; i++){
   let res = names[i].split(" ");
  for(let j = 0; j < res.length; j++){
      if (j % 2 === 0){
        first_names.push(res[j]);
      } else {
        last_names.push(res[j]);
      }
     
   }
}

// to check if it works
console.log(first_names);
console.log(last_names);