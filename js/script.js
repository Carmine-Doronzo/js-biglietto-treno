/*Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
oppure applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va stampato in console in forma “umana” cioè con al massimo due decimali,
per indicare centesimi sul prezzo. Questo richiederà un minimo di ricerca.
*/

//raccogliamo il dato kilometri
let km = parseFloat(prompt('inserisci i km del percorso'));//number

//raccogliamo il dato eta'
let eta = parseInt(prompt('inserisci la tua eta'));//number

//inseriamo una costante che sarebbe il prezzo per kilometro
const pxkm = 0.21;//number

//creiamo una variabile contenente il prezzo del biglietto
let pxb = (km * pxkm);

/*l' argomento .tofixed serve per arrotondare alla cifra decimale che si desidera cambiando il numero nelle parentesi 
esiste  il math.round che e' piu' efficace perche' per esempio il metodo .tofixed se viene fornito 1,005 restituira' 1,00 
invece di 1.01
*/
pxb = parseFloat(pxb.toFixed(2));

//stampiamo in console il prezzo del biglietto senza sconti
console.log('il biglietto costa =', pxb);

//utilizziamo delle condizioni per fare degli sconti 

//eta' minore di 18 anni
if(eta < 18){
    //pxb20 = variabile contenente il prezzo del biglietto scontato del 20%
    let pxb20 = pxb * 0.20;
    pxb20 = parseFloat(pxb20.toFixed(2));
    console.log('Sconto minorenne 20% =', pxb20);
    //pxb20round = variabile contenente il prezzo del biglietto scontato del 20% arrotondato alla seconda cifra decimale
    let pxb20round = pxb - pxb20;
    pxb20round = parseFloat(pxb20round.toFixed(2));
    console.log('Totale con sconto applicato =',pxb20round);

//eta' compresa tra i 18 e i 65 anni
}else if(eta <= 65){
    console.log('nessuno sconto applicato ');
    console.log('il biglietto costa', pxb);

//eta' over 65
}else if(eta > 65){
    //pxb40 = variabile contenente il prezzo del biglietto scontato del 40%
    let pxb40 = pxb * 0.40;
    pxb40 = parseFloat(pxb40.toFixed(2));
    console.log('Sconto over 65 40% =', pxb40);
    //pxb40round = variabile contenente il prezzo del biglietto scontato del 40% arrotondato alla seconda cifra decimale
    let pxb40round = pxb - pxb40;
    pxb40round = parseFloat(pxb40round.toFixed(2));
    console.log('Totale con sconto applicato =',pxb40round);
}

