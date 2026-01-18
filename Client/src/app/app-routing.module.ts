import {ActivatedRouteSnapshot, createUrlTreeFromSnapshot, RouterModule, RouterStateSnapshot, Routes, UrlTree} from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {catchError, map, Observable, of} from "rxjs";
import {MainComponent} from "./main/main.component";
import {inject, NgModule} from '@angular/core';
import {ApiService} from "./api.service";

function isLoggedIn(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
  const apiService: ApiService = inject(ApiService);
  return apiService
    .me()
    .pipe(
        map(_ => true),
        catchError(e => {
          const url = createUrlTreeFromSnapshot(route, ['/login']);
          return of(url);
        }),
      );
}

const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [isLoggedIn]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
