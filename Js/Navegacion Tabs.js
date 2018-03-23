//-- ===================================================================
//-- Author:		Pedro Vargas Licona
//-- Create date:   20/02/2018
//-- Description:	Snippets Navegacion Tabs Jquery 
//-- ===================================================================

//Configuracion de evento de click en Tab, para cargar contenido hasta que se seleciona el elemento
//-------------------------------------------------------------------------------------------------
$('#divTab .nav-tabs a').click(function () {
    if (($(this).attr("href") == '#tab-1')) {
        //Se carga la sección de descuentos
        DatosGenerales();
    }
    else if (($(this).attr("href") == '#tab-2')) {
        //Accion
    }
    else if (($(this).attr("href") == '#tab-3')) {
        //Accion
    }
    else if (($(this).attr("href") == '#tab-4')) {
        //Accion
    }
})