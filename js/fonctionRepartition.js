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