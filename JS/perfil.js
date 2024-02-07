/*-----> Banner del perfil <-----*/
let bannerProfile = document.getElementById("banner-profile");
let bannerProfileShortie = document.getElementById("banner-profile-shortie");
let btnEstrella = document.getElementById("btnEstrella");
let btnEstrellaClose = document.getElementById("btnEstrellaClose");

btnEstrella.addEventListener("click", function() {
    bannerProfile.style.display = "none";
    bannerProfileShortie.style.display = "flex";
});

btnEstrellaClose.addEventListener("click", function() {
    bannerProfileShortie.style.display = "none";
    bannerProfile.style.display = "flex";
});