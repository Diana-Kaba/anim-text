function addText(id, text) {
  let arr = ["перемога", "Різдво", "Новий рік", "кохання"];
  let random = Math.floor(Math.random() * arr.length);
  text = arr[random];
  let timer;
  let elem = document.getElementById("block");
  let pos = 0; // начальне значення, відповідає першій літері

  function addLetter() {
    // функція для друку літер
    pos++; // в elem.innerHTML друкуємо підрядок text  довжиною від 0 до pos символів
    //  elem.innerHTML += text[pos];
    elem.innerHTML = text.substring(0, pos);
    if (pos == text.length) {
      // слово надруковано повністю
      clearInterval(timer); // завершити анімацію
    }
  }
  timer = setInterval(addLetter, 1000); // викликати функцію addLetter() кожні 1000 мс
}
