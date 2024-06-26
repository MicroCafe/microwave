schemaform.info = 
{
  "schema": {
    "openapi": {
      "title": "Open API Version",
      "type": "string",
      "enum": [ "3.0.0", "2.0.0", "1.0.0" ]
    },
    "info" : {
      "title": "Info",
      "type": "object",
      "properties" : {
        "title" : {
          "title" : "Title",
          "type" : "string"
        },
        "description" : {
          "title" : "Description",
          "type" : "string"
        },
        "termsOfService" : {
          "title" : "Terms of Service",
          "type" : "string"
        },
        "contact" : {
          "title" : "Contact",
          "type" : "object",
          "properties" : {
            "name" : {
              "title" : "Name",
              "type" : "string"
            },
            "url" : {
              "title" : "URL",
              "type" : "string"
            },
            "email" : { 
              "title" : "Email",
              "type" : "string"
            }
          }
        },
        "license" : {
          "title" : "License",
          "type" : "object",
          "properties" : {
            "name" : {
              "title" : "Name",
              "type" : "string"
            },
            "url" : {
              "title" : "URL",
              "type" : "string"
            }
          }
        },
        "version" : {
          "title": "Document Version",
          "type": "string"
        }
      }
    },
    "servers" : {
	  "title": "Servers",
	  "type": "array",
	  "items" : {
		"type" : "object",
		"properties" : {
		  "url" : {
			"title" : "URL",
			"type" : "string"
		  },
		  "description" : {
			"title" : "Description",
			"type" : "string"
		  }
		}
	  }
    }
  },
  "form" : [
    "openapi",
    "info",
    "servers"
    ]
};

schemaform.info_editor = {
	"schema": {
		"language": {
			"type": "string",
			"enum": [ "JSON", "YAML" ]
		},
		"jsonoutput": {
		  "type": "string",
		},
		"yamloutput": {
		  "type": "string",
		},
	},
	"form": [{
		"key": "language",
		"title": "Output",
		"type": "radiobuttons",
		"activeClass": "btn-success"
	},{
		"key": "jsonoutput",
		"title": " ",
		"type": "textarea",
		"height": "400px"
    },{
		"key": "yamloutput",
		"title": " ",
		"type": "textarea",
		"height": "400px"
    }],
	"value" : {
		"language" : "JSON"
	}
};