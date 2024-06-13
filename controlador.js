const inquilinos = {
    'clave123': {name: 'Juan', room: 2, entertainment: 5},
    'clave456': {name: 'Maria', room: 3, entertainment: 5},
    'clave789': {name: 'Pedro', room: 4, entertainment: 5}
};

let inquilinoActual = null;
let pisoActual = null;

function checkAccess() {
    const key = document.getElementById('key').value;

    if (inquilinos[key]) {
        inquilinoActual = inquilinos[key];
        localStorage.setItem('inquilinoActual', JSON.stringify(inquilinoActual));
        window.location.href = 'access.html';
    } else {
        alert('Clave incorrecta');
    }
}

function cargarDatos() {
    const datosInquilino = localStorage.getItem('inquilinoActual');
    if (datosInquilino) {
        inquilinoActual = JSON.parse(datosInquilino);
    } else {
        alert('No se encontró información del inquilino.');
        window.location.href = 'index.html';
    }

    const datosPiso = localStorage.getItem('pisoActual');
    if (datosPiso) {
        pisoActual = datosPiso;
    }
}

function goToFloor(floor) {
    let selectedFloor;
    if (floor == 'H') {
        if(pisoActual == 'H'){
            alert(`Estás en el piso ${pisoActual}`);
            return
        }
        selectedFloor = inquilinoActual.room;
        pisoActual = 'H';
        window.location.href = 'pisoH.html';
    } else if (floor == 'E') {
        if(pisoActual == 'E'){
            alert(`Estás en el piso ${pisoActual}`);
            return
        }
        selectedFloor = inquilinoActual.entertainment;
        pisoActual = 'E';
        window.location.href = 'pisoE.html';
    } else if(floor == 'PB'){
        if(pisoActual === 'PB'){
            alert(`Estás en el piso ${pisoActual}`);
            return
        }
        selectedFloor = 'PB';
        pisoActual ='PB';
        window.location.href = 'access.html';
    }

    if(selectedFloor){
        document.getElementById('floorDisplay').innerText = selectedFloor;
        localStorage.setItem('pisoActual', pisoActual);
        alert(`Accediendo a la planta ${selectedFloor}`);
    }
    
}

function openDoor() {
    
    if(window.location.pathname.endsWith('cerrar.html')){
        alert('Abriendo la Puerta');
        window.location.href = document.referrer;
    }else{
        alert('La puerta esta abierta')
    }
}

function closeDoor() {
    if(!window.location.pathname.endsWith('cerrar.html')){
        alert('Cerrando la Puerta');
        localStorage.setItem('pisoActual', pisoActual);
        window.location.href = 'cerrar.html';
    }else{
        alert('La Puerta esta cerrada')
    }
}

function salir() {
    window.location.href = 'index.html';
}

function mostrarPiso() {
    const pisoGuardado = localStorage.getItem('pisoActual');
    const floorDisplay = document.getElementById('floorDisplay');
    
    if (window.location.pathname.endsWith('pisoE.html')) {
        floorDisplay.innerText = inquilinoActual.entertainment;
    } else if (window.location.pathname.endsWith('pisoH.html')) {
        floorDisplay.innerText = inquilinoActual.room;
    } else if (window.location.pathname.endsWith('cerrar.html')) {
        floorDisplay.innerText = pisoGuardado ? pisoGuardado : 'Desconocido';
    }
}

if (window.location.pathname.endsWith('access.html')) {
    cargarDatos();
}

if (window.location.pathname.endsWith('access.html') || window.location.pathname.endsWith('pisoE.html') || window.location.pathname.endsWith('pisoH.html') || window.location.pathname.endsWith('cerrar.html')) {
    cargarDatos();
    mostrarPiso();
}
