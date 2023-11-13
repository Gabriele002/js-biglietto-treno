// Questo è il file che contiene tutto il codice JS della pagina web

//chiedere il numero di km da percorrere 
// eta del passegero 

let distanceKm = parseFloat(prompt("Inserisci il numero di chilometri da percorrere:"));
let passengerAge = parseFloat(prompt("Inserisci la tua età"));
//impostare prezzo per km 
const priceForKm = 0.21

if (isNaN(distanceKm) || isNaN(passengerAge)) {
    alert("Mi dispiace non hai inserito entrambi dei numeri!")
} else { 
    if (distanceKm * priceForKm) { //km per prezzo fisso
    
}  else if(passengerAge < 18 )  {
    let discountUnderage = (((distanceKm * priceForKm) / 100) * 20 )
    
}   else if(passengerAge > 65 )  {
        let discountOver65 = (((distanceKm * priceForKm) / 100) * 40 )
        }
}


