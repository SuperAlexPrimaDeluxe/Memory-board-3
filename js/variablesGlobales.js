// Je déclare mon tableau avec les valeurs + Je la dédouble

const symbols = ["🍧", "🥨", "🍗", "☕", "🥪", "🍌", "🍔", "🍕"];
const doubleSymb = symbols.concat(symbols);

// Fonction de randomisation du tableau

function randomArrayShuffle(doubleSymb) {
  let currentIndex = doubleSymb.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = doubleSymb[currentIndex];
    doubleSymb[currentIndex] = doubleSymb[randomIndex];
    doubleSymb[randomIndex] = temporaryValue;
  }
  return symbols;
}

randomArrayShuffle(doubleSymb); 






