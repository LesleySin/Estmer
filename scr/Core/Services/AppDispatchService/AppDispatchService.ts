import type BaseService from "../../API/BaseService";
import type { NavigationContainerRefWithCurrent } from "@react-navigation/native";
import type { IAppDispatchService } from "../../API/IAppDispatchService";
import type { IEventsService } from "../../API/IEventsService";
import type { IReqresService } from "../../API/IReqresService";
import type { DependenciesContainer } from "../../models/DependenciesContainer";
import { IAuthService } from "../../API/IAuthService";

export default class AppDispatchService implements IAppDispatchService {
    private readonly reqresService: IReqresService;
    private readonly eventsService: IEventsService;
    private readonly authService: IAuthService;
    private readonly navigationRef: NavigationContainerRefWithCurrent<ReactNavigation.RootParamList>;

    constructor(deps: DependenciesContainer, navigationRef: NavigationContainerRefWithCurrent<ReactNavigation.RootParamList>) {
        this.navigationRef = navigationRef;
        this.connectAppDeps(deps);
    };

    private connectAppDeps(deps: DependenciesContainer) {
        for (const key in deps) {
            if (Object.prototype.hasOwnProperty.call(deps, key)) {
                const dep: BaseService = deps[key];
                this[key] = dep;
                dep.setDispather(this);
            };
        };
    };

    public navigate<T extends Object = {}>(route: string, params?: T): void {
        this.navigationRef.navigate(route, params);
    };

    public resetNavigationThree(): void {
        this.navigationRef.resetRoot
    };

    public emitEvent(key: string, ...args: any[]) {
        this.eventsService.emit(key, ...args);
    };

};