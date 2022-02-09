/*  let email = prompt ('Ciao ,dimmi la tua email per verificare che sei registrato!');

const emailRegistrate = [
    'ciccio@gmail.com',
    'ci@gmail.com',
    'io@gmail.com',
    'cic@gmail.com',
];


for ( i = 0 ; i < emailRegistrate.length ; i++){
    if( email === emailRegistrate[i]){
        alert('ok puoi entrare!')
        break
        console.log(email)
    }
    else {
        alert('non sei registrato!')
        break
    }
    
} 
 */


let mioNumero = prompt('scegli un numero da 1 a 6!')
if (mioNumero > 6){
    alert('ho detto da 1 a 6...')
}


 let computerNumero = Math.floor(Math.random() * 6) + 1
if ( mioNumero > computerNumero){
    alert('Daje, hai vinto!!')
}
else if (mioNumero < computerNumero ){
    alert('Sei sfortunato ,riprova!')
}
else if (mioNumero == computerNumero){
    alert('uhhh , sono uguali. Quindi non hai vinto !!')
}


    




