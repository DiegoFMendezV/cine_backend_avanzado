let appContainer = document.getElementById('app')

let crearUsuario = () => {
    let DNI_input = document.getElementById('DNI').value
    let nombres_input = document.getElementById('nombres').value
    let apellidos_input = document.getElementById('apellidos').value
    let fecha_nacimiento_input = document.getElementById('fecha_nacimiento').value
    let rol_input = document.getElementById('rol').value
    let telefono_input = document.getElementById('telefono').value
    let correo_input = document.getElementById('correo').value
    let contrasena_input = document.getElementById('contrasena').value
    let nombre_usuario_input = document.getElementById('nombre_usuario').value
    let cliente_input = document.getElementById('cliente').value
    axios.post('http://localhost:3000/api/usuarios', {
        DNI: DNI_input,
        nombres: nombres_input,
        apellidos: apellidos_input,
        fecha_nacimiento: fecha_nacimiento_input,
        rol: rol_input,
        telefono: telefono_input,
        correo: correo_input,
        contrasena: contrasena_input,
        nombre_usuario: nombre_usuario_input,
        cliente: cliente_input
    })
        .then((response) => {
            alert('Usuario creado exitosamente')
        })
}

axios.get('http://localhost:3000/api/usuarios').then(response=>{
    let usuarios = response.data;
    usuarios.map((usuario)=>{
        appContainer.innerHTML = appContainer.innerHTML + `<td>${usuario.DNI}</td>`
        appContainer.innerHTML = appContainer.innerHTML + `<td>${usuario.nombres}</td>`
        appContainer.innerHTML = appContainer.innerHTML + `<td>${usuario.apellidos}</td>`
        appContainer.innerHTML = appContainer.innerHTML + `<td>${usuario.fecha_nacimiento}</td>`
        appContainer.innerHTML = appContainer.innerHTML + `<td>${usuario.rol}</td>`
        appContainer.innerHTML = appContainer.innerHTML + `<td>${usuario.telefono}</td>`
        appContainer.innerHTML = appContainer.innerHTML + `<td>${usuario.correo}</td>`
        appContainer.innerHTML = appContainer.innerHTML + `<td>${usuario.nombre_usuario}</td>`
        appContainer.innerHTML = appContainer.innerHTML + `<td>${usuario.contrasena}</td>`
        appContainer.innerHTML = appContainer.innerHTML + `<td>${usuario.cliente}</td>`
    })
    // console.log(usuarios)
})

