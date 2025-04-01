// Seleccionar los modales y botones
const modalLongitud = document.getElementById("modalLongitud");
const modalPeso = document.getElementById("modalPeso");
const btnAbrirModalLongitud = document.getElementById("btnLongitud");
const btnAbrirModalPeso = document.getElementById("btnPeso");

// Seleccionar los botones de cierre (X) de cada modal
const closeModalLongitud = document.querySelector("#modalLongitud .close");
const closeModalPeso = document.querySelector("#modalPeso .close");

// Evento para abrir el modal de Longitud
btnAbrirModalLongitud.addEventListener("click", () => {
    modalLongitud.style.display = "flex";
});

// Evento para cerrar el modal de Longitud (clic en la X)
closeModalLongitud.addEventListener("click", () => {
    modalLongitud.style.display = "none";
});

// Evento para cerrar el modal de Longitud (clic afuera del modal)
window.addEventListener("click", (e) => {
    if (e.target === modalLongitud) {
        modalLongitud.style.display = "none";
    }
});

// Evento para abrir el modal de Peso
btnAbrirModalPeso.addEventListener("click", () => {
    modalPeso.style.display = "flex";
});

// Evento para cerrar el modal de Peso (clic en la X)
closeModalPeso.addEventListener("click", () => {
    modalPeso.style.display = "none";
});

// Evento para cerrar el modal de Peso (clic afuera del modal)
window.addEventListener("click", (e) => {
    if (e.target === modalPeso) {
        modalPeso.style.display = "none";
    }
});

console.log("Hola MANUELITO!");
