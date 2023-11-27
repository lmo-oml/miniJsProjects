/* 1- Scroller Project */
let el = document.querySelector(".p1-scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
  let scrolling = document.documentElement.scrollTop;
  el.style.width = `${(scrolling / height) * 100}%`;
});



/* 2- XO Game */
let p2TheTurn = "X";
let p2TheBox = [];
let p2TheItem = document.querySelector(".p2-xo-items-container").children
let p2Paragraph = document.querySelector(".p2-container > div p")
p2Paragraph.innerHTML = `Turn For: ${p2TheTurn}`;
function noWinner() {
  setTimeout(function () {
    for (let i = 0; i < 9; i++) {
      p2TheItem[i].innerHTML = "";
      document.getElementById(`p2-item${i + 1}`).style.backgroundColor = "#222";
      document.getElementById(`p2-item${i + 1}`).style.color = "gold";
    };
    p2Paragraph.innerHTML = `Turn For: ${p2TheTurn}`;
  }, 2000);

}
function endGame(num1, num2, num3) {
  document.getElementById(`p2-item${num1}`).style.backgroundColor = "gold";
  document.getElementById(`p2-item${num1}`).style.color = "#222";
  document.getElementById(`p2-item${num2}`).style.backgroundColor = "gold";
  document.getElementById(`p2-item${num2}`).style.color = "#222";
  document.getElementById(`p2-item${num3}`).style.backgroundColor = "gold";
  document.getElementById(`p2-item${num3}`).style.color = "#222";
  p2Paragraph.innerHTML = `Winner Is: ${document.getElementById(`p2-item${num1}`).innerHTML}`;
  setTimeout(function () {
    for (let i = 0; i < 9; i++) {
      p2TheItem[i].innerHTML = "";
    };
    document.getElementById(`p2-item${num1}`).style.backgroundColor = "#222";
    document.getElementById(`p2-item${num1}`).style.color = "gold";
    document.getElementById(`p2-item${num2}`).style.backgroundColor = "#222";
    document.getElementById(`p2-item${num2}`).style.color = "gold";
    document.getElementById(`p2-item${num3}`).style.backgroundColor = "#222";
    document.getElementById(`p2-item${num3}`).style.color = "gold";
    p2Paragraph.innerHTML = `Turn For: ${p2TheTurn}`;
  }, 2000);
};
function theWinner() {
  for (let i = 1; i < 10; i++) {
    p2TheBox[i] = document.getElementById(`p2-item${i}`).innerHTML;
  }
  if (p2TheBox[1] === p2TheBox[2] && p2TheBox[2] === p2TheBox[3] && p2TheBox[1] !== "") {
    endGame(1, 2, 3);
  }
  else if (p2TheBox[4] === p2TheBox[5] && p2TheBox[5] === p2TheBox[6] && p2TheBox[6] !== "") {
    endGame(4, 5, 6);
  }
  else if (p2TheBox[7] === p2TheBox[8] && p2TheBox[8] === p2TheBox[9] && p2TheBox[9] !== "") {
    endGame(7, 8, 9);
  }
  else if (p2TheBox[1] === p2TheBox[4] && p2TheBox[4] === p2TheBox[7] && p2TheBox[7] !== "") {
    endGame(1, 4, 7);
  }
  else if (p2TheBox[2] === p2TheBox[5] && p2TheBox[5] === p2TheBox[8] && p2TheBox[8] !== "") {
    endGame(2, 5, 8);
  }
  else if (p2TheBox[3] === p2TheBox[6] && p2TheBox[6] === p2TheBox[9] && p2TheBox[9] !== "") {
    endGame(3, 6, 9);
  }
  else if (p2TheBox[1] === p2TheBox[5] && p2TheBox[5] === p2TheBox[9] && p2TheBox[9] !== "") {
    endGame(1, 5, 9);
  }
  else if (p2TheBox[3] === p2TheBox[5] && p2TheBox[5] === p2TheBox[7] && p2TheBox[7] !== "") {
    endGame(3, 5, 7);
  }
  else if (p2TheBox[1] !== "" && p2TheBox[2] !== "" && p2TheBox[3] !== "" && p2TheBox[4] !== "" && p2TheBox[5] !== "" && p2TheBox[6] !== "" && p2TheBox[7] !== "" && p2TheBox[8] !== "" && p2TheBox[9] !== "") {
    p2Paragraph.innerHTML = `No Winner`;
    noWinner();
  }
}
document.addEventListener("click", el => {
  if (el.target.classList.contains("p2-index") && el.target.innerHTML === "" && p2TheTurn === "X") {
    el.target.innerHTML = p2TheTurn;
    p2TheTurn = "O";
    p2Paragraph.innerHTML = `Turn For: ${p2TheTurn}`;
  }
  else if (el.target.classList.contains("p2-index") && el.target.innerHTML === "" && p2TheTurn === "O") {
    el.target.innerHTML = p2TheTurn;
    p2TheTurn = "X";
    p2Paragraph.innerHTML = `Turn For: ${p2TheTurn}`;
  };
  theWinner();
  for (i = 0; i < 10; i++) {
    p2TheItem[i]
  }
})



/* 3- Hangman Game */
let p3BoxesContainer = document.querySelector(".p3-boxs-containers")
let p3TheLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let p3HangmanObject = {
  football: ["Manchester City", "Bayern", "Inter Milan", "Liverpool", "Real Madrid", "Arsenal", "Barcelona", "Porto", "AC Milan", "Leipzig"],
  movies: ["The Godfather", "The Dark Night", "Pulp Fiction", "Fight Club", "Inception", "Green Book", "Look Up", "Get Out"],
  people: ["Johnny Depp", "Jennifer Lopez", "Tom Cruise", "Taylor Swift", "Jackie Chan", "Will Smith"],
};
let p3TheSpan = document.querySelector(".p3-container header span:last-of-type");
let p3Footer = document.querySelector(".p3-container footer");
// Create Boxes Of The Letters
p3TheLetters.forEach(el => {
  let div = document.createElement("div");
  div.classList = "p3-box";
  div.innerText = el;
  p3BoxesContainer.appendChild(div);
});
// Get Random Number From Keys And Values
let p3Category = Object.keys(p3HangmanObject);  // all keys
let p3RandomKeyNumber = Math.round(Math.random() * 2); // random number form keys
let p3RandomKey = p3Category[p3RandomKeyNumber]; // key
let p3CategoryValues = p3HangmanObject[`${p3RandomKey}`];  // array of the random key
let p3RandomValueNumber = Math.ceil(Math.random() * p3CategoryValues.length) - 1; // random index number
let p3RandomValue = p3CategoryValues[p3RandomValueNumber]; // value
p3TheSpan.innerText = `Category: ${p3RandomKey.toUpperCase()}`;
// Create Letters Container
p3RandomValue.split("").forEach(el => {
  let span = document.createElement("span");
  let div = document.createElement("div");
  span.classList = "p3-the-letter";
  span.innerText = el;
  div.classList = "p3-letter-container";
  div.appendChild(span)
  p3Footer.appendChild(div);
  if (span.innerText === "") {
    div.style.border = "none";
  };
});
// Click Event
let p3SpansOfLetters = document.querySelectorAll("footer .p3-letter-container .p3-the-letter");
p3SpansOfLetters = Array.from(p3SpansOfLetters)
let p3WrongSteps = 0;
document.addEventListener("click", el => {
  let p3Status = false;
  if (el.target.classList.contains("p3-box") == true) {
    let p3BoxText;
    el.target.classList.add("p3-clicked");
    p3BoxText = el.target.innerText.toLowerCase();  // clicked element text;

    p3SpansOfLetters.forEach(ele => {
      if (ele.innerText.toLowerCase() === p3BoxText) {
        ele.style.opacity = "1";
        p3Status = true;
        p3WrongSteps--;
      };
    });
    p3WrongSteps++;
  };
  if (p3Status !== true) {
    document.querySelector(".p3-hangman-container").classList.add(`wrong-${p3WrongSteps}`);
  };
  if (p3WrongSteps === 5) {
    document.querySelector(".p3-container").classList.add("event-non");
    document.querySelector(".p3-popup").style.display = "block";
    let popupDiv = document.createElement("div");
    popupDiv.innerText = ` Game Over
    The Word is: ${p3RandomValue}`;
    document.querySelector(".p3-popup").appendChild(popupDiv);
    p3WrongSteps = 0;
  };
});



/* 4- Memory Game */
// get the cards
let p4ArrayOfCards = [...(document.querySelector(".p4-cards-container").children)];
let p4Duration = 700;
let p4BothCards = [];
let p4TheClass = true;
p4Shuffle(p4ArrayOfCards);
p4ArrayOfCards.forEach((card, index) => {
  card.style.order = index;
  // clicked the card to rotate
  card.addEventListener("click", ele => {
    if (ele.target.classList.contains("front") === true) {
      let parent = ele.target.parentElement;
      parent.classList.add("p4-flip");
      p4BothCards.unshift(parent);
      if (p4BothCards.length === 2) {
        p4Check(p4BothCards[0], p4BothCards[1])
      }
    };
  });
});
// default ordering function
function p4Shuffle(array) {
  let current = array.length,
    stash,
    random;
  while (current > 0) {
    random = Math.floor(Math.random() * current);
    current--;
    stash = array[current];
    array[current] = array[random];
    array[random] = stash;
  };
  return array;
};
// check function
function p4Check(cardOne, cardTwo) {
  if (cardOne.dataset.lang === cardTwo.dataset.lang) {
    setTimeout(() => {
      cardOne.classList.remove("p4-flip");
      cardTwo.classList.remove("p4-flip");
      cardOne.classList.add("p4-done");
      cardTwo.classList.add("p4-done");
      document.querySelector("#p4-correct").play();
      let p4Win = p4ArrayOfCards.every(function (el) {
        return el.classList.contains("p4-done") === p4TheClass;
      }, p4TheClass);
      if (p4Win === true) {
        let theDive = document.createElement("div");
        theDive.innerText = `
        Good Job 
        Wrong Steps are: ${document.querySelector(".p4-game-info div span").innerHTML}`;
        theDive.classList = "p4-win-popup";
        document.querySelector(".p4-container").appendChild(theDive);
      };
    }, p4Duration);
    p4BothCards = [];
  } else {
    setTimeout(() => {
      document.querySelector(".p4-game-info div span").innerHTML = parseInt(document.querySelector(".p4-game-info div span").innerText) + 1;
      cardOne.classList.remove("p4-flip");
      cardTwo.classList.remove("p4-flip");
      document.querySelector("#p4-wrong").play();
    }, p4Duration)
    p4BothCards = [];
  };
};



/* 5- Imgs Slider */
let p5Translate = -900;
let p5AllImgs = document.querySelectorAll(".p5-images-container img");
document.styleSheets[0].cssRules[71].style.setProperty("transform", `translateX(${p5Translate}px)`);
let p5Next = document.querySelector(".p5-slider-container > span:nth-of-type(1)");
let p5Previous = document.querySelector(".p5-slider-container > span:nth-of-type(2)");
let p5Dotes = document.querySelectorAll(".p5-dots span");
let p5Background = document.querySelector(".p5-container:before");
p5Next.addEventListener("click", () => {
  if (p5Translate > -1800 && p5Translate <= 0) {
    p5Translate -= 300;
    document.styleSheets[0].cssRules[71].style.setProperty("transform", `translateX(${p5Translate}px)`);
    if (p5Translate === -1800) {
      p5Next.classList = "p5-pointer-non";
    };
  };
  if (p5Previous.classList.contains("p5-pointer-non")) {
    p5Previous.classList.remove("p5-pointer-non");
  };
  p5DotesFunc(p5Translate);
});
p5Previous.addEventListener("click", () => {
  if (p5Translate >= -1800 && p5Translate < 0) {
    p5Translate += 300;
    document.styleSheets[0].cssRules[71].style.setProperty("transform", `translateX(${p5Translate}px)`);
    if (p5Translate === 0) {
      p5Previous.classList = "p5-pointer-non";
    };
  };
  if (p5Next.classList.contains("p5-pointer-non")) {
    p5Next.classList.remove("p5-pointer-non");
  };
  p5DotesFunc(p5Translate);
});
function p5DotesFunc(num) {
  p5Dotes.forEach(dot => {
    dot.classList.remove("p5-active");
  });
  switch (num) {
    case 0:
      p5Dotes[0].classList = "p5-active";
      document.styleSheets[0].cssRules[64].style.setProperty("background-image", `url(${p5AllImgs[0].getAttribute("src")})`);
      break;
    case -300:
      p5Dotes[1].classList = "p5-active";
      document.styleSheets[0].cssRules[64].style.setProperty("background-image", `url(${p5AllImgs[1].getAttribute("src")})`);
      break;
    case -600:
      p5Dotes[2].classList = "p5-active";
      document.styleSheets[0].cssRules[64].style.setProperty("background-image", `url(${p5AllImgs[2].getAttribute("src")})`);
      break;
    case -900:
      p5Dotes[3].classList = "p5-active";
      document.styleSheets[0].cssRules[64].style.setProperty("background-image", `url(${p5AllImgs[3].getAttribute("src")})`);
      break;
    case -1200:
      p5Dotes[4].classList = "p5-active";
      document.styleSheets[0].cssRules[64].style.setProperty("background-image", `url(${p5AllImgs[4].getAttribute("src")})`);
      break;
    case -1500:
      p5Dotes[5].classList = "p5-active";
      document.styleSheets[0].cssRules[64].style.setProperty("background-image", `url(${p5AllImgs[5].getAttribute("src")})`);
      break;
    case -1800:
      p5Dotes[6].classList = "p5-active";
      document.styleSheets[0].cssRules[64].style.setProperty("background-image", `url(${p5AllImgs[6].getAttribute("src")})`);
      break;
    default:
      dot.classList.remove("p5-active");
      break;
  };
};



/* 6- Timing Counter */
let p6YearNow = new Date().getFullYear();
let p6DateNow = new Date();
let p6BeforeNewYearWithMillSecond = new Date(`Dec 31, ${p6YearNow} 23:59:59`).getTime();
document.querySelector(".p6-container h3").innerHTML = `Time Before ${p6YearNow + 1}`;
setInterval(() => {
  let DateNowWithMillSecond = new Date().getTime();
  let theDifferent = p6BeforeNewYearWithMillSecond - DateNowWithMillSecond;
  let days = Math.floor(theDifferent / (1000 * 60 * 60 * 24));
  let hours = Math.floor((theDifferent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((theDifferent % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((theDifferent % (1000 * 60)) / (1000));
  document.querySelector(".p6-days .p6-number").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".p6-hours .p6-number").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".p6-minutes .p6-number").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".p6-seconds .p6-number").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}, 1000);




/* 8- CRUDS */
// get elements
let p8_btn = document.querySelector(".p8-btn");
let p8_searchByNameBtn = document.querySelector(".p8-search-name");
let p8_searchByCategoryBtn = document.querySelector(".p8-search-category");
let p8_deleteAllBtn = document.querySelector(".p8-delete-all");
let p8_tBody = document.querySelector(".p8-container table tbody");
//create variables
let p8_id;
if (localStorage.getItem("id") !== null) {
  p8_id = +(localStorage.getItem("id"));
} else {
  p8_id = 0;
  localStorage.setItem("id", p8_id);
}
let p8_productsArray;
if (localStorage.getItem("products") === null) {
  p8_productsArray = [];
} else {
  p8_productsArray = JSON.parse(localStorage.getItem("products"));
}
if (localStorage.getItem("products") === null) {
  localStorage.setItem("products", JSON.stringify(p8_productsArray));
}
let check = true;
let p8_mode = "create";
let temp;
if (check === true) {
  p8_addToTable(p8_productsArray);
  check = false;
}
let p8_searchBy = "category";
if (p8_productsArray.length === 0) {
  p8_deleteAllBtn.style.display = "none";
} else {
  p8_deleteAllBtn.style.display = "block";
  p8_deleteAllBtn.innerHTML = `delete all [ ${p8_productsArray.length} ]`;

};
// get salary
function p8_salaryFunc() {
  let totalPieces = document.querySelector(".p8-pieces").value
  let prise = document.querySelector(".p8-prise").value;
  let taxes = document.querySelector(".p8-taxes").value;
  document.querySelector(".p8-container .p8-inputs-container > div").innerHTML = "";
  if (totalPieces > 0 && prise > 0 && taxes != "") {
    let salary = (+prise + +taxes) / totalPieces;
    if (salary === Infinity || salary === NaN) {
      salary = 0;
    }
    document.querySelector(".p8-container .p8-inputs-container > div").innerHTML = Math.ceil(salary);
    document.querySelector(".p8-container .p8-inputs-container > div").style.color = "#00e2ff";
  };
};
// btn function
p8_btn.onclick = function p8_collectData() {

  // value of the inputs
  let p8_productName = document.querySelector(".p8-product-name").value;
  let p8_pieces = document.querySelector(".p8-pieces").value;
  let p8_prise = document.querySelector(".p8-prise").value;
  let p8_taxes = document.querySelector(".p8-taxes").value;
  let p8_salary = document.querySelector(".p8-container .p8-inputs-container > div").innerHTML;
  let p8_category = document.querySelector(".p8-category").value;

  // btn = create
  if (p8_mode === "create") {

    if (p8_productName !== "" && p8_category !== "") {

      p8_productsArray = JSON.parse(localStorage.getItem("products"));

      p8_id++;
      localStorage.setItem("id", p8_id)
      let newObj = {

        id: p8_id,
        pn: p8_productName.toLowerCase(),
        pi: p8_pieces,
        pr: p8_prise,
        tx: p8_taxes,
        sa: p8_salary,
        ca: p8_category.toLowerCase(),

      };

      p8_productsArray.push(newObj);
      localStorage.setItem("products", JSON.stringify(p8_productsArray));
      p8_addToTable(p8_productsArray);
    };

  };

  if (p8_mode === "update") {

    p8_productsArray[temp] = {

      id: p8_productsArray[temp].id,
      pn: p8_productName,
      pi: p8_pieces,
      pr: p8_prise,
      tx: p8_taxes,
      sa: p8_salary,
      ca: p8_category,

    };

    p8_addToTable(p8_productsArray);
    localStorage.setItem("products", JSON.stringify(p8_productsArray));
    p8_mode = "create";
    p8_btn.innerHTML = "create";

  };

  // reset inputs values
  document.querySelector(".p8-product-name").value = "";
  document.querySelector(".p8-pieces").value = "";
  document.querySelector(".p8-prise").value = "";
  document.querySelector(".p8-taxes").value = "";
  document.querySelector(".p8-container .p8-inputs-container > div").innerHTML = "";
  document.querySelector(".p8-category").value = "";

  document.querySelector(".p8-container .p8-inputs-container .p8-search").style.display = "none";
  p8_deleteAllBtn.style.display = "block";
  p8_deleteAllBtn.innerHTML = `delete all [ ${p8_productsArray.length} ]`;

};
// create data to table function
function p8_addToTable(arr) {
  p8_tBody.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {

    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${arr[i].id}</td>
    <td>${arr[i].pn}</td>
    <td>${arr[i].pi}</td>
    <td>${arr[i].pr}</td>
    <td>${arr[i].tx}</td>
    <td>${arr[i].sa}</td>
    <td>${arr[i].ca}</td>
    <td><button onclick="p8_updateFunc(${arr[i].id})">update</button></td>
    <td><button onclick="p8_deleteFunc(${arr[i].id})">delete</button></td>
    `;
    p8_tBody.appendChild(tr);

  };

};
// update date from table function
function p8_updateFunc(clicked_id) {

  p8_mode = "update";
  p8_btn.innerHTML = "update";

  console.log(clicked_id);

  for (let i = 0; i < p8_productsArray.length; i++) {

    if (p8_productsArray[i].id === clicked_id) {

      document.querySelector(".p8-product-name").value = p8_productsArray[i].pn;
      document.querySelector(".p8-pieces").value = p8_productsArray[i].pi;
      document.querySelector(".p8-prise").value = p8_productsArray[i].pr;
      document.querySelector(".p8-taxes").value = p8_productsArray[i].tx;
      document.querySelector(".p8-container .p8-inputs-container > div").innerHTML = p8_productsArray[i].sa;
      document.querySelector(".p8-category").value = p8_productsArray[i].ca;

      temp = i;

    };

  };

};
// delete data from table function
function p8_deleteFunc(clicked_id) {

  for (let i = 0; i < p8_productsArray.length; i++) {
    if (p8_productsArray[i].id === clicked_id) {
      temp = i;
    };
  };

  let array = p8_productsArray.splice(temp, 1);
  localStorage.setItem("products", JSON.stringify(p8_productsArray));
  document.querySelector(".p8-container .p8-inputs-container .p8-search").style.display = "none";
  p8_addToTable(p8_productsArray);

};
// search input value
function p8_typingFunc() {

  let newArr = [];
  p8_tBody.innerHTML = "";

  if (p8_searchBy === "category") {

    for (let i = 0; i < p8_productsArray.length; i++) {

      if ((Object.values(p8_productsArray[i])[6]).startsWith(((document.querySelector(".p8-container .p8-inputs-container .p8-search").value).toLowerCase())) === true) {

        newArr.push(p8_productsArray[i])

      };


    };

  };

  if (p8_searchBy === "name") {

    for (let i = 0; i < p8_productsArray.length; i++) {

      if ((Object.values(p8_productsArray[i])[1]).startsWith(((document.querySelector(".p8-container .p8-inputs-container .p8-search").value).toLowerCase())) === true) {

        newArr.push(p8_productsArray[i]);

      };


    };

  };

  p8_addToTable(newArr);

};
// search by category btn
function p8_searchByCatFunc() {

  p8_searchBy = "category";

  document.querySelector(".p8-container .p8-inputs-container .p8-search").style.display = "block";
  document.querySelector(".p8-container .p8-inputs-container .p8-search").focus()
  p8_typingFunc();

};
// search by product name btn
function p8_searchByNameFunc() {

  p8_searchBy = "name";

  document.querySelector(".p8-container .p8-inputs-container .p8-search").style.display = "block";
  document.querySelector(".p8-container .p8-inputs-container .p8-search").focus()
  p8_typingFunc();

};
// delete all products
p8_deleteAllBtn.onclick = function () {

  p8_tBody.innerHTML = "";
  p8_productsArray = [];
  localStorage.setItem("products", JSON.stringify(p8_productsArray));

};



/* 9- War Game */
function P9_person(name, damage, health) {

  this.theName = name;
  this.theDamage = damage;
  this.theHealth = health;


  this.healthBar = document.querySelector(`.p9-${this.theName}-health-bar span`);
  this.attackBtn = document.querySelector(`#p9-${this.theName}-attack`);
  this.healthBtn = document.querySelector(`#p9-${this.theName}-health`);
  this.img = document.querySelector(`#p9-${this.theName}-img`);

}

let naruto = new P9_person("naruto", 10, 100);
let sasoki = new P9_person("sasoki", 20, 100);

P9_person.prototype.health = function () {

  if (this.theHealth < 100) {

    this.theHealth += (40 / this.theDamage) * 10;

    if (this.theHealth < 100) {

      this.healthBar.style.width = `${this.theHealth}%`;

    } else {

      this.theHealth = 100;
      this.healthBar.style.width = `${this.theHealth}%`;

    };

  };

};
P9_person.prototype.attack = function (anime) {

  if (anime.theHealth > 0) {

    anime.theHealth -= this.theDamage;
    anime.healthBar.style.width = `${anime.theHealth}%`;

  };
  if (anime.theHealth <= 0) {


    anime.attackBtn.style.display = "none";
    anime.healthBtn.style.display = "none";
    anime.img.style.filter = "grayscale(95%)"


  };

};

naruto.attackBtn.onclick = function () {

  naruto.attack(sasoki);

};
sasoki.attackBtn.onclick = function () {

  sasoki.attack(naruto);

};

naruto.healthBtn.onclick = function () {

  naruto.health();

};
sasoki.healthBtn.onclick = function () {

  sasoki.health();

};



/* 11- Prayer Timing Api */
function p11_getTimingFunc(city, country) {

  document.querySelector(".p11-info").style.visibility = "hidden";
  fetch(`http://api.aladhan.com/v1/timingsByCity?city= ${city}&country=${country}&method=8`).then(response => {
    return response.json();
  }).then(cityTiming => {
    let content = `
    <span>${cityTiming.data["date"]["hijri"]["date"]}</span>
    <span>${cityTiming.data["date"]["hijri"]["month"]["ar"]}</span>
    `;
    document.querySelector(".p11-date").innerHTML = content;
    let timing = cityTiming.data["timings"];
    return timing;
  }).then(timing => {

    let content = `
    <div>
      <span>Al-Fajr</span>
      <span>${timing.Fajr}</span>
    </div>
    <div>
      <span>Sunrise</span>
      <span>${timing.Sunrise}</span>
    </div>
    <div>
      <span>Al-Dhuhr</span>
      <span>${timing.Dhuhr}</span>
    </div>
    <div>
      <span>Al-Asr</span>
      <span>${timing.Asr}</span>
    </div>
    <div>
      <span>Al-Maghrib</span>
      <span>${timing.Maghrib}</span>
    </div>
    <div>
      <span>Al-Isha</span>
      <span>${timing.Isha}</span>
    </div>
    `;
    document.querySelector(".p11-info").innerHTML = content;
    document.querySelector(".p11-info").style.visibility = "visible";

  }).catch(error => {
    error = "Connection Error";
    console.log(error);
  });

};
function p11_getCityFunc(city, ele) {

  document.querySelectorAll(".p11-parent .p11-timing-container>div[id]").forEach(el => {
    el.classList.remove("p11-selected")
  });
  ele.classList = "p11-selected";
  let theCity = city.slice(4);
  let theCountry = ele.innerText;
  p11_getTimingFunc(theCity, theCountry);

};
p11_getCityFunc("aljazeera", document.querySelector(".p11-timing-container > div:first-of-type"));
