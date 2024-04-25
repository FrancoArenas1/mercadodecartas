document.addEventListener("DOMContentLoaded", function() {
    const colector = document.getElementById("colector");
    const cartasContainer = document.getElementById("cartas");
    const verMasBtn = document.getElementById("verMas");
    const numCartasPorPagina = 6; // Cambia este valor según la cantidad deseada

    let numCartasMostradas = 0;

    // Función para agregar cartas al contenedor
    function agregarCarta() {
      const carta = document.createElement("div");
      carta.classList.add("carta");
      carta.textContent = `Carta ${numCartasMostradas + 1}`;
      cartasContainer.appendChild(carta);
      numCartasMostradas++;
    }

    // Mostrar las primeras cartas
    function mostrarCartas() {
      const numCartasAMostrar = Math.min(numCartasPorPagina, 1000 - numCartasMostradas); // Limitar a 1000 cartas
      for (let i = 0; i < numCartasAMostrar; i++) {
        agregarCarta();
      }
    }

    // Mostrar las primeras cartas al cargar la página
    mostrarCartas();

    // Evento para mostrar más cartas al hacer clic en "Ver más cartas"
    verMasBtn.addEventListener("click", function() {
      mostrarCartas();
      if (numCartasMostradas >= 1000) {
        verMasBtn.disabled = true;
        verMasBtn.textContent = "No hay más cartas";
      }
    });
  });