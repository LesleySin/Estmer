import type { IAppDispatchService } from "./IAppDispatchService";

export default class BaseService {
    protected appDispatcher: IAppDispatchService;

    setDispather(obj: IAppDispatchService) {
        this.appDispatcher = obj;
    };

};