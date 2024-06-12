const inquilinos = {
    'clave123': {name: 'Juan', room: 2, entertainment: 5},
    'clave456': {name: 'Maria', room: 3, entertainment: 5},
    'clave789': {name: 'Pedro', room: 4, entertainment: 5}
};

let inquilinoActual = null;



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
}

function goToFloor(floor) {
    let selectedFloor;
    if (floor === 'H') {
        selectedFloor = inquilinoActual.room;
        window.location.href ='pisoH.html';

    } else if (floor === 'E') {
        selectedFloor = inquilinoActual.entertainment;
        window.location.href = 'pisoE.html';
        

    } else {
        selectedFloor = 'PB';
        window.location.href = 'access.html'
    }
    document.getElementById('floorDisplay').innerText = selectedFloor;
    
    alert(`Accediendo a la planta ${selectedFloor}`);
}

function openDoor() {
    alert('Abriendo la Puerta');
}

function closeDoor() {
    alert('Cerrando la Puerta');
}

function salir(){
    window.location.href = 'index.html';
}

function mostrarPiso(){
    if(window.location.pathname.endsWith('pisoE.html')){
        const floorDisplay = document.getElementById('floorDisplay');
        floorDisplay.innerText = inquilinoActual.entertainment;
    } else if(window.location.pathname.endsWith('pisoH.html')){
        const floorDisplay = document.getElementById('floorDisplay');
        floorDisplay.innerText = inquilinoActual.room;
    }
}

if (window.location.pathname.endsWith('access.html')) {
    cargarDatos();
}

if(window.location.pathname.endsWith('access.html')  ||  window.location.pathname.endsWith('pisoE.html')  ||  window.location.pathname.endsWith('pisoH.html')){
    cargarDatos();
    mostrarPiso();
}