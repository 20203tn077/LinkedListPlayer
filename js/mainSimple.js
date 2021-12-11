//DECLARACIÓN DE VARIABLES

// Modal primera canción
var modalPrimeraCancion = new bootstrap.Modal(document.getElementById('modalPrimeraCancion'), {});
var modalPrimeraCancion_txtEnlace = document.getElementById('modalPrimeraCancion_txtEnlace');
var modalPrimeraCancion_btnAgregar = document.getElementById('modalPrimeraCancion_btnAgregar');

// Reproductor
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
        modalPrimeraCancion_txtEnlace.disabled = false;
    }
}

// Controles
var btnReproducir = document.getElementById('btnReproducir');
var icoReproducir = document.getElementById('icoReproducir');
var btnSiguiente = document.getElementById('btnSiguiente');

// Variables globales
var contenedorCanciones = document.getElementById('contenedorCanciones');
var lista = new ListaSimple();
var nodoCancionActual = null;
var listaTerminada = false;

// Modal agregar con posición
var modalAdd = new bootstrap.Modal(document.getElementById('modalAdd'), {});
var modalAdd_txtPosicion = document.getElementById('modalAdd_txtPosicion');
var modalAdd_txtEnlace = document.getElementById('modalAdd_txtEnlace');
var modalAdd_btnAgregar = document.getElementById('modalAdd_btnAgregar');

// Modal agregar al inicio
var modalAddFirst = new bootstrap.Modal(document.getElementById('modalAddFirst'), {});
var modalAddFirst_txtEnlace = document.getElementById('modalAddFirst_txtEnlace');
var modalAddFirst_btnAgregar = document.getElementById('modalAddFirst_btnAgregar');

// Modal agregar al final
var modalAddLast = new bootstrap.Modal(document.getElementById('modalAddLast'), {});
var modalAddLast_txtEnlace = document.getElementById('modalAddLast_txtEnlace');
var modalAddLast_btnAgregar = document.getElementById('modalAddLast_btnAgregar');

// Modal eliminar con posición
var modalRemove = new bootstrap.Modal(document.getElementById('modalRemove'), {});
var modalRemove_txtPosicion = document.getElementById('modalRemove_txtPosicion');
var modalRemove_btnEliminar = document.getElementById('modalRemove_btnEliminar');

// Modal eliminar al inicio
var modalRemoveFirst = new bootstrap.Modal(document.getElementById('modalRemoveFirst'), {});
var modalRemoveFirst_btnEliminar = document.getElementById('modalRemoveFirst_btnEliminar');

// Modal eliminar al final
var modalRemoveLast = new bootstrap.Modal(document.getElementById('modalRemoveLast'), {});
var modalRemoveLast_btnEliminar = document.getElementById('modalRemoveLast_btnEliminar');

// Opciones de la lista
var btnAdd = document.getElementById("btnAdd");
var btnAddFirst = document.getElementById("btnAddFirst");
var btnAddLast = document.getElementById("btnAddLast");
var btnRemove = document.getElementById("btnRemove");
var btnRemoveFirst = document.getElementById("btnRemoveFirst");
var btnRemoveLast = document.getElementById("btnRemoveLast");

// Toast para erroes
var toastError = new bootstrap.Toast(document.getElementById('toastError'));
var txtError = document.getElementById('txtError');

//FUNCIONES

// Revisa el estado de la lista y lo refleja en varios elementos en pantalla
function actualizar() {

    //Dibujar lista en pantalla
    let contenido = "";
    let count = 0;
    for (let i = lista.iterator(); i != null; i = i.siguiente) {
        let cancion = i.info;
        contenido += `<tr${i == nodoCancionActual ? ' class="table-light"' : ''} onclick="reproducir(${count})" role="button"><td class="align-middle" width="1px"><span class="fs-5 mx-2">${count + 1}</span></td><td><span class="fs-5">${cancion.titulo}</span><br><span>${cancion.autor}</span></td></tr>`;
        count++;
    }
    contenedorCanciones.innerHTML = contenido;

    if (lista.isEmpty()) {
        reproductor.stopVideo();
        nodoCancionActual = null;
        listaTerminada = true;

        btnRemove.disabled = true;
        btnRemoveFirst.disabled = true;
        btnRemoveLast.disabled = true;

        icoReproducir.href.baseVal = "../ico/feather-sprite.svg#play";
        btnReproducir.disabled = true;
    } else {
        btnRemove.disabled = false;
        btnRemoveFirst.disabled = false;
        btnRemoveLast.disabled = false;

        if (nodoCancionActual != null) {
            btnSiguiente.disabled = nodoCancionActual.siguiente == null;
        }

        if (listaTerminada) {
            if (nodoCancionActual == null) {
                nodoCancionActual = lista.iterator();
                reproducir(0);
                listaTerminada = false;
            }

            if (nodoCancionActual != null && nodoCancionActual.siguiente != null) {
                reproducirSiguiente();
                listaTerminada = false;
            }

            icoReproducir.href.baseVal = "../ico/feather-sprite.svg#play";
            btnReproducir.disabled = true;
        } else {
            btnReproducir.disabled = false;
        }
    }
}

// Lanza un toast con un mensaje de error
function mostrarError(mensaje) {
    txtError.innerHTML = mensaje;
    toastError.show();
}

// Reproduce una canción de la lista según la posición
function reproducir(posicion) {
    try {
        let cancion = lista.get(posicion);
        reproductor.loadVideoById(cancion.codigo);
        reproductor.playVideo();
        let aux = lista.iterator();
        for (let i = 0; i < posicion; i++) aux = aux.siguiente;
        nodoCancionActual = aux;
        actualizar();
    } catch (error) {
        mostrarError(error.message);
    }
}

// Reproduce la siguiente canción de la lista
function reproducirSiguiente() {
    if (nodoCancionActual.siguiente != null) {
        nodoCancionActual = nodoCancionActual.siguiente;
        let cancion = nodoCancionActual.info;
        reproductor.loadVideoById(cancion.codigo);
        reproductor.playVideo();
    } else {
        listaTerminada = true;
    }
    actualizar();
}

//LISTENERS

// reproductor
function onStateChange(event) {
    switch (event.data) {
        case 0:
            reproducirSiguiente();
            break;
        case 1:
            icoReproducir.href.baseVal = "../ico/feather-sprite.svg#pause";
            break;
        case 2:
            icoReproducir.href.baseVal = "../ico/feather-sprite.svg#play";
    }
}

function onError(event) {
    console.log(event.data);
    switch (event.data) {
        case 101:
        case 150:
            mostrarError("El propietario del video no permite reproducirlo fuera de Youtube");
            reproducirSiguiente();
    }
}

// Modal primera canción
modalPrimeraCancion_txtEnlace.oninput = () => {
    modalPrimeraCancion_btnAgregar.disabled = modalPrimeraCancion_txtEnlace.value == "";
}

modalPrimeraCancion_btnAgregar.onclick = () => {
    try {
        lista.addFirst(new Cancion(modalPrimeraCancion_txtEnlace.value));
        reproductor.addEventListener('onError', 'onError');
        reproductor.addEventListener('onStateChange', 'onStateChange');

        reproducir(0);

        listaTerminada = false;
        nodoCancionActual = lista.iterator();
        actualizar();
        modalPrimeraCancion.hide();
    } catch (error) {
        mostrarError(error.message);
    }
}

// controles
btnReproducir.onclick = () => {
    switch (reproductor.getPlayerState()) {
        case 1:
            reproductor.pauseVideo();
            break;
        case 2:
            reproductor.playVideo();
    }
}
btnSiguiente.onclick = reproducirSiguiente;

// Modal agregar con posición
function validarModalAdd() {
    modalAdd_btnAgregar.disabled = modalAdd_txtEnlace.value == "" || modalAdd_txtPosicion.value == "";
}
modalAdd_txtPosicion.oninput = validarModalAdd;
modalAdd_txtEnlace.oninput = validarModalAdd;

modalAdd_btnAgregar.onclick = () => {
    try {
        lista.add(modalAdd_txtPosicion.value - 1, new Cancion(modalAdd_txtEnlace.value));
        actualizar();
    } catch (error) {
        mostrarError(error.message);
    }
    modalAdd.hide();
}

// Modal agregar al inicio
modalAddFirst_txtEnlace.oninput = () => {
    modalAddFirst_btnAgregar.disabled = modalAddFirst_txtEnlace.value == "";
}

modalAddFirst_btnAgregar.onclick = () => {
    try {
        lista.addFirst(new Cancion(modalAddFirst_txtEnlace.value));
        actualizar();
    } catch (error) {
        mostrarError(error.message);
    }
    modalAddFirst.hide();
}

// Modal agregar al final
modalAddLast_txtEnlace.oninput = () => {
    modalAddLast_btnAgregar.disabled = modalAddLast_txtEnlace.value == "";
}

modalAddLast_btnAgregar.onclick = () => {
    try {
        lista.addLast(new Cancion(modalAddLast_txtEnlace.value));
        actualizar();
    } catch (error) {
        mostrarError(error.message);
    }
    modalAddLast.hide();
}

// Modal eliminar con posición
modalRemove_txtPosicion.oninput = () => {
    modalRemove_btnEliminar.disabled = modalRemove_txtPosicion.value == "";
}

modalRemove_btnEliminar.onclick = () => {
    try {
        lista.remove(modalRemove_txtPosicion.value - 1);
        actualizar();
    } catch (error) {
        mostrarError(error.message);
    }
    modalRemove.hide();
}

// Modal eliminar al inicio
modalRemoveFirst_btnEliminar.onclick = () => {
    try {
        lista.removeFirst();
        actualizar();
    } catch (error) {
        mostrarError(error.message);
    }
    modalRemoveFirst.hide();
}

// Modal eliminar al final
modalRemoveLast_btnEliminar.onclick = () => {
    try {
        lista.removeLast();
        actualizar();
    } catch (error) {
        mostrarError(error.message);
    }
    modalRemoveLast.hide();
}

// Opciones de la lista
btnAdd.onclick = () => {
    modalAdd_txtPosicion.value = "";
    modalAdd_txtEnlace.value = "";
    modalAdd_btnAgregar.disabled = true;
    modalAdd.show();
}

btnAddFirst.onclick = () => {
    modalAddFirst_txtEnlace.value = "";
    modalAddFirst_btnAgregar.disabled = true;
    modalAddFirst.show();
}

btnAddLast.onclick = () => {
    modalAddLast_txtEnlace.value = "";
    modalAddLast_btnAgregar.disabled = true;
    modalAddLast.show();
}

btnRemove.onclick = () => {
    modalRemove_txtPosicion.value = "";
    modalRemove_btnEliminar.disabled = true;
    modalRemove.show();
}

btnRemoveFirst.onclick = () => {
    modalRemoveFirst.show();
}

btnRemoveLast.onclick = () => {
    modalRemoveLast.show();
}

//INICIO
modalPrimeraCancion.show();