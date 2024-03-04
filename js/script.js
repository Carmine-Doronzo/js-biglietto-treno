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

//BONUS
//Funzione isnan per controllare se un valore e' un numero: restituisce vero se non e' numerico e falso se lo e'
//"!" l'ho messo perche' significa negazione dato che il prompt prende valori stringa risulterebbe non valido 
if(!isNaN(km,eta)){

    //inseriamo una costante che sarebbe il prezzo per kilometro
const pxkm = 0.21;//number

//creiamo una variabile contenente il prezzo del biglietto
let pxb = (km * pxkm);//number

//stampiamo i kilometri da percorrere
console.log('i km da percorrere sono:',km,'km');

//stampiamo l'eta' 
console.log('la tua eta e di:',eta,'anni');

console.log('il biglietto costa =', parseFloat(pxb.toFixed(2)),'euro');

//utilizziamo delle condizioni per fare degli sconti 

//eta' minore di 18 anni
if(eta < 18){
    //pxb20 = variabile contenente il prezzo del biglietto scontato del 20%
    let pxb20 = pxb * 0.20;//number
    
    console.log('Sconto minorenne 20% =', parseFloat(pxb20.toFixed(2)),'euro');
    //pxb20round = variabile contenente il prezzo del biglietto scontato del 20% mostrando fino alla seconda cifra decimale
    let pxb20round = pxb - pxb20;//number
    console.log('Totale con sconto applicato =',parseFloat(pxb20round.toFixed(2)),'euro');

}//eta' over 65
else if(eta > 65){

    //pxb40 = variabile contenente il prezzo del biglietto scontato del 40%
    let pxb40 = pxb * 0.40;//number
    console.log('Sconto over 65 40% =', parseFloat(pxb40.toFixed(2)),'euro');

    //pxb40round = variabile contenente il prezzo del biglietto scontato del 40% mostrando fino alla seconda cifra decimale
    let pxb40round = pxb - pxb40;//number
    console.log('Totale con sconto applicato =',parseFloat(pxb40round.toFixed(2)),'euro');

}//eta' tra i 18 e i 65 anni
else{

    //stampiamo in console il prezzo del biglietto senza sconti
    console.log('nessuno sconto applicato');
    console.log('il biglietto costa =', parseFloat(pxb.toFixed(2)),'euro');

}
}else{
    console.log('valore non valido');
}
