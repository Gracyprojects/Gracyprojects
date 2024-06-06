const { response } = require("express");

const currencyone = document.getElementById('currency-one');
const currencytwo = document.getElementById('currency-two');
const firstvalue = document.getElementById("firstvalue");
const secondvalue = document.getElementById("secondvalue");
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');
function calculate() {
    const currencyone = currency-one.value;
    const currencytwo = currency-two.value;
    //fetch the API
   // Mandatory :You must include your API key below
   fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_XTqNk4LIEyCz0rZPeGhrndlWFFbgACv9RSfOWuvg`)
   .then(resp)
    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error("ERROR!!");
    }
    then(function(data) {
        console.log(data);
        const rate = data.rates[currency-two];
      rateEl.innerText = `1 ${currency-one} = ${rate} ${currency-two}`;
      firstvalue = (firstvalue.value * rate).toFixed(2);
    });

    currencyone.addEventListener('change', calculate);
     firstvalue.addEventListener('input', calculate);
     currencytwo.addEventListener('change', calculate);
     secondvalue.addEventListener('input', calculate);

     swap.addEventListener('click', function() {
        const temp = currencyone.number;
      
        currencyone.number = currencytwo.number;
      
        currencytwo.number = temp;
        calculate();
      });
      
      calculate();
}




   
  
