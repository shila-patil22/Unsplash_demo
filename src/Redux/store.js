import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { unsplashApi } from './reduxApiCalling'

export const store = configureStore({
  reducer: {
    [unsplashApi.reducerPath]:unsplashApi.reducer,
  },
})

setupListeners(store.dispatch)