let miles = prompt('Inserisci il numero di chilometri che vuoi percorrere');

let age = prompt('Inserisci la tua età');

let price_start = 0.21 * miles;

let price_final = '';


if (age <= 17) {
    let sale = price_start * 20 / 100;
    price_final = price_start - sale;
    ticket_price = `Hai diritto ad uno sconto! Il prezzo del tuo biglietto
    è di: ${price_final.toFixed(2)}€`;
}

else if (age >= 65) {
    let sale = price_start * 40 / 100;
    price_final = price_start - sale;
    ticket_price = `Hai diritto ad uno sconto! Il prezzo del tuo biglietto
    è di: ${price_final.toFixed(2)}€`;
}

else {
    price_final = price_start;
    ticket_price = `Non hai diritto ad uno sconto! Il prezzo del tuo biglietto
    è di: ${price_final.toFixed(2)}€`;
}

document.getElementById('train-ticket').innerHTML = ticket_price;

console.log(ticket_price);


