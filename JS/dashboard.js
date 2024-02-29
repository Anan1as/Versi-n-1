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

/*----------------------------------------------Elementos generales-------------------------------------------*/
//>---------------------Footer
//>--------Select para los temas.
let body = document.body;

let selectTheme = document.getElementById("selectTheme");
let logoFooter = document.getElementById("logo-footer");
let logoHeader = document.getElementById("logo-header");
let tuercaHeader = document.getElementById("tuerca-header");
let puertaHeader = document.getElementById("puerta-header");

selectTheme.addEventListener("change", () => {
    if (selectTheme.value == "dark") {
        localStorage.setItem('Theme', selectTheme.value);
        body.className = "dark-theme";
        logoHeader.src = "../Img/Logo Mediano - Dark.png";
        logoFooter.src = "../Img/Titulo simple - Dark.png";
        tuercaHeader.src = "../Img/Tuerca - Dark.png";
        puertaHeader.src = "../Img/Exit - Dark.png";

    } else if (selectTheme.value == "light") {
        localStorage.setItem('Theme', selectTheme.value);
        body.className = "light-theme";
        logoHeader.src = "../Img/Logo Mediano - Light.png";
        logoFooter.src = "../Img/Titulo simple - Light - Black.png";
        tuercaHeader.src = "../Img/Tuerca.png";
        puertaHeader.src = "../Img/Exit.png";

    };
});

//Al entrar a la página.
let theme = localStorage.getItem("Theme");

//Make an option if the user has not chosen a theme and there's not local storage.
if (theme == null) {
    selectTheme.value = "light";
    localStorage.setItem('Theme', selectTheme.value);
    body.className = "light-theme";
    logoHeader.src = "../Img/Logo Mediano - Light.png";
    logoFooter.src = "../Img/Titulo simple - Light - Black.png";
    tuercaHeader.src = "../Img/Tuerca.png";
    puertaHeader.src = "../Img/Exit.png";
}

if (theme == "dark") {
    body.className = "dark-theme";
    logoHeader.src = "../Img/Logo Mediano - Dark.png";
    logoFooter.src = "../Img/Titulo simple - Dark.png";
    tuercaHeader.src = "../Img/Tuerca - Dark.png";
    puertaHeader.src = "../Img/Exit - Dark.png";

} else if (theme == "light") {
    body.className = "light-theme";
    logoHeader.src = "../Img/Logo Mediano - Light.png";
    logoFooter.src = "../Img/Titulo simple - Light - Black.png";
    tuercaHeader.src = "../Img/Tuerca.png";
    puertaHeader.src = "../Img/Exit.png";

};