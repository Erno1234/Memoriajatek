const LISTA = [
  "kepek/kep1.jpg",
  "kepek/kep2.jpg",
  "kepek/kep3.jpg",
  "kepek/kep4.jpg",
  "kepek/kep5.jpg",
  "kepek/kep6.jpg",
];
let db = 0;
const KIVALASZTOTTKEPEK = [];
$(function () {
  const FELSO = $("#felso");
  let tartalom = osszeAllit();
  const FELSOKEP = $("#felso div img");
  FELSO.append(tartalom);
  FELSO.append(tartalom);
  FELSO.on("click", kepreKattintas);
  
});

function kepreKattintas() {

  const kephely = event.target;
  console.log($(kephely).attr("id"));
  kephely.src = LISTA[kephely.id];
  KIVALASZTOTTKEPEK.push($(kephely).attr("id"))
  db++;
  if (db == 2) {
    db = 0;
    visszaFordit();
    
  }
}
function visszaFordit(){
    
    setTimeout(function(){
    const FELSOKEP = $("#felso div img");
    let kephely = FELSOKEP.eq(KIVALASZTOTTKEPEK[0]);
    $(kephely).attr("src", "kepek/hatter.jpg")
    kephely = FELSOKEP.eq(KIVALASZTOTTKEPEK[1]);
    $(kephely).attr("src", "kepek/hatter.jpg")
    KIVALASZTOTTKEPEK.pop();
    KIVALASZTOTTKEPEK.pop();
    },1000)
    
}

function osszeAllit() {
  let txt = "";
  for (let index = 0; index < LISTA.length; index++) {
    txt += `<div><img src="kepek/hatter.jpg" id="${index}"></div>`;
  }
  console.log(txt);
  return txt;
}
