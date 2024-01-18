import { configureStore } from "@reduxjs/toolkit"
import slikReducer from "./slices/slik"

const store = configureStore({
  reducer: {
    slik: slikReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
  },
})

export default store
export type StoreState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
