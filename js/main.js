//dichiarqazione variabili
let chilometri, offerta, totalPrice, finalPrice;
const kmPrice = 0.21;

//selezione elementi di pagina
const genera = document.querySelector("#genera");
const aggiorna = document.getElementById("annulla");



//INVIO DATI AL CLICK

genera.addEventListener("click", function() {

    // Chiedere all'utente il nome
    let userName = document.getElementById("name").value;
    console.log("nome passeggero = ", userName);
  

    // Chiedere all'utente il numero di chilometri che vuole percorrere
    chilometri = document.getElementById("km").value;
    console.log("chilometri da percorrere = ", chilometri);
  

    // Chiedere l’età del passeggero
    let userAge = document.getElementById("age").value;
    console.log("età passeggero = ", userAge);


    //clacoliamo il prezzo base del biglietto
    let basePrice = chilometri * kmPrice;


    //calcolare il prezzo totale del viaggio e tipo offerta
    if (userAge < 18) {
        totalPrice = basePrice * 0.8;
        offerta = "Biglietto Minor"
        console.log("prezzo minor = €", totalPrice);
    } else if (userAge >= 65){
        totalPrice = basePrice * 0.6;
        offerta = "Biglietto Senior"
        console.log("prezzo senior = €", totalPrice);
    } else{
        totalPrice = basePrice;
        offerta = "Biglietto Standard"
        console.log("prezzo normale = €", totalPrice);
    };


    //arrotondare prezzo ai centesimi
    finalPrice = (Math.round(totalPrice * 100) / 100).toFixed(2);
    console.log(finalPrice);



    //CREAZIONE BIGLIETTO
    

    //far spawnare biglietto
    document.getElementById("output_biglietto").classList.add("active");

    //assegnazione offerta
    document.getElementById("offerta").innerHTML = offerta;

    //assegnazione numero carrozza
    let numeroCarrozza = Math.floor(Math.random() * 15) + 1;
    document.getElementById("carrozza").innerHTML = numeroCarrozza;

    //assegnazione codice CP
    let codiceCp = Math.floor(Math.random() * 99999) + 1;
    document.getElementById("codice").innerHTML = codiceCp;

    //inserire nome nel biglietto
    document.getElementById("nome_passeggero").innerHTML = userName;

    //inserire prezzo nel biglietto
    document.getElementById("prezzo_biglietto").innerHTML = ("€" + finalPrice);

});
  
//aggiornamento pagina se cliccato bottone "annulla"
aggiorna.addEventListener("click", function() {
    location.href = location.href;
});