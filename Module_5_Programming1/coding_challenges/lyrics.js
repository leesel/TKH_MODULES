//Challenge 3
// https://codepen.io/leesel/pen/oNxYyXQ?editors=0012

let quote = "Wipe the sweat off my dome. Spit the phlegm on the streets. Suede Timbs on my feets makes my cipher complete. Whether cruising in a Sikh's cab or Montero Jeep, I can't call it. The beats make me falling asleep. I keep falling, but never falling six feet deep. I'm out for presidents to represent me. Say what? I'm out for dead presidents to represent me.";

/////////////////////////////////////////////////////////////

// Easier Way

// const regex = /s/gi;
// console.log(quote.replace(regex, '$'));

/////////////////////////////////////////////////////////////

// Problem Requirements Way

let splitQuote = quote.split(" ");
// console.log(splitQuote.startsWith("S" || "s"));

for (let i = 0; i < splitQuote.length; i++){
  if(splitQuote[i].startsWith("s") || splitQuote[i].startsWith("S")){
    let moreSplit = splitQuote[i].split('');
    moreSplit[0] = "$";
    
    let joinMoreSplit = moreSplit.join();
   // need to join the s word without commas
    splitQuote[i] = joinMoreSplit.split(",").join("");
    // console.log(joinMoreSplit.replace(",", ""));
    let newQuote = splitQuote.join(" ");
        console.log(newQuote);
  }
}


