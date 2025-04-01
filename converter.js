document.addEventListener("DOMContentLoaded", () => {
  // Seleccionar los modales y botones
  const modalLongitud = document.getElementById("modalLongitud");
  const modalPeso = document.getElementById("modalPeso");
  const modalTemperatura = document.getElementById("modalTemperatura");
  const btnAbrirModalTemperatura = document.getElementById("btnTemperatura");
  const btnAbrirModalLongitud = document.getElementById("btnLongitud");
  const btnAbrirModalPeso = document.getElementById("btnPeso");

  // Seleccionar los botones de cierre (X) de cada modal
  const closeModalLongitud = document.querySelector("#modalLongitud .close");
  const closeModalPeso = document.querySelector("#modalPeso .close");
  const closeModalTemperatura = document.querySelector("#modalTemperatura .close");

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

  // Evento para abrir el modal de Temperaatura
  btnAbrirModalTemperatura.addEventListener("click", (e) => {
    modalTemperatura.style.display = "flex";
  });

  // Evento para cerrar el modal de Temperatura (clic en la X).
  closeModalTemperatura.addEventListener("click", () => {
    modalTemperatura.style.display = "none";
  });

  // Evento para cerrar el modal de Temperatura (clic afuera del modal)
  window.addEventListener("click", (e) => {
    if(e.target === modalTemperatura){
        modalTemperatura.style.display = "none";
    }
  });

  /* LOGICA. */

  // Funcion para convertir Longitudes.
  function convertirLongitudes() {

    const valor = parseFloat(document.getElementById("longitudParaConvertir").value);
    const deUnidad = document.getElementById("deUnidad").value;
    const paraUnidad = document.getElementById("paraUnidad").value;
    const resultadoElemento = document.getElementById("resultadoLongitud");

    // Validación de entrada de datos.
    if (isNaN(valor) || deUnidad === "defecto" || paraUnidad === "defecto") {
        resultadoElemento.textContent = "Ingrese un valor válido y seleccione las unidades."
        return;
    };

    // Elementos de conversión (metros).
    const medidas = {
        "milimetro": 0.001,
        "centimetro": 0.01,
        "metro": 1,
        "kilometro": 1000,
        "pulgada": 0.0254,
        "pie": 0.3048,
        "yarda": 0.9144,
        "milla": 1609.34
    };

    // Convertir entrada de usuario a metros (caso base).
    const valorEnMetros = valor * medidas[deUnidad];

    // Convertir de metros a la unidad elegida.
    const valorConvertido = valorEnMetros / medidas[paraUnidad];

    resultadoElemento.textContent = `Resultado: ${valorConvertido.toFixed(4)} ${paraUnidad}`;

    console.log(valorConvertido);
  }

  // Función para convertir Pesos.
  function convertirPesos() {
    
    const valor = parseFloat(document.getElementById("pesoParaConvertir").value);
    const deUnidadPeso = document.getElementById("deUnidadPeso").value;
    const paraUnidadPeso = document.getElementById("paraUnidadPeso").value;
    const resultadoElemento = document.getElementById("resultadoPeso");

    if (isNaN(valor) || deUnidadPeso === "defecto" || paraUnidadPeso === "defecto") {
        resultadoElemento.textContent = "Ingrese un valor válido y seleccione las unidades.";
        return;
    }

    // Elementos de conversión (a gramos).
    const medidas = {
        "gramo": 1,
        "kilogramo": 1000,
        "onza": 28.3495,
        "libra": 453.592
    };

    // Convertir entrada de usuario a gramos.
    const valorEnGramos = valor * medidas[deUnidadPeso];
    
    // Convertir de gramos a la unidad deseada.
    const valorConvertido = valorEnGramos / medidas[paraUnidadPeso];

    resultadoElemento.textContent = `Resultado: ${valorConvertido.toFixed(4)} ${paraUnidadPeso}`
    console.log(valorConvertido);
  }


  /* OPERACIÓN / EJECUCIÓN */

  // Seleccionar botón que convierte las unidades de longitud.
  document.querySelector("#modalLongitud button").addEventListener("click", convertirLongitudes);
  document.querySelector("#modalPeso button").addEventListener("click", convertirPesos);
});

console.log("Hola MANUELITO!");
