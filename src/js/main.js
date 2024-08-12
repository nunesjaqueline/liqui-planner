"use strict";
// Eingabedaten holen
let title_1 = prompt("Titel:");
let typ_1 = prompt("Typ (Einahme oder Ausgabe):");
let betrag_1 = parseInt(prompt("Betrag (in Cent):"));
let date_1 = prompt("Datum (jjjj-mm-tt):");

console.log(`Titel: ${title_1}
    Typ: ${typ_1}
    Betrag: ${betrag_1} ct
    Datum: ${date_1}`);

let titel_2 = prompt("Titel: ");	
let typ_2 = prompt("Typ (Einahme oder Ausgabe):");
let betrag_2 = parseInt(prompt("Betrag (in Cent): "));
let date_2 = prompt("Datum (jjjj-mm-tt): ");
console.log(`Titel: ${titel_2}
    Typ: ${typ_2}
    Betrag: ${betrag_2}
    Date: ${date_2}`);	

//Gesamtbilanz
let income;
let expense;
let balance = betrag_1 + betrag_2;
console.log(`Gesamtbilanz: ${balance}`);

let positiv = balance >= 0;
console.log(`Bilanz ist positiv: ${positiv}`);