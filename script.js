
console.log('Hello World')

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
la tariffa =  (0.21 € al km)
prezzo scontato = 0
sconto = 0
prezzo totale = prezzo base - prezzo scontato

Controllo età utente tramite istruzione condizionale

Se ( userAge è < 18 anni )
   allora l'utente è minorenne  // true o false
   sconto === 20%     
       
ALTRIMENTI SE (userAge >= 65 )
   allora l' utente è over 65  // true o false 
   sconto === 40%

ALTRIMENTI                     // true o false 
    l' utente è adulto
    sconto === 0 %
     
determinato lo sconto e i km scelti dall' utente 
posso calcolare prezzo scontato e prezzo scontato del biglietto.

calcolo prezzo scontato con la formula 
prezzo scontato = tariffa * ( sconto % / 100 )  // number

calcolo prezzo totale con istruzione condizionale 











*/
