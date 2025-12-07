document.addEventListener("DOMContentLoaded", () => {
  const botonesCarrito = document.querySelectorAll(".btn-carrito");

  botonesCarrito.forEach(boton => {
    boton.addEventListener("click", () => {
      const usuarioActivo = localStorage.getItem("usuarioActivo");

      if (!usuarioActivo) {
        alert("⚠️ Debes iniciar sesión para agregar al carrito.");
        window.location.href = "iniciosesion.html";
        return;
      }

      const tarjeta = boton.closest(".card");
      const nombre = tarjeta.dataset.nombre;
      const precio = parseFloat(tarjeta.dataset.precio);
      const img = tarjeta.dataset.img;

      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

      const existente = carrito.find(item => item.nombre === nombre);
      if (existente) {
        existente.cantidad += 1;
      } else {
        carrito.push({ nombre, precio, img, cantidad: 1 });
      }

      localStorage.setItem("carrito", JSON.stringify(carrito));
      alert(`${nombre} se agregó al carrito 🛒`);
    });
  });
});
