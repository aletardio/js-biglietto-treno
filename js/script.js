let miles = prompt('Inserisci il numero di chilometri che vuoi percorrere');

let age = prompt('Inserisci la tua età');

let price_start = 0.21 * miles;

let price_final = '';


if (age <= 17) {
    let sale = price_start * 20 / 100;
    price_final = price_start - sale;
}

else if (age >= 65) {
    let sale = price_start * 40 / 100;
    price_final = price_start - sale;
}

else {
    price_final = price_start;
}

console.log(price_final);


