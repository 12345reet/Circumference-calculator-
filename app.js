x()
function x(){
let rad = window.prompt('Enter radius');
if (rad = NaN){
document.write('Error, input is not a number');
}else{
let radu = rad*rad
let pi = 3.14
const x = document.getElementById('h1')
x.innerHTML += ('The circumfrace is' + ' ' + pi*radu);
}}