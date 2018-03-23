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
else
    