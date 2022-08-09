

function comparer(targetAComparer){
  if(targetAComparer[0].dataset.valor === targetAComparer[1].dataset.valor){
    confirmation(targetAComparer);
 }
 else{
   erreur(targetAComparer);
 }
}

function confirmation(latarget){
  latarget.forEach(function(element){
   element.classList.add("fader");
  });
}

function erreur(latarget){
  latarget.forEach(function(element){
    element.classList.remove("reveal");
  });
}