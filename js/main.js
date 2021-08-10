// Nos dice en que parte de la pagina estoy, es cero 0px
let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", () => {
    let desplazamientoActual = window.pageYOffset; //obtener la posicion actual
    if(ubicacionPrincipal >= desplazamientoActual){ //mantiene la posicon del nav
        document.getElementsByTagName("nav")[0].style.top = "0px" 
    }else{ //si es menor la posicion principal a la actual la escunde
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal = desplazamientoActual; // se actualiza para mostrar al subir la pantalla
})


// Menu hamburguesa

let enlacesHEader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", () =>{
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color = "#fff";
        semaforo = false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color = "#000";
        semaforo = true;
    }
    enlacesHEader.classList.toggle("menuDos")
})

AOS.init();
