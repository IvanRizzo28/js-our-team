'use strict';

/*
Inserisco ogni persona tramite il metodo split per non inserire i nomi,ruoli e img a mano
*/
const team = [];
let stringa = `Wayne Barnett;Founder & CEO;wayne-barnett-founder-ceo.jpg
Angela Caroll;Chief Editor;angela-caroll-chief-editor.jpg
Walter Gordon;Office Manager;walter-gordon-office-manager.jpg
Angela Lopez;Social Media Manager;angela-lopez-social-media-manager.jpg
Scott Estrada;Developer;scott-estrada-developer.jpg
Barbara Ramos;Graphic Designer;barbara-ramos-graphic-designer.jpg`;
let riga = stringa.split(`
`);
for (let i = 0; i < riga.length; i++) {
    let tmp = riga[i].split(";");
    const persona = {
        nome: tmp[0],
        ruolo: tmp[1],
        img: tmp[2]
    }
    team.push(persona);
}

const row = document.getElementById("row");
for (let i = 0; i < team.length; i++) {
    row.innerHTML += `<div class="col-12 col-md-6 col-lg-4">
    <div class="ir-card pb-2">
        <div class="ir-card-img">
            <img src="img/${team[i]["img"]}" alt="">
        </div>
        <div class="ir-card-body mt-3">
            <h2>${team[i]["nome"]}</h2>
            <span>${team[i]["ruolo"]}</span>
        </div>
    </div>
</div>`;
    console.log(`${team[i]["nome"]} ${team[i]["ruolo"]} ${team[i]["img"]}`);
} 