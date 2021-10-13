let randomNumberUtente = Math.floor(Math.random()*6) + 1;

let randomNumberPc = Math.floor(Math.random()*6) + 1;


if (randomNumberPc > randomNumberUtente) {
    alert(`Vince il PC! 
    Il numero del computer: ${randomNumberPc} è maggiore del numero: ${randomNumberUtente} dell'utente`)
} else if ( randomNumberPc < randomNumberUtente) {
    alert(`Vince l'Utente!
    Il numero dell'utente: ${randomNumberUtente} è maggiore del numero: ${randomNumberPc} del computer `)
} else {
    alert(`WOW! il vostro numero è uguale! Bel Pareggio
    ${randomNumberUtente} = ${randomNumberPc}`)
}
