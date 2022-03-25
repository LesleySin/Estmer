import { ObjectModel } from "../../../models/ObjectModel";

export class AuthModel extends ObjectModel {
    public login: string;
    public password: string;
    public appPasscode: string;

    constructor(email: string, password: string, appPasscode: string) {
        super();
        this.login = email;
        this.password = password;
        this.appPasscode = appPasscode;
    };

};