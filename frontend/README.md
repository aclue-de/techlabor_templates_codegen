# CodeGen
## Summary
This WebClient uses a generated ClientApi to communicate with the backend.
The backend (in dev mode) uses Swagger to generate and expose the openapi.json.
The Swagger-Ui of the backend provides the URL to the openapi.json.
This ClientApi generation uses given URL.

## Setup
1. Install packages using yarn. If you do not have yarn, install it via npm globally.
   - ```yarn install```
   - Note: There is no UI available to test backend endpoints and they are not implemented anyway

## Development Workflow
### Generate ClientApi
1. Start the backend server in dev mode (localhost).
   The openapi.json url provided by the Swagger-UI should already match the url set in codegen/config/openapi-config.ts.
2. Generate the ClientApi using the following command (uses packages.json script):
   - ```yarn codegen```
3. Check whether endpoint names have changed in codegen/api/enhanced/
   1. Fix errors due to outdated endpoint names by updating them.
   2. Add new Endpoints

## Directories
### codegen
Contains everything regarding ClientApi generation from openapi.json
#### api
Apis are used to communicate with the backend.
##### empty
Required Boilerplate
##### enhanced
Uses the raw api & adds tags for invalidation & automatic refetch.
See contained comments for further explanation.
##### raw
These are the generated Apis. They contain queries, mutations & the types they require.
#### config
Specifies how to generate the ClientApi, where to get files, 
where to put files and how to name them.
The paths are relative & should not have to be changed.
