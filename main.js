
let listaClientes = []


function cargarDatos() {


    fetch('https://63f60d0bab76703b15b71ddd.mockapi.io/clientes/clientes', {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
    }).then(clientes => {
        for (let i = 0; i < clientes.length; i++) {
            nuevoCliente = {
                'nombre': clientes[i].nombre,
                'apellidos': clientes[i].apellidos,
                'sexo': clientes[i].sexo,
                'edad': clientes[i].edad,
                'altura': clientes[i].altura,
                'peso': clientes[i].peso,
                'actividad': clientes[i].actividad
            }
            listaClientes.push(nuevoCliente)


        }
    }).catch(error => {
        // handle error
    })
}

function escribirClientes() {
    console.log(listaClientes);
}

function addRow(tabla) {
    // Obtiene una referencia a la tabla
    var tableRef = document.getElementById(tabla);

    // Inserta una fila en la tabla, en el índice 0
    var newRow = tableRef.insertRow(listaClientes.length - 1);

    // Inserta una celda en la fila, en el índice 0
    for (let i = 0; i < 6; i++) {
        var newCell = newRow.insertCell(i);
        // Añade un nodo de texto a la celda
        var newText = document.createTextNode('AA');
        newCell.appendChild(newText);
    }


}


//Cierra boton "equis"
document.querySelector("#equisCerrar").addEventListener("click", function () {
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.classList.remove('was-validated')

        })

    event.preventDefault()
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"));
    modal.hide();

    setTimeout(() => {
        document.querySelector("#nombre").value = "";
        document.querySelector("#apellidos").value = "";
        document.querySelector("#edad").value = "";
        document.querySelector("#altura").value = "";
        document.querySelector("#peso").value = "";

    }, 1000);
})

//Cierra "cancelar"
document.querySelector("#cancelar").addEventListener("click", function () {
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.classList.remove('was-validated')

        })

    event.preventDefault()
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"));
    modal.hide();

    setTimeout(() => {
        document.querySelector("#nombre").value = "";
        document.querySelector("#apellidos").value = "";
        document.querySelector("#edad").value = "";
        document.querySelector("#altura").value = "";
        document.querySelector("#peso").value = "";

    }, 1000);
})
