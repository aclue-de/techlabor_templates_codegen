import type { ConfigFile } from '@rtk-query/codegen-openapi';
import { BACKEND_SWAGGER_JSON_URL } from '../../config';

// documentation: https://redux-toolkit.js.org/rtk-query/usage/code-generation
const config: ConfigFile = {
  schemaFile: BACKEND_SWAGGER_JSON_URL,
  // This path is relative to this config and being used to import the emptyApi.ts in the generated rawApi.ts
  apiFile: './emptyApi.ts',
  apiImport: 'emptyApi',
  // This path is relative to this config and being used to save the generated rawApi.ts
  outputFile: './rawApi.ts',
  exportName: 'rawApi',
  hooks: {
    queries: true,
    lazyQueries: true,
    mutations: true
  },
};
export default config;
