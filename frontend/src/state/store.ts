import {configureStore} from '@reduxjs/toolkit';
import enhancedApi from "./api/enhancedApi";

export const store = configureStore({
    reducer: {
        [enhancedApi.reducerPath]: enhancedApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(enhancedApi.middleware)
});

export type IRootState = ReturnType<typeof store.getState>;
