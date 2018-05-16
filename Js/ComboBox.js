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

//Get value of datasource on metod change

var dataItem = this.dataItem(this.select()); 
var val1 = dataItem.Attrib1;
var val2 = dataItem.Atribb2;
    
---Or--- 
var attrib = Combo.dataItem(Combo.selectedIndex).Atrib;
