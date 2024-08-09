"use client";

import { store } from "@/app/store";
import { Provider } from "react-redux";

import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from "redux-persist";

let persistor = persistStore(store)

export default function StoreProvider({ children }) {
    return <Provider store={store}>
        <PersistGate persistor={persistor}>
            {children}
        </PersistGate>
    </Provider>;
}