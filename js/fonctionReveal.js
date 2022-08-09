function reveal(){
  let comparateur;
  const totaldecouvert = document.querySelectorAll(".reveal:not(.fader)");

  if(totaldecouvert.length > 1){
    return;
  }

  this.classList.add("reveal");
  comparateur = document.querySelectorAll(".reveal:not(.fader)");
  if(comparateur.length < 2){
    return;
  }

  comparer(comparateur);
}