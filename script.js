
const  results= document.getElementById("result");

const  compute = document.getElementById("btn");


function calculate (){

h=parseInt(document.getElementById("h").value);
w=parseInt(document.getElementById('w').value);


const bmi = (w / ((h*h)/10000)).toFixed(2);
//display the results
results.innerHTML = `<span><b>${bmi}<b></span>`

}

compute.addEventListener('click', calculate)