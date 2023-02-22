
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
                'actividad': clientes[i].actividad,
                'get': undefined,
                'ger': undefined
            }
            switch (nuevoCliente.actividad) {
                case 'sedentaria':
                    if (nuevoCliente.sexo == 'hombre') {
                        coeficienteActividad = 1.3
                    } else {
                        coeficienteActividad = 1.3
                    }
                    break;
                case 'moderada':
                    if (nuevoCliente.sexo == 'hombre') {
                        coeficienteActividad = 1.7
                    } else {
                        coeficienteActividad = 1.6
                    }
                    break;
                case 'intensa':
                    if (nuevoCliente.sexo == 'hombre') {
                        coeficienteActividad = 2.1
                    } else {
                        coeficienteActividad = 1.9
                    }
                    break;
            }
            if (nuevoCliente.sexo == 'hombre') {
                nuevoCliente.get = Math.round(66.473 + 13.751 * nuevoCliente.peso + 5.0033 * nuevoCliente.altura - 6.755 * nuevoCliente.edad)
            } else {
                nuevoCliente.get = Math.round(655.0955 + 9.463 * nuevoCliente.peso + 1.8496 * nuevoCliente.altura - 4.6756 * nuevoCliente.edad)
            }
            nuevoCliente.ger = Math.round(nuevoCliente.get * coeficienteActividad)
            listaClientes.push(nuevoCliente)


        }
    }).catch(error => {
        // handle error
    })
}

function escribirClientes() {
    console.log(listaClientes);
}

function pintarFilas() {

    var tabla = document.getElementById('tabla')

    for (let i = 0; i < listaClientes.length; i++) {
        let cliente = listaClientes[i]
        var fila = document.createElement("tr")
        var celdaNombre = document.createElement("td")
        var textNombre = document.createTextNode(cliente.nombre)
        celdaNombre.appendChild(textNombre)
        var celdaApellidos = document.createElement("td")
        var textApellidos = document.createTextNode(cliente.apellidos)
        celdaApellidos.appendChild(textApellidos)
        var celdaSexo = document.createElement("td")
        var textSexo = document.createTextNode(cliente.sexo)
        celdaSexo.appendChild(textSexo)
        var celdaEdad = document.createElement("td")
        var textEdad = document.createTextNode(cliente.edad)
        celdaEdad.appendChild(textEdad)
        var celdaAltura = document.createElement("td")
        var textAltura = document.createTextNode(cliente.altura)
        celdaAltura.appendChild(textAltura)
        var celdaPeso = document.createElement("td")
        var textPeso = document.createTextNode(cliente.peso)
        celdaPeso.appendChild(textPeso)
        var celdaActividad = document.createElement("td")
        var textActividad = document.createTextNode(cliente.actividad)
        celdaActividad.appendChild(textActividad)
        var celdaGet = document.createElement("td")
        var textGet = document.createTextNode(cliente.get)
        celdaGet.appendChild(textGet)
        var celdaGer = document.createElement("td")
        var textGer = document.createTextNode(cliente.ger)
        celdaGer.appendChild(textGer)

        fila.appendChild(celdaNombre)
        fila.appendChild(celdaApellidos)
        fila.appendChild(celdaSexo)
        fila.appendChild(celdaEdad)
        fila.appendChild(celdaAltura)
        fila.appendChild(celdaPeso)
        fila.appendChild(celdaActividad)
        fila.appendChild(celdaGet)
        fila.appendChild(celdaGer)
        fila.classList.add('border')
        tabla.appendChild(fila)




    }



}

