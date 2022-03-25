import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AuthState } from './models/AuthState';
import type { IAppState } from './models/IAppState';

const initialState: IAppState = {
    isSingedIn: false,
    authState: 'Undefined',
}

export const appSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setIsSigned: (state, action: PayloadAction<boolean>) => {
            state.isSingedIn = action.payload;
        },
        setAuthState: (state, action: PayloadAction<AuthState>) => {
            state.authState = action.payload;
        }
    },
})

export const { setIsSigned, setAuthState } = appSlice.actions
export default appSlice.reducer