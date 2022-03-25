import type { IAuthService } from "../API/IAuthService";
import { IEstimateManagerService } from "../API/IEstimateManagerService";
import type { IEventsService } from "../API/IEventsService";
import type { IReqresService } from "../API/IReqresService";

/**
* @DependenciesContainer
* Provides a dependency container type that contains references to module APIs
*/
export type DependenciesContainer = {
    reqresService: IReqresService;
    eventsService: IEventsService;
    authService: IAuthService;
    estimateManagerService: IEstimateManagerService
};