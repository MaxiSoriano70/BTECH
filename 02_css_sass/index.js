const abrir = document.querySelector(".abrirMenu");
const cerrar = document.querySelector(".cerrarMenu");
const menus = document.querySelectorAll("nav, header div");

abrir.addEventListener("click", () => {
    cerrar.style.display = "flex";
    abrir.style.display = "none";
    menus.forEach(m => {
        m.classList.add("menuAbierto");
        m.classList.remove("menuCerrado");
    });
});

cerrar.addEventListener("click", () => {
    abrir.style.display = "flex";
    cerrar.style.display = "none";
    menus.forEach(m => {
        m.classList.remove("menuAbierto");
        m.classList.add("menuCerrado");
    });
});
