let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click",function(){
    /*e.preventDefault();*/
    modalC.style.opacity = "1";
    modalC.style.visibility="visible";
    modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click",function(){
    modal.classList.toggle("modal-close");
});

console.log("anda");