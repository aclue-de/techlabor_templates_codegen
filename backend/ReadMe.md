# CodeGen
This project is an Example of how to generate an openapi.json from Backend Code 
and to use it to generate a Frontend ClientApi.
## Content
- How to Setup Project
- Desired Development Workflow
- Explanations of components, files & packages

## Setup
1. Install packages
2. Run Server in http mode (SwaggerUi should open in browser window).
	1. Note: The Controllers are not implemented.
3. (Optional) Checkout the WebClient to see how the openapi.json 		
   provided by Swagger can be used to generate a ClientApi.

## Development Workflow
1. The backend updates/extends its endpoints and thus a new openapi.json is generated.
2. The WebClient uses the new openapi.json to generate a new ClientApi & updates/extends its components.

## ToDo
### Add Api Versioning
The packages allow for versioned openapi.json & versioned Controller Endpoints (/v1/, /v2/, etc.)
but that has to tested & minor adjustments are required

## Directories
### Program.cs
Contains Comments explaining the openapi.json & Swagger setup

### Controller
Boilerplate Controllers with Annotations to generate openApi.json from.

### Model
Boilerplate Models which are part of openApi.json due to being referenced by Controllers.
Fields have to be marked as [Required] to avoid them being set to nullable in openapi.json.
Using package Lombok.NET to provide annotion based constructor/builder for less Boilerplate.

## Trivia
### Research
Generating AspNetCore Controllers from openapi.json is not viable. 
This was tried using the openapi-generator for aspnetcore & using NSwag.
Both are only available for outdated .net versions, are error prone & provide ugly code.
Generating openapi.json via Swagger from AspNetCore code works very well though.