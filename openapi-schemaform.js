var schemaform = 
{
  "schema": {
    "openapi": {
      "title": "Open API",
      "type": "string",
      "enum": [ "3.0.0", "2.0.0", "1.0.0" ]
    },
    "info" : {
      "title": "Info",
      "type": "string"
    },
    "servers" : {
      "title": "Servers",
      "type": "string"
    },
    "paths" : {
      "title": "Paths",
      "type": "string"
    },
    "components" : {
      "title": "Components",
      "type": "string"
    },
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
    "openapi",
    "info",
    "servers",
    "paths",
    "components"
    ]
}