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
        cambiarfondo(floor);

    } else if (floor === 'E') {456
        selectedFloor = inquilinoActual.entertainment;
        cambiarfondo(floor);

    } else {
        selectedFloor = 'PB';
        cambiarfondo(floor);
    }
    document.getElementById('floorDisplay').innerText = selectedFloor;
    
    alert(`Accediendo a la planta ${selectedFloor}`);
}


function cambiarfondo(fondo){
    if(fondo == 'PB'){
        document.body.style.background = '#00ffff';
    }else if(fondo == 'H'){
        document.body.style.background = '#ff9f13';
    }else if (fondo == 'E'){
        document.body.style.background = '#2e86de';

    }

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

if (window.location.pathname.endsWith('access.html')) {
    cargarDatos();
}
