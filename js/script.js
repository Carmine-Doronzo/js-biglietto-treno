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
//stampiamo in console il prezzo del biglietto senza sconti
console.log('il biglietto costa', km * pxkm);