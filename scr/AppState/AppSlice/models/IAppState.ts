import type { AuthState } from "./AuthState";

export interface IAppState {
    isSingedIn: boolean;
    authState: AuthState;
};