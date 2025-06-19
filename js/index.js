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
console.log(containerLeft, "containerLeft");

containerLeft.innerHTML += `
    <div class="container-img-left">
                    <img src="img/${paesi[indice]}.png" alt="">
                </div>
`;



// CONTAINER RIGHT
let containerRight = document.querySelector(".container-right");
console.log(containerRight, "containerRight");

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
console.log(bottoneLeft, "bottoneLeft");

