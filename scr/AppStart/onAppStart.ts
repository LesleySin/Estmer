import { EventsService } from "../Core/Services/EventsService/EventsService";
import ReqresService from "../Core/Services/ReqresService/ReqresService"

import type { DependenciesContainer } from "../Core/models/DependenciesContainer";

export default function onAppStart(): DependenciesContainer {
  const deps: DependenciesContainer = {
    reqresService: new ReqresService(),
    eventsService: new EventsService()
  };
  return deps;
};
