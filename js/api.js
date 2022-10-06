//API que retorna um conselho

async function getData() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  return data.slip.advice;
}

async function getAdvice() {
  let adviceFromAPI = await getData();
  let advice = document.getElementById("advice");
  advice.innerHTML = adviceFromAPI;
  advice.style.fontSize = "5rem";
  phrase.style.fontFamily = "Arial";
  advice.style.display = "block";
  advice.style.width = "100%";
  advice.style.textAlign = "center";
  advice.style.padding = "6rem 3rem";
  advice.style.color = "white";
  advice.style.fontWeight = "700";
  return advice;
}

//API que retorna uma frase do Chuck Norris
async function getChuckData() {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await response.json();
  return data.value;
}

async function getPhrase() {
  let phraseFromAPI = await getChuckData();
  let phrase = document.getElementById("phrase");
  phrase.innerHTML = phraseFromAPI;
  phrase.style.fontSize = "5rem";
  phrase.style.fontFamily = "Arial";
  phrase.style.display = "block";
  phrase.style.width = "100%";
  phrase.style.textAlign = "center";
  phrase.style.padding = "6rem 3rem";
  phrase.style.color = "white";
  phrase.style.fontWeight = "700";
  return phrase;
}
