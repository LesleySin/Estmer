import { EventsService } from "../Core/Services/EventsService/EventsService";
import ReqresService from "../Core/Services/ReqresService/ReqresService"
import AuthService from "../Core/Services/AuthService/AuthService";

import type { DependenciesContainer } from "../Core/models/DependenciesContainer";
import EstimateManagerService from "../Core/Services/EstimateManagerService/EstimateManagerService";

export default function onAppStart(): DependenciesContainer {
  const deps: DependenciesContainer = {
    reqresService: new ReqresService(),
    eventsService: new EventsService(),
    authService: new AuthService(),
    estimateManagerService: new EstimateManagerService()
  };
  return deps;
};
