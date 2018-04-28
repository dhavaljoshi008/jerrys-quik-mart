import { PreloadingStrategy } from "@angular/router/src/router_preloader";
import { Route } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';

export class CustomPreloader implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
       return route.data && route.data.preload? fn() : of(null);
    }
}
