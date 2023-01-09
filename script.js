let text=document.getElementsByTagName('h1')[0].innerText
console.log(text);
console.log(typeof text)
var count = parseFloat(text);
console.log(count);
console.log(typeof count)

//INCREEMNT FUNCTION
function incrementfunction(){
    count++;
    document.getElementsByTagName('h1')[0].innerText=count;

}
let incrementBtn=document.getElementById('increment')

incrementBtn.addEventListener('click',incrementfunction)
//DECREMENT FUNCTION
function decrementfunction(){
    count--;
    document.getElementsByTagName('h1')[0].innerText=count;

}
let decrementBtn=document.getElementById('decrement')

decrementBtn.addEventListener('click',decrementfunction)

//RESET FUNCTION
function resetfunction(){
    count=0;
    document.getElementsByTagName('h1')[0].innerText=count;

}
let resetBtn=document.getElementById('reset')

resetBtn.addEventListener('click', resetfunction)