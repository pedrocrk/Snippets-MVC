//-- ===================================================================
//-- Author:		Pedro Vargas Licona
//-- Create date:   20/02/2018
//-- Description:	Snippets KendoComboBox Jquery 
//-- ===================================================================


var Combo = $("#ElemntId").data("kendoComboBox");

//Inhabilitar ComboBox Kendo
Combo.readonly(true);
Combo.enable(false);

//Asignacion de valor al combo
Combo.value(8);
//Comprobar valor no seleccionado en combo 
if (Combo.selectedIndex == -1) {
    //Asignar valores vacios al combo
    instFinanciera.select(-1);
    instFinanciera.value('');
}

//Limpia el datasource del combo
Combo.dataSource.data([])

//lanza evento

Combo.trigger("change");

///Funcion para limpiar los combos que no tienen valor seleccionado
//-----------------------------------------------------------------
function onCboxChange(e) {
    if (this.selectedIndex == -1) {
        this.value('');
        this.dataSource.read();
    }
}

//Get value of datasource on metod change

var dataItem = this.dataItem(this.select()); 
var val1 = dataItem.Attrib1;
var val2 = dataItem.Atribb2;
    
---Or--- 
var attrib = Combo.dataItem(Combo.selectedIndex).Atrib;

//configurar el origen de datos para el comobo
var DS = new kendo.data.DataSource({
            transport: {
                read: {
                    url: "/Cotroller/Action",
                    dataType: "json", // "jsonp" is required for cross-domain requests; use "json" for same-domain requests
                    data: function () {
                        //configuracion de parametros para el controlador
                    }
                }
            }
        });
        Combo.setDataSource(DS);

//Configurar cascada
$("#ElemntId").kendoComboBox({
            cascadeFrom: "ComboFather",
            autoBind: false
        });


//Verifica que el valor actual este activo
    //---------------------------------------------------
    function onAraSocioBound() {
        //----------------Nombre_Combo, --AttrId, -------AttrNombre, --------Valor_Id, --------------Valor_Nombre
        ComboValorActivo("AraSocio_Id", "AraSocio_Id", "Nombre_Completo", '@Model.AraSocio_Id', '@Model.Nombre_Completo');
    }

function OnCboxChange(e) {
    if (this.selectedIndex == -1) {
        this.value('');
        this.dataSource.read();
    }
}
