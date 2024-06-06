

var showOutput = function(e) { 
	var formName = 'info';
	
	var value = JSONForm.getFormValue($('#'+formName+'-form'));
	
	var jsonoutput = JSON.stringify(value,null,4) 
    $('#'+formName+'_editor-form textarea[name="jsonoutput"]').val(jsonoutput);
	
	var yamloutput = json2yaml(value);
	$('#'+formName+'_editor-form textarea[name="yamloutput"]').val(yamloutput);
	
	//schemaform[formName +'_editor'].value = { output : output };
	//$('#'+formName+'_editor-form').empty()
	//$('#'+formName+'_editor-form').jsonForm(schemaform[formName+'_editor']);
};

$('#info-form').on('change', showOutput);

showOutput();

$('#info_editor-form .btn').on('click',function(){
	console.log(JSONForm.getFormValue($('#info_editor-form')));
});