let numbers = document.querySelectorAll('.calculator-button');
let Output = document.querySelector('.calculator-screen');
let string = "";

numbers.forEach((Numbers)=>{
    Numbers.addEventListener('click',(event)=>{
       if(event.target.innerHTML == '=')
       {
            string = eval(string);  //eval is a function to perform operations between operands
            Output.value=string;
       }
       else
       if(event.target.innerHTML == 'AC')
       {
            string = "0";
            Output.value = string;
       }
       else
       if(event.target.innerHTML == 'Del')
       {
            string= string.substring(0,string.length-1);
            Output.value=string;
       }
       else
       if(event.target.innerHTML == 'Off')
       {
            textChange = "ON";
            Numbers.style.backgroundColor = "green";
            event.target.innerHTML = textChange;
            Output.value = "";
            string="";
       }
       else
       if(event.target.innerHTML == 'ON')
       {
            textChange = "Off";
            Numbers.style.backgroundColor = "red";
            event.target.innerHTML = textChange;
            Output.value = "0";

       }
       else
       {
            string += event.target.innerHTML;
            Output.value=string;
       }
    })
})


// Main Points 
// 1) We use eval function to perform mathematical operation...
// 2) event.target.innerHTML is used to get the HTMl of targeted element..
// 3) Use Of substring...