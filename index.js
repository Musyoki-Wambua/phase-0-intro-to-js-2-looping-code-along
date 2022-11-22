// Code your solutions in this file
const names = [ "Guadalupe", "Ollie", "Alli"];
const event = 'surprise';

function writeCards (names , event) {
    let arr1 = [];
   for (let i=0; i < names.length; i++ ) {
    arr1.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
   }

return arr1;
}



function countDown(countdown){
    while (countdown  > 0 ){
        console.log (countdown);
        countdown -= 1;
    }
    console.log (countdown);
}
