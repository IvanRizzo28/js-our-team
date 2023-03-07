'use strict';
/*
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/
const team=[];

let stringa=`Wayne Barnett;Founder & CEO;wayne-barnett-founder-ceo.jpg
Angela Caroll;Chief Editor;angela-caroll-chief-editor.jpg
Walter Gordon;Office Manager;walter-gordon-office-manager.jpg
Angela Lopez;Social Media Manager;angela-lopez-social-media-manager.jpg
Scott Estrada;Developer;scott-estrada-developer.jpg
Barbara Ramos;Graphic Designer;barbara-ramos-graphic-designer.jpg`;

let riga=stringa.split(`
`);

for (let i=0;i<riga.length;i++){
    let tmp=riga[i].split(";");
    const persona={
        nome: tmp[0],
        ruolo: tmp[1],
        img: tmp[2]
    }
    team.push(persona);
}

for (let i=0;i<team.length;i++) console.log(`${team[i]["nome"]} ${team[i]["ruolo"]} ${team[i]["img"]}`);
//console.log(team);