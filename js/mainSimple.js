var modalPrimeraCancion = new bootstrap.Modal(document.getElementById('modalPrimeraCancion'), {});
modalPrimeraCancion.show();

var modalAdd = new bootstrap.Modal(document.getElementById('modalAdd'), {});
var modalAddFirst = new bootstrap.Modal(document.getElementById('modalAddFirst'), {});
var modalAddLast = new bootstrap.Modal(document.getElementById('modalAddLast'), {});
var modalRemove = new bootstrap.Modal(document.getElementById('modalRemove'), {});
var modalRemoveFirst = new bootstrap.Modal(document.getElementById('modalRemoveFirst'), {});
var modalRemoveLast = new bootstrap.Modal(document.getElementById('modalRemoveLast'), {});

var lista = new ListaSimple();
var nodoCancionActual = null;

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var reproductor;
function onYouTubeIframeAPIReady() {
    reproductor = new YT.Player('reproductor', {
        videoId: 'dQw4w9WgXcQ',
        playerVars: { 'controls': 0 },
        events: {
            'onReady': onReady
        }
    });

    function onReady(event) {
        document.getElementById("modalPrimeraCancion_txtEnlace").disabled = false;
    }
}


// FUNCIONES


// Reproductor
function reproducirSiguiente() {
    if (nodoCancionActual == null) {
        nodoCancionActual = lista.iterator();
        reproductor.loadVideoById(nodoCancionActual.info.codigo);
        reproductor.playVideo();
    } else if (validarSiguiente()) {
        nodoCancionActual = nodoCancionActual.siguiente;
        reproductor.loadVideoById(nodoCancionActual.info.codigo);
        reproductor.playVideo();
    }
    validarSiguiente();
}

function reproductorOnStateChange(event) {
    switch (event.data) {
        case 1:
            document.getElementById("icoReproducir").href.baseVal = "../ico/feather-sprite.svg#pause";
            break;
        case 2:
            document.getElementById("icoReproducir").href.baseVal = "../ico/feather-sprite.svg#play";
            break;
        case 0:
            reproducirSiguiente();
    }
}

// Controles
let btnReproducir = document.getElementById("btnReproducir");
btnReproducir.onclick = () => {
    switch (reproductor.getPlayerState()) {
        case 1:
            reproductor.pauseVideo();
            break;
        case 2:
            reproductor.playVideo();
            break;
    }
}

let btnSiguiente = document.getElementById("btnSiguiente");
btnSiguiente.onclick = reproducirSiguiente;

function validarSiguiente() {
    let siguiente = nodoCancionActual.siguiente != null;
    btnSiguiente.disabled = !siguiente;
    return siguiente;
}

// Modal primera canción
let modalPrimeraCancion_txtEnlace = document.getElementById("modalPrimeraCancion_txtEnlace");
let modalPrimeraCancion_btnAgregar = document.getElementById("modalPrimeraCancion_btnAgregar");
modalPrimeraCancion_txtEnlace.oninput = () => modalPrimeraCancion_btnAgregar.disabled = modalPrimeraCancion_txtEnlace.value == "";
modalPrimeraCancion_btnAgregar.onclick = () => {
    try {
        lista.addFirst(new Cancion(modalPrimeraCancion_txtEnlace.value));
        lista.print();
        reproductor.addEventListener("onStateChange", "reproductorOnStateChange");
        reproducirSiguiente();
        modalPrimeraCancion.hide();
    } catch (error) {

    }
}