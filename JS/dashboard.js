/*-----> Menú lateral del Dashboard <-----*/

let sideMenuBoxDashboard = document.getElementById("side-menu-boxDashboard");
let contenido = document.getElementById("contenido");

sideMenuBoxDashboard.addEventListener("mouseenter", function() {
    sideMenuBoxDashboard.classList.add("side-menu-box-extend");
    document.getElementById("contenido").style.display = "block";
});

sideMenuBoxDashboard.addEventListener("mouseleave", function() {
    sideMenuBoxDashboard.classList.remove("side-menu-box-extend");
    document.getElementById("contenido").style.display = "none";
});