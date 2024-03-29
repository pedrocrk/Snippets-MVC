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
///Si el valor inicial es vacio 0 cero limpia el combo
function OnCboxBound(e) {
    if (this.selectedIndex == -1) {
        if (this.value() == '0')
            this.value('');
    }
}

//CAMBIAR COLOR DE FONDO A ELEMNTOS DEL COMBO
function onVersionBound(e) {

    let VersionActual = $("#Version_Nbr").val();

    var ddl = e.sender;
    var items = ddl.items(); 

    for (var i = 0; i < items.length; i++) {
        
        var dataItem = ddl.dataItem($(items[i]));

        console.log(dataItem.Version_Nbr)
        console.log(VersionActual)

        if (dataItem.Version_Nbr == VersionActual) {
            $(items[i]).css("background-color", "red");
        }
    }

}

//Deshabilitar item en combo
//Evento databound del combo estatus
function onEstatusBound(e) {

    var ddl = e.sender;
    var items = ddl.items();
    
    for (var i = 0; i < items.length; i++) {
        var dataItem = ddl.dataItem($(items[i]));
        console.log(dataItem)
        if (dataItem.Estatus_Id == 0) {
            $(items[i]).prop("disabled", true);
            $(items[i]).addClass("ItemDisabled");//Add class for styles
        }
    }
}
/////Syle de deshabilitacion
<style>
    .ItemDisabled{
        color:grey;
    }
    .ItemDisabled:hover{
        color:grey;
    }
</style>



//Funcion del combo padre para cascada del combo Children
function onComboChange() {
    if (this.selectedIndex == -1) {
        this.value('');
        this.dataSource.read();
        $('#Children').data("kendoComboBox").value('');
        $('#Children').data("kendoComboBox").dataSource.data([]);
        $('#Children').data("kendoComboBox").enable(false);
    }
    else {
        $('#Children').data("kendoComboBox").enable(true);
        $('#Children').data("kendoComboBox").value('');
        $('#Children').data("kendoComboBox").dataSource.read();
    }
}

</style>
