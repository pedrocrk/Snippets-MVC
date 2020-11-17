//-- ===================================================================
//-- Author:		Pedro Vargas Licona
//-- Create date:   07/03/2018
//-- Description:	Snippets KendoGridView Jquery 
//-- ===================================================================

var grid = $("#Elemento").data("kendoGrid");

//Ocultar Columna de GridView
grid.hideColumn(2);

//Vaciar grid
//------------
grid.dataSource.data([]);

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
var sum;
var ListSeleccionadas = '';
    $('input[name="chkSolicitudd"]:checked').each(function () {
        strChk_Id = this.id.replace("chk_", "");
        ListSeleccionadas += strChk_Id + ',';
        //obtener valor desde el data del check
        sum += $("#" + this.id).attr('data-value');
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
            
// Evento OnExcelExoprt del grid, para la correcta exportacion en columnas con templetes
function DinamicExcelExport(e) {
    var sheet = e.workbook.sheets[0];
    var colTemplates = [];  //Initialize new array
    var data = this.dataSource.view();

    for (var i = 0; i < this.columns.length; i++) {
        if (this.columns[i].template) {
            colTemplates.push(kendo.template(this.columns[i].template)); //Add kendo template to colTemplate array if it exists for the given index's column
        } else {
            colTemplates.push(null); //Add null to given index if template does not exist for the column index. This ensures columns are mapped to the proper index.
        }
    }

    //colTemplate array has been built now: Example of array at this point)     colTemplate: { templateCol[0], null, templateCol[3], null, null  }

    for (var i = 0; i < colTemplates.length; i++) {
        for (var j = 0; j < data.length; j++) {
            if (colTemplates[i] != null) {
                sheet.rows[j + 1].cells[i].value = colTemplates[i](data[j]); //Loop through all colTemplates and all data in the grid to build the excel sheet. Skip null colTemplates.
            }
        }
    }
}
            
            
     ///Mapear checkboxes de un grid desde una lista del controlador       
 function Seleccion_Checkboxes() {
    if ($("#ElementListsValues").val() > 0) {
        List_Ids = $("#ElementListsValues").val();
        if (List_Ids!="") {
            var Array_Ids = List_Ids.split(",").map(Number);
            ///Recorrido de checks
            $('input[name="NameCheck"]').each(function (e) {
                strChk_Id = this.id.replace("chk_", "");
                //Si uno de los checks coincide con un id de la lista se activa el check
                if (Array_Ids.indexOf(parseInt(strChk_Id)) != -1) {
                    $(this).prop('checked', true);
                }
            });
        } 
    }    
}

///Busqueda de elemento en grid por uid
function DescargaDocsExpediente(uid) {
    let Ruta_Documento = "";
    var grid = $("#NameGrid").data("kendoGrid");
    var gridData = grid.dataSource.view();    

    for (var i = 0; i < gridData.length; i++) {
        if (gridData[i].uid == uid) {            
            Ruta_Documento = gridData[i].Ruta_Documento;
            break;
        }
    }

    window.open(Url_DescargaDoctoDigital + '?ruta=' + Ruta_Documento, '_blank');
}
            
            
            /////Cambio de colores en exporyacion de grid
            
            function onExcelExport(e) {
    
    let rows = e.workbook.sheets[0].rows;

    for (var ri = 0; ri < rows.length; ri++) {
        let row = rows[ri];

        if (row.type == 'header') {
            
            for (var ci = 0; ci < row.cells.length; ci++) {
                let titulo = row.cells[ci].value;

                if (row.cells[ci].colSpan == 1 && row.cells[ci].rowSpan == 2) {
                    if (titulo != 'Incidencias')
                        row.cells[ci].background = "#001A66";
                    else
                        row.cells[ci].background = "#000000";
                }

                if (titulo.indexOf("Ticket Sello Rojo_") != -1 || titulo == 'TICKETS DE SELLO ROJO') {
                    row.cells[ci].background = "#C11F1F";
                    row.cells[ci].value = titulo.replace('Ticket Sello Rojo_', '')
                }
                if (titulo.indexOf("Ticket Entrega_") != -1 || titulo == 'TICKETS DE ENTREGA') {
                    row.cells[ci].background = "#FF0000";
                    row.cells[ci].value = titulo.replace('Ticket Entrega_', '')
                }
                if (titulo.indexOf("Ticket Garantia_") != -1 || titulo == 'TICKETS DE GARANTÍA') {
                    row.cells[ci].background = "#F4F701";
                    row.cells[ci].color = "#000";
                    row.cells[ci].value = titulo.replace('Ticket Garantia_', '')
                }
                if (titulo.indexOf("Ticket Reincidencia_") != -1 || titulo == 'TICKETS DE REINCIDENCIA') {
                    row.cells[ci].background = "#CC6600";
                    row.cells[ci].value = titulo.replace('Ticket Reincidencia_', '')
                }

            }            
        }
        if (row.type == 'data') {

            for (var i = 0; i < row.cells.length; i++) {
                if (i == 34) {
                    let valPorcentaje = row.cells[i].value;
                    row.cells[i].value = kendo.format("{0:p}", parseFloat(row.cells[i].value) / 100);
                    if (valPorcentaje < 40)
                        row.cells[i].background = "#2ca609";
                    else if (valPorcentaje < 70)
                        row.cells[i].background = "#f4f701";
                    else
                        row.cells[i].background = "#f00";
                }
                if (i == 35) {
                    let valPorcentaje = row.cells[i].value;
                    row.cells[i].value = kendo.format("{0:p}", parseFloat(row.cells[i].value) / 100);
                    if (valPorcentaje < 40)
                        row.cells[i].background = "#2ca609";
                    else if (valPorcentaje < 70)
                        row.cells[i].background = "#f4f701";
                    else
                        row.cells[i].background = "#f00";


                }
                if (i == 36) {
                    let valPorcentaje = row.cells[i].value;
                    row.cells[i].value = kendo.format("{0:p}", parseFloat(row.cells[i].value) / 100);
                    if (valPorcentaje < 40)
                        row.cells[i].background = "#2ca609";
                    else if (valPorcentaje < 70)
                        row.cells[i].background = "#f4f701";
                    else
                        row.cells[i].background = "#f00";
                }

                if (i == 32 ||i == 33 ||i == 37 ||i == 25 ||i == 17 ||i == 10) {
                    let valPorcentaje = row.cells[i].value;
                    row.cells[i].value = kendo.format("{0:p}", parseFloat(row.cells[i].value) / 100);
                }
            }
        }
    }
}
            
            
            //Formateo de grid en exportacion a Excel
//---------------------------------------
function excelExport(e)
{
    var sheet = e.workbook.sheets[0];

    for (var rowIndex = 1; rowIndex < sheet.rows.length; rowIndex++)
    {
        var sheet = e.workbook.sheets[0];

        for (var rowIndex = 1; rowIndex < sheet.rows.length; rowIndex++)
        {
            var row = sheet.rows[rowIndex];

            row.cells[5].format = "yy-MM-dd";
        }
    }
}
            
