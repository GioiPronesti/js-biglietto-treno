
//console.log('Hello World')

/* 
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana con massimo due decimali

lo sconto da applicare si calcola in questo modo:
se dalla variabile prezzo voglio calcolarmi 

uno sconto del 20% 
sconto = prezzo * 20 / 100

uno sconto del 40% 
sconto = prezzo * 40 / 100

lo sconto e il prezzo scontato sono due cose diverse

Descrizione del problema

utente sceglierà 2 dati in ingresso: 
numeri di chilometri e numero del'età del passeggero.

come uscita
Calcolare il prezzo totale del viaggio sapendo che:
il prezzo base è definito in base ai km (0.21 € al km)
al prezzo del bigletto verrà applicato lo sconto

    sconto = 20% 
    se l' utente è minorenne  

    sconto = 40% 
    se l' utente è over 65

    
il prezzo finale è dato dalla differenza tra 
il prezzo base e il prezzo scontato. 
il prezzo corrispettivo sara indicato in euro 
max 2 cifre dopo la virgola.  Es. euro 39,50  

Psudo Codice

Input
dal prompt vengono dichiarati 2 ingressi:
userKm e userAge

Variabili: 
la tariffa =  (0.21 € * userKm)
prezzo scontato = 0
sconto = 0
prezzo totale = tariffa - prezzo scontato

Controllo età utente e determiniamo lo sconto
tramite istruzione condizionale

Se ( userAge è < 18 anni ) 
   allora l'utente è minorenne  // true o false
   sconto = 0.2   
       
ALTRIMENTI SE (userAge >= 65 )
   allora l' utente è over 65  // true o false 
   sconto = 0.4

ALTRIMENTI                     // true o false 
    l' utente è adulto
    sconto = 0
     
determinato lo sconto e i km scelti dall' utente 
posso calcolare prezzo scontato e prezzo totale del biglietto.

calcolo prezzo scontato con la formula 
prezzo scontato = tariffa * ( percentuale sconto  / 100 )
quindi 
prezzo scontato = tariffa * sconto  // number

calcolo prezzo totale tramite istruzione condizionale 
// true o false

prezzo scontato = (tariffa * sconto )

se ho prezzo scontato
    prezzo totale = (tariffa - prezzo scontato)   

se non ho prezzo scontato
    prezzo scontato = 0
    prezzo totale = tariffa 

per determinare il prezzo totale del bigletto     
si puo quindi verificare la condizione dello sconto 

SE (prezzo scontato != 0)
    allora 
    prezzo totale = (tariffa - prezzo scontato)

ALTRIMENTI
    prezzo scontato = 0
    prezzo totale = tariffa 

Soluzione Psudocodice     

Dichiaro Variabili:

userKm e userAge
la tariffa =  (0.21 € * userKm), prezzo totale
prezzo scontato = 0
sconto = 0

verificando lo sconto e i km scelti dall' utente 
posso calcolare prezzo scontato e prezzo totale del biglietto.

prezzo scontato = tariffa * ( percentuale sconto  / 100 )
prezzo scontato = tariffa * sconto
prezzo totale = (tariffa - prezzo scontato)

istruzione condizionale controllo età utente // true o false

Se ( userAge è < 18 anni )  
    console.log('l'utente è minorenne')  // string
    sconto = 0.2
    prezzo scontato = tariffa * sconto
    prezzo totale = (tariffa - prezzo scontato)   
       
ALTRIMENTI SE (userAge >= 65 )
   console.log (allora l' utente è over 65)  // string
   sconto = 0.4
   prezzo scontato = tariffa * sconto
   prezzo totale = (tariffa - prezzo scontato)

ALTRIMENTI                     
    console.log(' l' utente è adulto' )    // string
    sconto = 0
    prezzo scontato = 0
    prezzo totale = tariffa

*/

const userAge = parseFloat(prompt('Inserisci la tua età '))
const userKm = parseInt(prompt('Inserisci i chilometri che vuoi percorrere'))
console.log('la tua eta:', userAge)
console.log('i tuoi kilometri:', userKm)

let startPrice =  0.21  * userKm 
let discountPrice
let numberDiscount = 0;
let totalPrice 



if (userAge < 18) {
    
    console.log("sei minorenne")  // string
    numberDiscount = 0.2
    discountPrice = startPrice * numberDiscount
    totalPrice = startPrice - discountPrice
    console.log("il prezzo finale ammonta a euro:" ,totalPrice )

} else if (userAge >= 65) {

    console.log("sei over 65")  // string
    numberDiscount = 0.4
    discountPrice = startPrice * numberDiscount
    totalPrice = startPrice - discountPrice
    console.log("il prezzo finale ammonta a euro:" ,totalPrice )
} else  {
    
    console.log("sei un adulto" )
    numberDiscount = 0
    discountPrice = startPrice * numberDiscount
    
    totalPrice = startPrice - discountPrice
    console.log("il prezzo finale ammonta a euro:" ,totalPrice )

}