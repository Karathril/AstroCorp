var cuerpoweb = document.body; 

var modocolor = localStorage.getItem("modo"); 

function cargarModo() {    

    if (modocolor === "oscuro") {               
        cuerpoweb.classList.add("oscuro");
    } else {
        cuerpoweb.classList.add("claro");
    }
    consumoApi()
}

var btnpresionado = false;

function cambiarModo() {

    if (btnpresionado) { 
        cuerpoweb.classList.remove("oscuro");
        localStorage.setItem("modo", "claro");
        cuerpoweb.classList.add("claro");
        btnpresionado = false;
    } else { 

        if (modocolor === "oscuro") {
            resetear(); 
            btnpresionado = true;           
        } else {

            cuerpoweb.classList.remove("claro");
            localStorage.setItem("modo", "oscuro");
            cuerpoweb.classList.add("oscuro");        
            btnpresionado = true;

        }        
    }
}

function resetear() {

    localStorage.removeItem('modo');
    location.reload();

}