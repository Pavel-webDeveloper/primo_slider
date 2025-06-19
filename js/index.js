let indice = 0;
let paesi = ["Italia", "Inghilterra", "Francia", "Svizzera", "Stati-Uniti"];
let descrizioni = [
    "Italia: Culla dell’arte rinascimentale e della cucina celebre in tutto il mondo, l’Italia incanta con città storiche, paesaggi vari e un’eredità culturale che abbraccia secoli.", 
    "Inghilterra: Terra di castelli, leggende e pub accoglienti, l’Inghilterra unisce tradizione e modernità, con Londra come cuore pulsante e campagne verdissime che raccontano storie antiche.",
    "Francia: Raffinata e romantica, la Francia è un tripudio di eleganza architettonica, arte, moda e sapori inconfondibili, con Parigi a guidare il suo spirito bohémien.",
    "Svizzera: Un paradiso alpino di precisione e natura incontaminata, la Svizzera è famosa per i suoi orologi, il cioccolato e la neutralità, incorniciata da laghi cristallini e vette imponenti.",
    "America: Vasta, multiculturale e dinamica, l’America (USA) è la patria di grandi metropoli, paesaggi epici e innovazione costante, simbolo di sogni, contrasti e ambizioni."
];

//                      ELEMENTI HTML

// CONTAINER LEFT
let containerLeft = document.querySelector(".container-left");
let containerImgLeft = document.createElement("div");
containerImgLeft.setAttribute("class", "container-img-left");
let imgPrimary = document.createElement("img");
imgPrimary.setAttribute("src", `img/${paesi[indice]}.png`);
containerImgLeft.append(imgPrimary);
containerLeft.append(containerImgLeft);

let containerDescription = document.querySelector(".container-description");
let description = document.createElement("p");
description.textContent = `${descrizioni[indice]}`;
description.style.color = "white";
description.style.fontSize = "1.6rem";
description.style.backgroundColor = "rgba(27, 5, 5, 0.5)"; /* Nero con 50% trasparenza */
description.style.padding = "15px";
containerDescription.append(description);


// CONTAINER RIGHT
let containerRight = document.querySelector(".container-right");

for (let i = 0; i < paesi.length; i++) {

    let imgRight = document.createElement("div");
    imgRight.setAttribute("class", "container-img-right");
    let imgIcon = document.createElement("img");
    imgIcon.setAttribute("src", `img/${paesi[i]}.png`);
    imgIcon.setAttribute("alt", paesi[i]);

    imgRight.append(imgIcon);
    containerRight.append(imgRight);  
}


/* LOGICA / INTERAZIONI */

let bottoneLeft = document.querySelector(".button-left");
let bottoneRight = document.querySelector(".button-right");
let bottoneUp = document.querySelector(".button-up");
let bottoneDown = document.querySelector(".button-down");

bottoneLeft.addEventListener("click", carosello);
bottoneRight.addEventListener("click", carosello);
bottoneUp.addEventListener("click", carosello);
bottoneDown.addEventListener("click", carosello);


function carosello(event){

    // console.log(event.target.className.includes("right"));
    if( event.target.className.includes("right") || event.target.className.includes("down")){
        indice++
    }else {
        indice--
    }

    if( indice < 0){
        indice = 4;
    }
    else if( indice > 4){
        indice = 0;
    }
    imgPrimary.setAttribute("src", `img/${paesi[indice]}.png`);
    description.textContent = `${descrizioni[indice]}`;
}
