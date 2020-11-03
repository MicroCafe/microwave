config = {
  "logo" : "images/icon/logo.jpg",
  "name" : "Open API",
  "nav" : "Y",
  "filter" : "N",
  
  "data-dev" : "",
  "section-dev": "",

  "data" : "",
  "section" : ""
}

sections = [
  {
    "id" : "info",
    "name" : "Info",
    "state" : "active"
  },
  {
    "id" : "paths",
    "name" : "Paths"
  },
  {
    "id" : "misc",
    "name" : "Misc"
  }
];

widgets = [
	{
	"section": "info",
	"id": "info",
	"name": "Info",
	"desc": "",
	"type": "jsonform",
	"src": "../mw/openapi/info.html",
	"size": "12"
	},
	{
	"section": "paths",
	"id": "paths",
	"name": "Paths",
	"desc": "",
	"type": "jsonform",
	"src": "../mw/openapi/paths.html",
	"size": "12"
	},
	{
	"section": "misc",
	"id": "misc",
	"name": "Misc",
	"desc": "",
	"type": "jsonform",
	"src": "../mw/openapi/misc.html",
	"size": "12"
	}
];
