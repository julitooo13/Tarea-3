//#region GetList
    $(document).ready(function() {
        var table = $("#userTable").find("tbody");

        $.ajax({
        url: "https://localhost:7042/api/User/GetList",
        type: "GET",
        dataType: "json",
        success: function(users) {
            console.log(users)
            // Recorrer los usuarios y agregar filas a la tabla
            users.forEach(function(user) {
            var row = $("<tr></tr>");
            row.append("<td>" + user.Id + "</td>");
            row.append("<td>" + user.Name + "</td>");
            row.append("<td>" + user.Email + "</td>");
            row.append
            (
                `<td>
                    <img src="C:\Users\\Julio\\Downloads\\${user.Vuelo}" width="100">
                </td>`
            );
            row.append
            (
                `<td>
                    <img src="C:\Users\\Julio\\Downloads\\${user.Hotel}" width="100">
                </td>`
            );
            row.append
            (
                `<td>
                    <img src="C:\Users\\Julio\\Downloads\\${user.Auto}" width="100">
                </td>`
            );
            row.append
            (
                `<td class="d-flex justify-content-center">                    
                    <button class="m-1 btn btn-danger" data-toggle="modal" data-target="#exampleModal${user.Id}">Delete</button>
                    <div class="modal fade" id="exampleModal${user.Id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                Juan Rosario, Seguro que quiere eliminar esta User de ${user.Name}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-danger " onClick="Eliminar(${user.Id})">Eliminar</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </td>`
            )
            table.append(row);
            });
        },
        error: function(xhr, status, error) {
            console.log("Error al obtener los datos de la API.");
        }
        });
    });
//#endregion

function Eliminar(id) {
    console.log("cliked " + id)
    // URL de la API con el ID proporcionado
     var url = 'https://localhost:7042/api/User/Delete/' + id;

    // // Realiza la solicitud DELETE utilizando jQuery
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