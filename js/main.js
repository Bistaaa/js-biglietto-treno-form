//dichiarqazione variabili
let chilometri, totalPrice, finalPrice;
const kmPrice = 0.21;

//selezione elementi di pagina
const genera = document.querySelector("#genera");
console.log(genera);



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


    //calcolare il prezzo totale del viaggio
    if (userAge < 18) {
        totalPrice = basePrice * 0.8;
        console.log("prezzo minor = €", totalPrice);
    } else if (userAge >= 65){
        totalPrice = basePrice * 0.6;
        console.log("prezzo senior = €", totalPrice);
    } else{
        totalPrice = basePrice;
        console.log("prezzo normale = €", totalPrice);
    };


    //arrotondare prezzo ai centesimi
    finalPrice = (Math.round(totalPrice * 100) / 100).toFixed(2);
    console.log(finalPrice);



    //CREAZIONE BIGLIETTO





    //inserire nome nel biglietto
    document.getElementById("nome_passeggero").innerHTML = userName;

    //inserire prezzo nel biglietto
    document.getElementById("prezzo_biglietto").innerHTML = ("€" + finalPrice);


  });
  

