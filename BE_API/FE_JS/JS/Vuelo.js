$(document).ready(function () {
    console.log("hola mundo con ajax")
})

//#region GetList
$.ajax({
    url: 'https://localhost:7042/api/airplane/GetList',
    method: 'GET',
    dataType: 'json',
    success: function (data) {
        // Aquí puedes manejar la respuesta de la API
        // console.log(data);
        const tabla = $('#contenido');
        data.forEach(function (airplane) {
            tabla.append(
                `<div class="mb-2 col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center">
                <div class="card" style="width: 18rem;">
                <img src="C:\Users\\Julio\\Downloads\\${airplane.Img}" class="card-img-top" style="height: 200px; ">
                <div class="card-body">
                    <h5 class="card-title" style="font-weight: bold">${airplane.Destination}</h5>
                    <div id="">
                    <div class="col">
                        <p class="row text-norwap"> <samp style="font-weight: bold;">ID:</samp> <samp class="ml-2">${airplane.Id}</samp></p>
                    </div>
                    <div class="col">
                        <p class="row text-norwap"> <samp style="font-weight: bold;">Hora de Salida:</samp> <samp class="ml-2">${airplane.Horadesalida}</samp></p>
                    </div>
                    <div class="col">
                        <p class="row text-norwap"> <samp style="font-weight: bold;">Hora de Llegada:</samp> <samp class="ml-2">${airplane.Horadellegada}</samp></p>
                    </div>
                    <div class="col">
                        <p class="row text-norwap"> <samp style="font-weight: bold;">Aerolinea:</samp> <samp class="ml-2">${airplane.Airline}</samp></p>
                    </div>
                    <div class="col">
                        <p class="row text-norwap"> <samp style="font-weight: bold;">Destino:</samp> <samp class="ml-2">${airplane.Destination}</samp></p>
                    </div>
                    <div class="col">
                        <p class="row text-norwap"> <samp style="font-weight: bold;">Precio:</samp> <samp class="ml-2">${airplane.Precio}</samp> <samp class="ml-2" style="font-weight:bold">US$</samp></p>
                    </div>
                    </div>
                    <div class="row mb-2 d-flex justify-content-between bg-">
                        <div class="col-md-6 text-center">
                            <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal${airplane.Id}">
                                Eliminar
                            </button>
                            <div class="modal fade" id="exampleModal${airplane.Id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        Juan Rosario, Seguro que quiere eliminar el vuelo de ${airplane.Destination}
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-danger " onClick="Eliminar(${airplane.Id})"">Eliminar</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 text-center">
                            <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#exampleModall${airplane.Id}" data-whatever="@mdo">Actualizar</button>
                        </div>
                        <div class="modal fade" id="exampleModall${airplane.Id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form id="formularioUpdate">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label for="exampleInputEmail1">ID</label>
                                                        <input type="text" id="IdUpdate${airplane.Id}" class="form-control col-md-12" readonly value="${airplane.Id}">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleInputEmail1">AirLine</label>
                                                        <input type="text" id="airplaneUpdate${airplane.Id}" class="form-control col-md-12" value="${airplane.Airline}">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleInputPassword1">Destino</label>
                                                        <input type="text" id="destinoUpdate${airplane.Id}" class="form-control col-md-12" name="destino" value="${airplane.Destination}">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleInputPassword1">Hora de Salida</label>
                                                        <input type="text" id="horasalidaUpdate${airplane.Id}" class="form-control col-md-12" value="${airplane.Horadesalida}">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleInputPassword1">Hora de Llegada</label>
                                                        <input type="text" id="horallegadaUpdate${airplane.Id}" class="form-control col-md-12" value="${airplane.Horadellegada}">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleInputPassword1">Precio</label>
                                                        <input type="number" id="precioUpdate${airplane.Id}" class="form-control  col-md-12" value="${airplane.Precio}"> 
                                                    </div>
                                                </div>
                                                <div class="col ">
                                                    <div class="form-group">
                                                        <div class="form-label">
                                                            <label style="font-size: 25px; font-weight: bold;">Imagen del avion</label>
                                                        </div>
                                                        <input type="file" id="imgUpdate${airplane.Id}" required/>
                                                    </div>
                                                </div>
                                            </div>                                            
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" onClick="Actualizar(${airplane.Id})">Actualizar</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center bg-">
                        
                    </div>
                </div>`
            );
        });
    },
    error: function (xhr, status, error) {
        // Aquí puedes manejar los errores
        console.error('Error:', error);
    }
});
//#endregion

//#region Create
const btnEnviar = $("#btnEnviar");

// Agregar listener al botón
btnEnviar.on("click", () => {
    // Armar objeto con datos
    const form = document.getElementById('formulario');
    const airplane = $("#airplane").val()
    const destino = $("#destino").val()
    const horadellegada = $("#horallegada").val()
    const horadesalida = $("#horasalida").val()
    const precio = $("#precio").val()
    const id = $("#ID").val()
    var input = $("#img").val()

    // file = input.files[0];
    file =  document.getElementById('img').files;
    if (file.length >= 1) {        
        file = document.getElementById('img').files[0];
        filename = document.getElementById('img').files[0].name;
        fr = new FileReader();
        fr.readAsDataURL(file);
    
        var blob = new Blob([file]);
    
        var objectURL = window.URL.createObjectURL(blob);
        if (navigator.appVersion.toString().indexOf('.NET') > 0) {
            window.navigator.msSaveOrOpenBlob(blob);
        } else {
            var link = document.createElement('a');
            link.href = objectURL;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            link.remove();
        }
    }

    const datos = {
        Id: id,
        Airline: airplane,
        Destination: destino,
        Horadesalida: horadesalida,
        Horadellegada: horadellegada,
        Precio: precio,
        Img: filename
    };

    //Enviar los datos a la API
    fetch('https://localhost:7042/api/airplane/Create', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            // Agregar una fila a la tabla con la información del nuevo estudiante
            console.log(data)

            // Limpiar el formulario
            form.reset();
        })
        .catch(error => console.error(error));
});
//#endregion

//#region Delete
function Eliminar(id) {
    console.log("cliked " + id)
    // URL de la API con el ID proporcionado
    var url = 'https://localhost:7042/api/airplane/Delete/' + id;

    // Realiza la solicitud DELETE utilizando jQuery
    $.ajax({
        url: url,
        type: 'DELETE',
        contentType: 'application/json',
        success: function (response) {
            // La solicitud se completó con éxito
            console.log(response);
            location.reload();
        },
        error: function (xhr, status, error) {
            // Ocurrió un error al procesar la solicitud
            console.error('Error al eliminar el avión con ID ' + id + ': ' + error);
        }
    });
}
//#endregion

//#region Update

function Actualizar(id) {
    // Obtén los valores de los campos de entrada HTML
    var id = $('#IdUpdate' + id).val();
    var airplane = $('#airplaneUpdate' + id).val();
    var destino = $('#destinoUpdate' + id).val();
    var horallegada = $('#horallegadaUpdate' + id).val();
    var horasalida = $('#horasalidaUpdate' + id).val();
    var precio = $('#precioUpdate' + id).val();
    var input = $("#imgUpdate" + id).val();

    // file = input.files[0];



    file = document.getElementById('imgUpdate' + id).files;
    if (file.length >= 1) {
        console.log("verdad");
        file = document.getElementById('imgUpdate' + id).files[0];
        filename = document.getElementById('imgUpdate' + id).files[0].name;

        fr = new FileReader();
        fr.readAsDataURL(file);

        var blob = new Blob([file]);

        var objectURL = window.URL.createObjectURL(blob);
        if (navigator.appVersion.toString().indexOf('.NET') > 0) {
            window.navigator.msSaveOrOpenBlob(blob);
        } else {
            var link = document.createElement('a');
            link.href = objectURL;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            link.remove();
        }
    }else{
        console.log("mentira");
        filename = null;
    }

    // // Crea el objeto de datos a enviar en la solicitud PUT
    const datos = {
        // Id: id,
        Airline: airplane,
        Destination: destino,
        Horadesalida: horallegada,
        Horadellegada: horasalida,
        Precio: precio,
        Img: filename
    };

    console.log(JSON.stringify(datos));

    // URL de la API con el ID proporcionado
    var url = 'https://localhost:7042/api/airplane/Update/' + id;

    // Realiza la solicitud PUT utilizando jQuery
    $.ajax({
    url: url,
    type: 'PUT',
    contentType: 'application/json',
    data: JSON.stringify(datos),
    success: function(response) {
        console.log(response);
        console.log('El objeto con ID ' + id + ' se actualizó correctamente.');
        location.reload();
        // Realiza cualquier acción adicional después de la actualización
    },
    error: function(xhr, status, error) {
        console.error('Error al actualizar el objeto con ID ' + id + ': ' + error);
    }
    });
}

//#endregion