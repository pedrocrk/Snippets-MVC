//-- ===================================================================
//-- Author:		Pedro Vargas Licona
//-- Create date:   07/03/2018
//-- Description:	Snippets KendoGridView Jquery 
//-- ===================================================================

var grid = $("#Elemento").data("kendoGrid");

//Ocultar Columna de GridView
grid.hideColumn(2);

//Evento de seleccion de fila en grid de impresion
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
