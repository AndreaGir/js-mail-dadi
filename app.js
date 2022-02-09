 let email = prompt ('Ciao ,dimmi la tua email per verificare che sei registrato!');

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

    




