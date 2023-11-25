//#region GetListVuelos
    $.ajax({
        url: 'https://localhost:7042/api/airplane/GetList',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            // Aquí puedes manejar la respuesta de la API
            // console.log(data);
            const tabla = $('#contenidoVuelo');
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
                        <div class="row mb-2 d-flex justify-content-center bg-">
                            <div class="col-md-6 text-center">
                                <button type="button" class="btn btn-success col-md-12" data-toggle="modal" data-target="#exampleModall${airplane.Id}" data-whatever="@mdo">Rentar</button>
                            </div>
                            <div class="modal fade" id="exampleModall${airplane.Id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Rentar Vuelo</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form id="formularioUpdate">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label for="exampleInputEmail1">Usuario</label>
                                                            <input type="text" id="Usuario${airplane.Id}" class="form-control col-md-12" >
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="exampleInputEmail1">Correo</label>
                                                            <input type="text" id="Correo${airplane.Id}" class="form-control col-md-12">
                                                            <input type="text" id="vuelo${airplane.Id}" value="${airplane.Img}" class="form-control col-md-12" style="display: none;">
                                                        </div>
                                                    </div>
                                                </div>                                            
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" onClick="Rentar(${airplane.Id})">Rentar</button>
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

//#region RentarVuelo
    function Rentar(id) {
        const usuario = $("#Usuario" + id).val();
        const correo = $("#Correo" + id).val();
        const vuelo = $("#vuelo" + id).val();

        const data = 
        {
            name: usuario,
            Email: correo,
            Vuelo: vuelo
        }
        
        console.log(data);
        fetch('https://localhost:7042/api/User/Create', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            // Agregar una fila a la tabla con la información del nuevo estudiante
            console.log(data)
            location.reload();
            // Limpiar el formulario
            // form.reset();
        })
        .catch(error => console.error(error));
    }
//#endregion


//#region GetListCarros
$.ajax({
    url: 'https://localhost:7042/api/cars/GetList',
    method: 'GET',
    dataType: 'json',
    success: function (data) {
        // Aquí puedes manejar la respuesta de la API

        const tabla = $('#contenidoCarro');
        data.forEach(function (cars) {
            tabla.append(
                `<div class="mb-2 col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center">
                <div class="card" style="width: 18rem;">
                <img src="C:\Users\\Julio\\Downloads\\${cars.Img}" class="card-img-top" style="height: 200px; ">
                <div class="card-body">
                    <h5 class="card-title" style="font-weight: bold">${cars.Brand}</h5>
                    <div id="">
                    <div class="col">
                        <p class="row text-norwap"> <samp style="font-weight: bold;">ID:</samp> <samp class="ml-2">${cars.Id}</samp></p>
                    </div>
                    <div class="col">
                        <p class="row text-norwap"> <samp style="font-weight: bold;">Color:</samp> <samp class="ml-2">${cars.Color}</samp></p>
                    </div>
                    <div class="col">
                        <p class="row text-norwap"> <samp style="font-weight: bold;">Price:</samp> <samp class="ml-2">${cars.Price}</samp></p>
                    </div>
                    </div>
                    <div class="row mb-2 d-flex justify-content-center bg-">
                        <div class="col-md-6 text-center">
                            <button type="button" class="btn btn-success col-md-12" data-toggle="modal" data-target="#exampleModall${cars.Id}" data-whatever="@mdo">Rentar</button>
                        </div>
                        <div class="modal fade" id="exampleModall${cars.Id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Rentar</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form id="formularioUpdate">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label for="exampleInputEmail1">Usuario</label>
                                                        <input type="text" id="UsuarioCarro${cars.Id}" class="form-control col-md-12" >
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleInputEmail1">Correo</label>
                                                        <input type="text" id="CarroCorreo${cars.Id}" class="form-control col-md-12" >
                                                        <input type="text" id="ImgCarro${cars.Id}" class="form-control col-md-12" value="${cars.Img}" style="display: none;">
                                                    </div>
                                                </div>
                                            </div>                                            
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" onClick="RentarCarro(${cars.Id})">Rentar</button>
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

//#region RentarCarro
function RentarCarro(id) {
    const usuario = $("#UsuarioCarro" + id).val();
    const correo = $("#CarroCorreo" + id).val();
    const carro = $("#ImgCarro" + id).val();

    const data = 
    {
        name: usuario,
        Email: correo,
        Auto: carro
    }
    
    console.log(data);
    fetch('https://localhost:7042/api/User/Create', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Agregar una fila a la tabla con la información del nuevo estudiante
        console.log(data)
        location.reload();
        // Limpiar el formulario
        // form.reset();
    })
    .catch(error => console.error(error));
}
//#endregion



//#region GetListHotel
$.ajax({
    url: 'https://localhost:7042/api/Hotel/GetList',
    method: 'GET',
    dataType: 'json',
    success: function (data) {
        // Aquí puedes manejar la respuesta de la API
        // console.log(data);
        const tabla = $('#contenidoHotel');
        data.forEach(function (hotel) {
            tabla.append(
                `<div class="mb-2 col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center">
                <div class="card" style="width: 18rem;">
                <img src="C:\Users\\Julio\\Downloads\\${hotel.Img}" class="card-img-top" style="height: 200px; ">
                <div class="card-body">
                    <h5 class="card-title" style="font-weight: bold">${hotel.Name}</h5>
                    <div id="">
                    <div class="col">
                        <p class="row text-norwap"> <samp style="font-weight: bold;">ID:</samp> <samp class="ml-2">${hotel.Id}</samp></p>
                    </div>
                    <div class="col">
                        <p class="row text-norwap"> <samp style="font-weight: bold;">Start:</samp> <samp class="ml-2">${hotel.Stars}</samp></p>
                    </div>
                    <div class="col">
                        <p class="row text-norwap"> <samp style="font-weight: bold;">Address:</samp> <samp class="ml-2">${hotel.Address}</samp></p>
                    </div>
                    <div class="col">
                        <p class="row text-norwap"> <samp style="font-weight: bold;">Price:</samp> <samp class="ml-2">${hotel.Price}</samp></p>
                    </div>
                    </div>
                    <div class="row mb-2 d-flex justify-content-center">
                        <div class="col-md-6 text-center">
                            <button type="button" class="btn btn-success col-md-12" data-toggle="modal" data-target="#exampleModalll${hotel.Id}" data-whatever="@mdo">Rentar<a/button>
                        </div>
                        <div class="modal fade" id="exampleModalll${hotel.Id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Rentar Hotel</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form id="formularioUpdate">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label for="exampleInputEmail1">Usuario</label>
                                                        <input type="text" id="HotelUsuario${hotel.Id}" class="form-control col-md-12" >
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleInputEmail1">Correo</label>
                                                        <input type="text" id="HotelCorreo${hotel.Id}" class="form-control col-md-12" >
                                                        <input type="text" id="HotelImg${hotel.Id}" class="form-control col-md-12" value="${hotel.Img}" style="display: none;">

                                                    </div>
                                                </div>
                                            </div>                                            
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" onClick="RentarHotel(${hotel.Id})">Rentar</button>
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

//#region RentarHotel
function RentarHotel(id) {
    const usuario = $("#HotelUsuario" + id).val();
    const correo = $("#HotelCorreo" + id).val();
    const hotel = $("#HotelImg" + id).val();

    const data = 
    {
        name: usuario,
        Email: correo,
        Hotel: hotel
    }
    
    console.log(data);
    fetch('https://localhost:7042/api/User/Create', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Agregar una fila a la tabla con la información del nuevo estudiante
        console.log(data)
        location.reload();
        // Limpiar el formulario
        // form.reset();
    })
    .catch(error => console.error(error));
}
//#endregion