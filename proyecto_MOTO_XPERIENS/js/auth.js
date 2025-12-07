// REGISTRO DE USUARIO
const registroForm = document.getElementById("registroForm");
if (registroForm) {
  registroForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    // Guarda los datos en el almacenamiento local
    const usuario = { nombre, correo, password };
    localStorage.setItem("usuario_" + correo, JSON.stringify(usuario));

    alert("✅ Registro exitoso. Ahora puedes iniciar sesión.");
    window.location.href = "iniciosesion.html";
  });
}

// INICIO DE SESIÓN
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    const usuarioGuardado = localStorage.getItem("usuario_" + correo);

    if (!usuarioGuardado) {
      alert("⚠️ No existe una cuenta con este correo.");
      return;
    }

    const usuario = JSON.parse(usuarioGuardado);

    if (usuario.password === password) {
      alert("👋 Bienvenido, " + usuario.nombre + "!");
      localStorage.setItem("usuarioActivo", correo);
      window.location.href = "bikerT.html";
    } else {
      alert("❌ Contraseña incorrecta.");
    }
  });
}
