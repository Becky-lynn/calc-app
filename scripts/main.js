//knows how to respond to html and dom with click events and sends to calc class

import { Calculator } from "./calc.js"

let calc = new Calculator();

document.getElementById("calculate").addEventListener('click', function(){
    let input1 = Number(document.getElementById('input1').value);
    let input2 = Number(document.getElementById("input2").value);
    let operation = document.getElementById("operation").value;

    console.log(input1);
    console.log(input2);
    console.log(operation);
    
    //changing output from 0 to the output of calculation
    let output = 0;

   if (operation == "+") {
      output = calc.add(input1, input2);
     }
   else if (operation == "-") {
      output = calc.subtract(input1, input2);
   }
   else if (operation == "*") {
      output = calc.multiply(input1, input2);
   }
   else if (operation == "/") {
      output = calc.divide(input1, input2);
   }
   else {
     output = "???";
   }
   
  document.getElementById("output").innerText = output;

});





  
  
  