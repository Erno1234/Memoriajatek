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
  const ALSO = $("#also")
  let felTartalom = osszeAllit();
  let alsoTartalom = osszeAllit();
  const FELSOKEP = $("#felso div img");
  const ALSOKEP = $("#also div img");
  FELSO.append(felTartalom);
  ALSO.append(alsoTartalom);
  FELSO.on("click", kepreKattintas);
  ALSO.on("click", kepreKattintas);
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
    const ALSOKEP = $("#also div img");
    let kephely = FELSOKEP.eq(KIVALASZTOTTKEPEK[0]);
    $(kephely).attr("src", "kepek/hatter.jpg")
    kephely = ALSOKEP.eq(KIVALASZTOTTKEPEK[1]);
    $(kephely).attr("src", "kepek/hatter.jpg")
    KIVALASZTOTTKEPEK.pop();
    KIVALASZTOTTKEPEK.pop();
    },1000)
    
}

function keveres(){
  for (let i = 0; i < 10; i++) {
    for (let index = 0; index < 10; index++) {
      let x = Math.floor(Math.random() * 6);
      let y = Math.floor(Math.random() * 6);
      let xkep = LISTA[x]
      LISTA[x] = LISTA[y];
      LISTA[y] = xkep;
    }
    
  }

}

function osszeAllit() {
  keveres(2);
  let txt = "";
  for (let index = 0; index < LISTA.length; index++) {
    txt += `<div><img src="kepek/hatter.jpg" id="${index}"></div>`;
  }
  console.log(txt);
  return txt;
}
