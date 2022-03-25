import { configureStore } from '@reduxjs/toolkit'
import appSlice from './AppSlice/AppSlice'

export const store = configureStore({
  reducer: {
    app: appSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch