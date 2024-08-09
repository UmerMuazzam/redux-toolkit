import { productsReducer } from '@/reduxToolkit/asyncThunk'
import { productsApi } from '@/reduxToolkit/products'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

// ************************************REDUX PERSIST*****************************************

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['cartItemsDetail', 'entities', 'error', 'loading', '_persist']
}
const persistedReducer = persistReducer(persistConfig, productsReducer)


export const store = configureStore({
    reducer: {
        products: persistedReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }).concat(productsApi.middleware),
})

setupListeners(store.dispatch)