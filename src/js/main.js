"use strict";
let income = 0;
let expense = 0;
let balance = 0;
// Eingabedaten holen
let title_1 = prompt("Titel:");
let typ_1 = prompt("Typ (Einahme oder Ausgabe):");
let betrag_1 = parseInt(prompt("Betrag (in Cent):"));
let date_1 = prompt("Datum (jjjj-mm-tt):");


console.log(`Titel: ${title_1}
    Typ: ${typ_1}
    Betrag: ${betrag_1} ct
    Datum: ${date_1}`
);

if (typ_1 === "Einnahme") {
    income = income + betrag_1;    	
} else if (typ_1 === "Ausgabe") {
    expense = expense + betrag_1;
    balance = balance - betrag_1;

} else {
    console.log(`Der Typ_"${typ_1}" ist nicht bekannt`);
};


let titel_2 = prompt("Titel: ");	
let typ_2 = prompt("Typ (Einahme oder Ausgabe):");
let betrag_2 = parseInt(prompt("Betrag (in Cent): "));
let date_2 = prompt("Datum (jjjj-mm-tt): ");
console.log(`Titel: ${titel_2}
    Typ: ${typ_2}
    Betrag: ${betrag_2}
    Date: ${date_2}`
);

if (typ_2 === "Einnahme") {
    income = income + betrag_2;    	
} else if (typ_2 === "Ausgabe") {
    expense = expense + betrag_2;
    balance = balance - betrag_2;

} else {
    console.log(`Der Typ_"${typ_2}" ist nicht bekannt`);
};
    

//Gesamtbilanz
let positiv = balance >= 0;

console.log(`
    Einnahme: ${income} ct
    Ausgabe: ${expense} ct
    Gesamtbilanz: ${balance} ct
    Bilanz ist positiv: ${positiv}`
);




