
let listaClientes = []
cargarDatos()


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
            pintarCliente(nuevoCliente)
            listaClientes.push(nuevoCliente)


        }
    }).catch(error => {
        // handle error
    })
}

function pintarCliente(nuevoCliente) {
    switch (nuevoCliente.actividad) {
        case 'sedentaria':
            if (nuevoCliente.sexo == 'hombre') {
                coeficienteActividad = 1.3
            } else {
                coeficienteActividad = 1.3
            }
            break;
        case 'ligera':
            if (nuevoCliente.sexo == 'hombre') {
                coeficienteActividad = 1.6
            } else {
                coeficienteActividad = 1.5
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
    var tabla = document.getElementById('tabla')
    const row = tabla.insertRow();
    row.classList.add('text-center')
    row.innerHTML = `
<td>${nuevoCliente.nombre}</td>
<td>${nuevoCliente.apellidos}</td>
<td><span class="badge bg-primary">${nuevoCliente.sexo}</span></td>
<td>${nuevoCliente.edad}</td>
<td>${nuevoCliente.altura}</td>
<td>${nuevoCliente.peso}</td>
<td><span class="badge bg-secondary">${nuevoCliente.actividad}</span></td>
<td>${nuevoCliente.get}</td>
<td>${nuevoCliente.ger}</td>
`;
}

function escribirClientes() {
    console.log(listaClientes);
}

function crearCliente() {
    if (
        document.getElementById('formNombre').value
        && document.getElementById('formApellidos').value
        && document.getElementById('formPeso').value < 250 && document.getElementById('formPeso').value > 20
        && document.getElementById('formAltura').value < 220 && document.getElementById('formAltura').value > 100
        && document.getElementById('formEdad').value < 100 && document.getElementById('formEdad').value > 5
    ) {
        nuevoCliente = {
            'nombre': document.getElementById('formNombre').value,
            'apellidos': document.getElementById('formApellidos').value,
            'sexo': document.getElementById('formSexo').value,
            'edad': document.getElementById('formEdad').value,
            'altura': document.getElementById('formAltura').value,
            'peso': document.getElementById('formPeso').value,
            'actividad': document.getElementById('formActividad').value,
            'get': undefined,
            'ger': undefined
        }
        pintarCliente(nuevoCliente)
        document.getElementById('formNombre').value = ""
        document.getElementById('formApellidos').value = ""
        document.getElementById('formSexo').value = "hombre"
        document.getElementById('formEdad').value = ""
        document.getElementById('formAltura').value = ""
        document.getElementById('formPeso').value = ""
        document.getElementById('formActividad').value = "sedentaria"


    }

}
