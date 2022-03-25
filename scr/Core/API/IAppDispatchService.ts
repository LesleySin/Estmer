/**
* @IAppDispatchService
* Provides API signatures for specific implementations of app dispatching module
*/
export interface IAppDispatchService {

    /**
    * @navigate
    * Provides method for navigation between screens from  app dispatching module
    */
    navigate<T extends Object = {}>(route: string, params?: T): void;

    emitEvent(key: string, ...args: any[])

};