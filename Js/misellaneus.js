//-- ===================================================================
//-- Author:		Pedro Vargas Licona
//-- Create date:   03/04/2018
//-- Description:	Snippets Misellaneus Jquery 
//-- ===================================================================

//Add and remove rules requireds of elements from jquery
$("#Element").rules("remove", "required")
$("#Element").rules("add", "required")

//Set enabled or disablet element
$("#Element")..prop("disabled", false);
$("#Element")..prop("disabled", true);


//Add event change of textbox from jquery
$('#Element').bind('input propertychange', function () {
        //do your update here
})

//get value selected o raddio button

$("input[name=nombreItem]:checked").val()

//Add elemento to form for serialize
form = $("#Elementform").serializeArray();
var newElement = {
        name: "nameAtribute",
        value: $('#valueAttribute').val()
        };
form.push(newElement);

//Obtener el valor del atributo data de un elemento desde un loop
$(this).data("value")


//Liga de documentacion de listas dinamicas jQuery:
                               https://api.jqueryui.com/sortable/

//Simula readOnly en radionuttons
//Se deshabilitan los no seleccionados para poder seguir enviando el valor al controlador
$("input[type=radio][name=Proveedor_Tipo]:not(:checked)").prop('disabled', true);

//Selecciona id que contienen :
let inputCitas = $("input[id *='inputCita_']")


        $.each(inputCitas, function (i, item) {
            let Proveedor_Id = $(item).data('asesor-id')
            let DiaMes = $(item).data('input-id')
            let Num_Citas = $(item).val()

            data_Cita = {
                Proveedor_Id: Proveedor_Id, Dia: DiaMes, Num_Citas: 1//Num_Citas
            };
            citas.push(data_Cita);
        });

$('input[name="chkAmenidad"]').each(function (e) {
                strChk_Id = this.id.replace("chk_", "");
                if (Array_Amenidades.indexOf(parseInt(strChk_Id)) != -1) {
                    $(this).prop('checked', true);
                }
            });


///Kendo format money
kendo.toString(parseFloat(saldoPendienteAjuste), 'c2'))

kendo.parseDate(fecha, "dd/MM/yyyy");
