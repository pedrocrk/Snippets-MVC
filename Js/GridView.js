//-- ===================================================================
//-- Author:		Pedro Vargas Licona
//-- Create date:   07/03/2018
//-- Description:	Snippets KendoGridView Jquery 
//-- ===================================================================

var grid = $("#Elemento").data("kendoGrid");

//Ocultar Columna de GridView
grid.hideColumn(2);

//Evento de seleccion de fila checkbox en grid de impresion
//------------------------------------------------
function SeleccionFila(elem, RowUID) {

    var state = $(elem).is(':checked');

    var currenRow = $('[data-uid=' + RowUID + ']');

    if (currenRow != null) {
        if (state == true) {
            currenRow.addClass('k-state-selected');
        }
        else {
            currenRow.removeClass('k-state-selected');
        }
    }
}
//Recorrido de checks seleccionados en el grid
var ListSeleccionadas = '';
    $('input[name="chkSolicitudd"]:checked').each(function () {
        strChk_Id = this.id.replace("chk_", "");
        ListSeleccionadas += strChk_Id + ',';
    });


//Empty grid
$("#grid").data("kendoGrid").dataSource.data([]);

//Asignacion de icono de fromato de descarga con condicion
$(".k-grid-Formato").removeClass("k-button").addClass("fa fa-file-text-o fa-lg");

var gridData = grid.dataSource.view();

        for (var i = 0; i < gridData.length; i++) {
            var currentUid = gridData[i].uid;
            var currenRow = grid.table.find("tr[data-uid='" + currentUid + "']");
            var FormatButton = $(currenRow).find(".k-grid-Formato");
            if (gridData[i].ConceptoPago_Id != //Valor a comparar\\) {
                //Ocultar Boton
                FormatButton.hide();
            }
        }

//Obtener el valor de un atributo desde una fila seleccionada en el grid
var selectedItem = grid.dataItem(grid.select());
var item= selectedItem.Item;
