import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: 'http://localhost:5137/swagger/v1/swagger.json', // './openapi/v1/openapi.json', // original: 'https://petstore3.swagger.io/api/v3/openapi.json',
  apiFile: '../api/empty/emptyApi.ts',
  apiImport: 'emptySplitApi',
  outputFile: '../api/raw/rawHopStoreApi.ts',
  exportName: 'rawHopStoreApi',
  hooks: true,
};
export default config;

/*
Using multiple output Apis is possible,
but they have to be manually renamed
and duplicate types may exist for f.e. HttpStatusCode

  outputFiles: {
    './rawApi/rawOrderApi.ts': {
      filterEndpoints: [/order/i],
    },
    './rawApi/rawUserApi.ts': {
      filterEndpoints: [/user/i],
    },
  },
 */
