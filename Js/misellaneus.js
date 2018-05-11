//-- ===================================================================
//-- Author:		Pedro Vargas Licona
//-- Create date:   03/04/2018
//-- Description:	Snippets Misellaneus Jquery 
//-- ===================================================================

//Add and remove rules requireds of elements from jquery
$("#Element").rules("remove", "required")
$("#Element").rules("add", "required")

//Add event change of textbox from jquery
$('#Element').bind('input propertychange', function () {
        //do your update here
})

//Add elemento to form for serialize
form = $("#Elementform").serializeArray();
var newElement = {
        name: "nameAtribute",
        value: $('#valueAttribute').val()
        };
form.push(newElement);
