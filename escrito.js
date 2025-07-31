function calcularTotal() {
  const nombre = document.getElementById("nombre").value.trim(); //elimina espacios en blanco
  const cantidad = parseInt(document.getElementById("cantidad").value); //CONVIERTE DE STRING A INT
  const tipo = document.getElementById("tipoEntrada").value;
  const codigo = document.getElementById("descuento").value.trim().toLowerCase();
  const resultado = document.getElementById("resultado");

  if (!nombre || isNaN(cantidad) || cantidad <= 0) {
    alert("Por favor, completa todos los campos correctamente.");
    return;
  }

  let precioEntrada = 0;

  switch (tipo) {
    case "gen":
      precioEntrada = 1000;
      break;
    case "vip":
      precioEntrada = 2000;
      break;
    case "backstage":
      precioEntrada = 1500;
      break;
    default:
      alert("Selecciona un tipo de entrada válido.");
      return;
  }

  let total = cantidad * precioEntrada;

  if (codigo === "rock10") {
    total *= 0.9;
  }

  resultado.style.display = "block";
  resultado.innerHTML = `
    <strong>¡Gracias, ${nombre}!</strong><br>
    Tipo de entrada: ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}<br>
    Cantidad: ${cantidad}<br>
    Total a pagar: <strong>$${total.toFixed(2)}</strong>
    ${codigo === "rock10" ? "<br><em>Descuento aplicado (10%)</em>" : ""}
  `;
}

// Asociar el botón al evento
document.getElementById("btn_calcular").addEventListener("click", calcularTotal);
