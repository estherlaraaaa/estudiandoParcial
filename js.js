function menu() {
    var opc = prompt("1. Agregar\n2. Mostrar\n3. Modificar\n4.Eliminar\n5.Salir");
    return opc;
}

function agregar(arreglo) {
    var personas = new Object();
    personas.id = prompt("Ingrese el id de la persona");
    personas.nombre = prompt("Agregue su nombre");
    personas.apellido = prompt("Agregue su apellido");
    personas.edad = prompt("Agregue su edad");
    personas.telefono = prompt("Agregue su telefono");

    arreglo.push(personas);
    return arreglo;
}

function mostrar(arreglo) {
    for (var i of arreglo) {
        console.log(i);
    }
}

function modificar(arreglo, id) {
    var miniOpc = prompt("¿Que desea modificar?\n1.Nombre\n2.Apellido\n3.Edad\n4.telefono");
    var miniOpc = parseInt(miniOpc);
    switch(miniOpc){
        case 1:
            var nuevoNombre = prompt("Ingrese el nuevo nombre");
            arreglo[id - 1].nombre = nuevoNombre;
            break;
        
        case 2:
            var nuevoApellido = prompt("Ingrese el nuevo apellido");
            arreglo[id - 1].apellido = nuevoApellido;
            break;
        case 3:
            var nuevoEdad = prompt("Ingrese el nuevo edad");
            arreglo[id - 1].nombre = nuevoEdad;
            break;
        case 4:
            var nuevoTelefono = prompt("Ingrese el nuevo telefono");
            arreglo[id - 1].nombre = nuevoTelefono;
            break;
        default:
            alert("Ingrese una opcion válida"); 
    }
    
}

function eliminar(arreglo, id) {
    arreglo.splice(id-1,1);
}


/*
    function mostrar(arreglo){
    for(var i in arreglo){
        console.log(arreglo[i]);
    }
}
*/

function principal() {
    let lista = [];
    var opc = 1;
    while (opc != 5) {
        var opc = menu();
        if (opc == 1) {
            agregar(lista);
        } else if (opc == 2) {
            var mostrando = mostrar(lista);
        } else if (opc == 3) {
            var id = prompt("Ingrese el id de la persona que desea modificar");
            var modificando = modificar(lista, id);
        }else if (opc == 4) {
            var id = prompt("Ingrese el id de la persona que desea eliminar");
            var eliminando = eliminar(lista, id);
        }
    }

}

principal(); 