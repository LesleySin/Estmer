import { setAuthState, setIsSigned } from "../../../AppState/AppSlice/AppSlice";
import { store } from "../../../AppState/store";
import { routeNames } from "../../../Navigation/constants";
import BaseService from "../../API/BaseService";
import { IAuthService } from "../../API/IAuthService";
import type { AuthModel } from "./models/AuthModelBase";
import * as Keychain from 'react-native-keychain';
import { Platform } from "react-native";

export default class AuthService extends BaseService implements IAuthService {
    private userAuthModel: AuthModel;

    constructor() {
        super();
    };

    async tryAuth(authModel: AuthModel, skip = false): Promise<void> {

    };

    public async handlePasscodeEntring(pass: string): Promise<void> {
        if (pass === this.userAuthModel.appPasscode) {
            store.dispatch(setAuthState('Allow enter'))
        } else {
            this.appDispatcher.emitEvent(`failureCallback`)
        }
    };

    public async applyRegistrationModel(authModel: AuthModel): Promise<void> {
        this.userAuthModel = authModel;
        const serializedModel = authModel.serialize();
        await this.addCreditals(serializedModel, authModel.password)
        store.dispatch(setAuthState('Allow enter'))
    };

    async prepareAuthWorkflow(): Promise<void> {
        const savedPass = await Keychain.getAllGenericPasswordServices();
        if (savedPass.length === 0) {
            store.dispatch(setAuthState('Register Required'))
        } else {
            const credits = await Keychain.getGenericPassword({});
            if (credits) {
                this.userAuthModel = JSON.parse(credits.username) as AuthModel;
                store.dispatch(setAuthState('Enter app passcode'))
            };
        };
    };

    private async addCreditals(username: string, password: string) {
        await Keychain.setGenericPassword(username, password)
    };

    async test(): Promise<any> {
        await Keychain.resetGenericPassword({})
    }

};