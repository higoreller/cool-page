const advice = document.getElementById("advice") 

function getData(){
    fetch('https://api.adviceslip.com/advice')
  .then((response) => response.json())
  .then((data) => {
        console.log(data.slip.advice)
        advice.innerText = data.slip.advice
    });
}