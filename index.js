function inicialitzaJoc() {

    //Variables para coger los valores de los inputs, columna y filas
    let columnas = document.getElementById("columnas").value;
    let filas = document.getElementById("filas").value;


    //Localización del div donde se creara la tabla
    let tauladiv = document.getElementById('tableOrigin');
    //Creación de una variable donde se crea una tabla nueva
    let novataula = document.createElement('table');

    //Creación de columnas hasta llegar al valor indicado en el input de columnas
    for (let y = 0; y < columnas; y++) {
        let tr = document.createElement('tr');
        novataula.appendChild(tr);
        //Creación de filas hasta llegar al valor indicado en el input de filas
        for (let x = 0; x < filas; x++) {
            let td = document.createElement('td');
            novataula.appendChild(td);

        }
    }
    //Agregamos la tabla creada en el div
    tauladiv.appendChild(novataula);

}
//Función añadida, con boton propio, para borrar la tabla existente
//Se podria haber añadido en la función anterior pero he decido ponerlo aparte
function erasetable() {

    //Variable para coger todos los elementos dentro del div
    let matarlistatabla = document.getElementsByTagName('table');

    //Recorremos hasta llegar a la longitud que tenga la variable anterior y lo borramos
    for (let i = 0; i < matarlistatabla.length; i++) {
        const element = matarlistatabla[i];
        element.remove();
    }
    //Verificacion mediante consola que se ha borrado
    console.log(document.getElementsByTagName('table'));
}