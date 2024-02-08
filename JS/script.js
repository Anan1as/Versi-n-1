let btnEnter = document.getElementById("enter");

btnEnter.addEventListener("click", function() {
    localStorage.getItem("id");

    if(id){
        window.location.href = "./HTML/dashboard.html";
    } else {
        window.location.href = "./HTML/inicioSesion.html";
    };
});