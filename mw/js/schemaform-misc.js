schemaform.misc = 
{
  "schema": {
    "security" : {
      "title": "Security",
      "type": "string"
    },
    "tags" : {
      "title": "Tags",
      "type": "string"
    },
    "externalDocs" : {
      "title": "External Docs",
      "type": "string"      
    }
  },
  "form" : [
	"security",
	"tags",
	"externalDocs"
	]
};

schemaform.misc_editor = {
	"schema": {
		"output": {
		  "title": "Output",
		  "type": "string",
		},
	},
	"form" : [{
		"key": "output",
		"type": "ace",
		"aceMode": "json",
		"aceTheme": "twilight",
		"width": "100%",
		"height": "400px"
    }]
};