document.addEventListener("DOMContentLoaded", () => {
    // Objeto para manejar los modales
    const modales = {
      longitud: {
        id: "modalLongitud",
        btnAbrir: "btnLongitud",
        btnCerrar: "#modalLongitud .close",
        convertir: convertirLongitudes
      },
      peso: {
        id: "modalPeso",
        btnAbrir: "btnPeso",
        btnCerrar: "#modalPeso .close",
        convertir: convertirPesos
      },
      temperatura: {
        id: "modalTemperatura",
        btnAbrir: "btnTemperatura",
        btnCerrar: "#modalTemperatura .close",
        convertir: convertirTemperaturas
      }
    };
  
    // Configurar eventos para cada modal
    Object.values(modales).forEach(modal => {
      const modalElement = document.getElementById(modal.id);
      const btnAbrir = document.getElementById(modal.btnAbrir);
      const btnCerrar = document.querySelector(modal.btnCerrar);
      const btnConvertir = document.querySelector(`#${modal.id} button`);
  
      // Abrir modal
      btnAbrir.addEventListener("click", () => {
        modalElement.style.display = "flex";
      });
  
      // Cerrar modal (botón X)
      btnCerrar.addEventListener("click", () => {
        modalElement.style.display = "none";
      });
  
      // Cerrar modal (clic fuera)
      window.addEventListener("click", (e) => {
        if (e.target === modalElement) {
          modalElement.style.display = "none";
        }
      });
  
      // Asignar función de conversión
      btnConvertir.addEventListener("click", modal.convertir);
    });
  
    /* FUNCIONES DE CONVERSIÓN */
  
    // Funcion para convertir Longitudes
    function convertirLongitudes() {
      const valor = parseFloat(document.getElementById("longitudParaConvertir").value);
      const deUnidad = document.getElementById("deUnidadLongitud").value;
      const paraUnidad = document.getElementById("paraUnidadLongitud").value;
      const resultadoElemento = document.getElementById("resultadoLongitud");
  
      // Validación
      if (isNaN(valor)) {
        resultadoElemento.textContent = "Ingrese un valor numérico válido.";
        return;
      }
      
      if (deUnidad === "defecto" || paraUnidad === "defecto") {
        resultadoElemento.textContent = "Seleccione las unidades de conversión.";
        return;
      }
  
      // Factores de conversión (a metros)
      const medidas = {
        milimetro: 0.001,
        centimetro: 0.01,
        metro: 1,
        kilometro: 1000,
        pulgada: 0.0254,
        pie: 0.3048,
        yarda: 0.9144,
        milla: 1609.34
      };
  
      // Convertir a metros y luego a la unidad objetivo
      const valorEnMetros = valor * medidas[deUnidad];
      const valorConvertido = valorEnMetros / medidas[paraUnidad];
  
      resultadoElemento.textContent = `Resultado: ${valorConvertido.toFixed(4)} ${paraUnidad}`;
    }
  
    // Función para convertir Pesos
    function convertirPesos() {
      const valor = parseFloat(document.getElementById("pesoParaConvertir").value);
      const deUnidad = document.getElementById("deUnidadPeso").value;
      const paraUnidad = document.getElementById("paraUnidadPeso").value;
      const resultadoElemento = document.getElementById("resultadoPeso");
  
      // Validación
      if (isNaN(valor)) {
        resultadoElemento.textContent = "Ingrese un valor numérico válido.";
        return;
      }
      
      if (valor < 0) {
        resultadoElemento.textContent = "El peso no puede ser negativo.";
        return;
      }
      
      if (deUnidad === "defecto" || paraUnidad === "defecto") {
        resultadoElemento.textContent = "Seleccione las unidades de conversión.";
        return;
      }
  
      // Factores de conversión (a gramos)
      const medidas = {
        gramo: 1,
        kilogramo: 1000,
        onza: 28.3495,
        libra: 453.592
      };
  
      // Convertir a gramos y luego a la unidad objetivo
      const valorEnGramos = valor * medidas[deUnidad];
      const valorConvertido = valorEnGramos / medidas[paraUnidad];
  
      resultadoElemento.textContent = `Resultado: ${valorConvertido.toFixed(4)} ${paraUnidad}`;
    }
  
    // Función para convertir temperaturas
    function convertirTemperaturas() {
      const valor = parseFloat(document.getElementById("temperaturaParaConvertir").value);
      const deUnidad = document.getElementById("deUnidadTemperatura").value;
      const paraUnidad = document.getElementById("paraUnidadTemperatura").value;
      const resultadoElemento = document.getElementById("resultadoTemperatura");
  
      let valorConvertido;
  
      // Validación
      if (isNaN(valor)) {
        resultadoElemento.textContent = "Ingrese un valor numérico válido.";
        return;
      }
      
      if (deUnidad === "defecto" || paraUnidad === "defecto") {
        resultadoElemento.textContent = "Seleccione las unidades de conversión.";
        return;
      }
  
      // Si las unidades son iguales
      if (deUnidad === paraUnidad) {
        valorConvertido = valor;
      } 
      // Conversiones desde Celsius
      else if (deUnidad === "celsius") {
        if (paraUnidad === "fahrenheit") {
          valorConvertido = valor * 9/5 + 32;
        } else if (paraUnidad === "kelvin") {
          valorConvertido = valor + 273.15;
        }
      } 
      // Conversiones desde Fahrenheit
      else if (deUnidad === "fahrenheit") {
        if (paraUnidad === "celsius") {
          valorConvertido = (valor - 32) * 5/9;
        } else if (paraUnidad === "kelvin") {
          valorConvertido = (valor - 32) * 5/9 + 273.15;
        }
      } 
      // Conversiones desde Kelvin
      else if (deUnidad === "kelvin") {
        if (paraUnidad === "celsius") {
          valorConvertido = valor - 273.15;
        } else if (paraUnidad === "fahrenheit") {
          valorConvertido = (valor - 273.15) * 9/5 + 32;
        }
        
        // Validar que no sea menor que 0 Kelvin
        if (valor < 0) {
          resultadoElemento.textContent = "Kelvin no puede ser menor que 0.";
          return;
        }
      }
  
      resultadoElemento.textContent = `Resultado: ${valorConvertido.toFixed(2)} ${paraUnidad}`;
    }
  });