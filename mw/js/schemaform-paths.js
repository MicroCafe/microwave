schemaform.paths = 
{
  "schema": {
    "paths" : {
      "title": "Paths",
      "type": "array",
      "items" : {
        "type" : "object",
        "properties" : {
          "path" : {
            "title" : "Path",
            "type" : "string"
          },
          "get" : {
            "type" : "object",
            "properties" : {
              "operationId" : {
                "title" : "OperationId",
                "type" : "string"
              },
              "summary" : {
                "title" : "summary",
                "type" : "string"
              }
            }
          },
          "put" : {
            "type" : "object",
            "properties" : {
              "operationId" : {
                "title" : "OperationId",
                "type" : "string"
              },
              "summary" : {
                "title" : "summary",
                "type" : "string"
              }
            }
          },
          "post" : {
            "type" : "object",
            "properties" : {
              "operationId" : {
                "title" : "OperationId",
                "type" : "string"
              },
              "summary" : {
                "title" : "summary",
                "type" : "string"
              }
            }
          },
          "delete" : {
            "type" : "object",
            "properties" : {
              "operationId" : {
                "title" : "OperationId",
                "type" : "string"
              },
              "summary" : {
                "title" : "summary",
                "type" : "string"
              }
            }
          }
        }
      }
    }
  },
  "form" : [
    {
      "type": "array",
      "items": {
        "type": "section",
        "items": [
          "paths[].path",
          {
            "type": "fieldset",
            "title": "GET",
            "expandable": true,
            "items": [
              "paths[].get"
            ]
          },
          {
            "type": "fieldset",
            "title": "PUT",
            "expandable": true,
            "items": [
              "paths[].put"
            ]
          },
          {
            "type": "fieldset",
            "title": "POST",
            "expandable": true,
            "items": [
              "paths[].post"
            ]
          },
          {
            "type": "fieldset",
            "title": "DELETE",
            "expandable": true,
            "items": [
              "paths[].delete"
            ]
          }
        ]
      }
    }
  ]
};

schemaform.paths_editor = {
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