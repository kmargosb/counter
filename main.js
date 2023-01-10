// Variables

const $counterP = document.querySelector("body > section > p");
const $decreaseBtn = document.querySelector('.decrease-btn');
const $resetBtn = document.querySelector('.reset-btn');
const $increaseBtn = document.querySelector('.increase-btn');
let numero = 0;

// FUNCIONES

$decreaseBtn.addEventListener('click', ()=>{
        numero--;
        $counterP.innerHTML = numero;
        if(numero < 0){
            $counterP.style.color = "red";
        }else if(numero === 0){
            $counterP.style.color = "black"
        }
})

$increaseBtn.addEventListener('click', ()=>{
    numero++;
    $counterP.innerHTML = numero;
    if (numero > 0){
        $counterP.style.color = "green";
    }else if(numero === 0){
        $counterP.style.color = "black"
    }
})

$resetBtn.addEventListener('click', ()=>{
    numero = 0;
    $counterP.innerHTML = numero;
    if(numero === 0){
        $counterP.style.color = "black";
    }
})


