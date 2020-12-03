

var showJsonFormOutput = function(e) { 
	var formName = 'info';
	
	var output = JSON.stringify(JSONForm.getFormValue($('#'+formName+'-form')),null,4) 
	$('#'+formName+'_editor-form textarea').val(output);
	
	//schemaform[formName +'_editor'].value = { output : output };
	//$('#'+formName+'_editor-form').empty()
	//$('#'+formName+'_editor-form').jsonForm(schemaform[formName+'_editor']);
};

showJsonFormOutput();

$('#info-form').on('change', showJsonFormOutput);