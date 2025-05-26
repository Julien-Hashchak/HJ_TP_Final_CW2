const images1 = document.querySelectorAll(".personne1");
const images2 = document.querySelectorAll(".personne2");
const images3 = document.querySelectorAll(".personne3");

const modale1 = document.querySelector(".modale1");
const modale2 = document.querySelector(".modale2");
const modale3 = document.querySelector(".modale3");

for(let i=0; i<images1.length; i+=1){
    images1[i].addEventListener("click",ouvrirModale1);
}

for(let i=0; i<images2.length; i+=1){
    images2[i].addEventListener("click",ouvrirModale2);
}

for(let i=0; i<images3.length; i+=1){
    images3[i].addEventListener("click",ouvrirModale3);
}

/* Personnage 1 */

function ouvrirModale1(){

    console.log("Allo");
    modale1.classList.add("visible");
    modale1.addEventListener("click", fermerModale1);
}

function fermerModale1(){
    modale1.classList.remove("visible");
}

/* Personnage 2 */

function ouvrirModale2(){

    console.log("Allo");
    modale2.classList.add("visible");
    modale2.addEventListener("click", fermerModale2);
}

function fermerModale2(){
    modale2.classList.remove("visible");
}


/* Personnage 3 */

function ouvrirModale3(){

    console.log("Allo");
    modale3.classList.add("visible");
    modale3.addEventListener("click", fermerModale3);
}

function fermerModale3(){
    modale3.classList.remove("visible");
}