const listEmail = ["mariorossi@gmail.com", "luciagialli@tin.it", "giancarloquadrato@hotmail.it"];


let emailUtente = prompt ("Benvenuto! Per accedere scrivi la tua email");
let emailPresente = false;

for (let i = 0; i < listEmail.length; i++) {

    if (listEmail[i].toLowerCase() === emailUtente.toLowerCase()) {
       
        emailPresente = true;
        alert(`Bentornato ${emailUtente}! Accesso avvenuto con successo`);
    
    } 
     
}


if (emailPresente === false){
     
    alert(`Mi dispiace ma l'email: ${emailUtente} non è nella nostra lista accesso`);
    
    let addEmail = prompt("Vuole aggiungere la sua email alla nostra lista? scriva 1 per sì e 2 per no")
    
    if (addEmail == "1") {
        
        listEmail.push(emailUtente);
        alert("Email aggiunta con successo!");
        
        let logIn = prompt ("Acceda con la sua email");
        for (let i = 0; i < listEmail.length; i++) {

            if (listEmail[i].toLowerCase() === emailUtente.toLowerCase()) {
            
                emailPresente = true;
                alert(`Bentornato ${emailUtente}! Accesso avvenuto con successo`);
            
            } 
            
        }

    } else {
        alert("Addio! Le auguro buona giornata!");
    }
}



