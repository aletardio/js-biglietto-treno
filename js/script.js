let miles = prompt('Inserisci il numero di chilometri che vuoi percorrere');

let age = prompt('Inserisci la tua età');

let ticket = 0.21;


if (age <= 17) {
    ticket = ticket * miles - 20 * 100;
}

else if (age >= 65) {
    ticket = ticket * miles - 40 * 100;
}

else {
    ticket = '';
}

console.log(ticket);


