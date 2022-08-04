const symbols = ["🍧", "🥨", "🍗", "☕", "🥪", "🍌", "🍔", "🍕"];

const doubleSymb = symbols.concat(symbols);
console.log("ICI CONCAT :")
console.log(doubleSymb);

console.log("STEP01 - Pour chaque élément du tableau j'affiche un hello avec foreach");
symbols.forEach(function () {
  console.log('Salut');
});
console.log("OK");

console.log("STEP02 - J'affiche tous les éléments de mon tableau via une fonction et un *paramètre dont le nom est choisi par mes soins");
symbols.forEach(function (element) {
  console.log(element);
});
console.log("OK");

console.log("STEP03 - J'affiche tous les éléments de mon tableau via une fonction et un *paramètre dont le nom est choisi par mes soins + l'indice du paramètres");
symbols.forEach(function (element, indice) {
  console.log(element, indice);
});
console.log("OK");

const allCards = document.querySelector(".view");
allCards.innerHTML = "";

function repartition() {
  doubleSymb.forEach(function (element, indice) {
    const targeter = document.createElement("div");
    targeter.innerHTML = "<div class='target' data-valor=" + element +">"+
    "<div class='target_content'>" + element + "</div>" + "</div>";
    allCards.appendChild(targeter);
  });
}

repartition();

function reveal(){
  let comparateur;
  const totaldecouvert = document.querySelectorAll(".reveal");



  if(totaldecouvert.length > 1){
    return;
  }

  // this.classList.getAttribute("comparateur");

  this.classList.add("reveal");
  comparateur = document.querySelectorAll(".reveal");
  if(comparateur.length < 2){
    return;
  }

  console.log(comparateur[0].textContent);
  console.log(comparateur[1].textContent);

  if(comparateur[0].dataset.valor === comparateur[1].dataset.valor){
     console.log("GG une paire de trouvée");
  }
  else{
    console.log("pas ok")
  }

}

document.querySelectorAll(".target"

).forEach(function(element2){
  element2.addEventListener("click", reveal);
});