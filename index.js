function inicialitzaJoc() {

    //Variables per agafar el valors dels inputs, columnas y filas respectivament
    let columnas = document.getElementById("columnas").value;
    let filas = document.getElementById("filas").value;


    //Localitzem on es troba el div on es creara la tabla
    let tauladiv = document.getElementById('puticlub');
    //Creacio tabla 
    let novataula = document.createElement('table');

    for (let y = 0; y < columnas; y++) {
        let tr = document.createElement('tr');
        novataula.appendChild(tr);

        for (let x = 0; x < filas; x++) {
            let td = document.createElement('td');
            novataula.appendChild(td);

        }
    }

    tauladiv.appendChild(novataula);

}

function erasetable() {

    let matarlistatabla = document.getElementsByTagName('table');

    for (let i = 0; i < matarlistatabla.length; i++) {
        const element = matarlistatabla[i];
        element.remove();
    }
    console.log(document.getElementsByTagName('table'));
}