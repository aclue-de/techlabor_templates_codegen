import {rawApi} from './rawApi';

// Tag invalidation has to be added manually as swagger.json can not provide these.
// These endpoint names are based on rawApi.ts and TagTypes may have any name.
// documentation: https://redux-toolkit.js.org/rtk-query/usage/automated-refetching
const enhancedApi = rawApi.enhanceEndpoints({
    addTagTypes: ['User'],
    endpoints: {
        getApiUser: {
            providesTags: ['User'],
        },
        postApiUser: {
            invalidatesTags: ['User'],
        },
        deleteApiUser: {
            invalidatesTags: ['User'],
        },
    }
});

export default enhancedApi;
