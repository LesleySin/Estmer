import type { AuthModel } from "../Services/AuthService/models/AuthModelBase";

export interface IAuthService {

    tryAuth(authModel: AuthModel, skip: boolean): Promise<void>;

    test(): Promise<any>

    prepareAuthWorkflow(): Promise<void>

    applyRegistrationModel(authModel: AuthModel): Promise<void>;

    handlePasscodeEntring(pass: string): Promise<void>

};