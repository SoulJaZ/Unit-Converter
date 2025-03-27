// Seleccionar elementos.
const modal = document.getElementById("modalLongitud");
const btnAbrirModal = document.getElementById("btnLongitud");


// Evento para abrir el modal

btnAbrirModal.addEventListener("click", (e) => {
    modal.style.display = "flex";
})
// Evento para cerrar el modal haciendo click afuera de él.
window.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.style.display = "none";
    }
})
console.log("Hola MANUELITO!")