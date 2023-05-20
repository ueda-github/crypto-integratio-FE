import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentification/login.component';
import { RegisterComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { LoginService } from './authentification/login.service';
import { AuthInterceptorService } from './auth-interceptor.service';
import { RegisterService } from './registration/registration.service';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { AuthGuard } from './utilities/AuthGuard';
import { HomeComponent } from './home/home.component';
import { Helpers } from './utilities/Helpers';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from '../app/profile/profile.component';
import { ExchangeRatesComponent } from './exchangeRates/exchangeRates.component';
import { ExchangeRatesService } from './exchangeRates/exhangeRates.service';
import { OrdersComponent } from './orders/orders.component';
import { OrdersService } from './orders/orders.service';
import { TradesService } from './trades/trades.service';
import { TradesComponent } from './trades/trades.component';
import { Trades } from './shared/models/trades.model';
import { SymbolsComponent } from './symbols/symbols.component';
import { SymbolsService } from './symbols/symbols.service';
import { UsersComponent } from './users/users.component';
import { UserService } from './users/users.service';

const appRoutes: Routes = [

  { path: '', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'exchangeRates', component: ExchangeRatesComponent, canActivate: [AuthGuard]},
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard]},
  { path: 'trades', component: TradesComponent, canActivate: [AuthGuard]},
  { path: 'symbols', component: SymbolsComponent, canActivate: [AuthGuard]},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProfileComponent,
    ExchangeRatesComponent,
    OrdersComponent,
    TradesComponent,
    SymbolsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    StorageServiceModule
  ],
  providers: [LoginService, RegisterService, AuthGuard, Helpers, ProfileComponent, LoginComponent, ExchangeRatesService,
    ExchangeRatesComponent, OrdersService, OrdersComponent, TradesComponent, TradesService, 
    SymbolsComponent, SymbolsService, UserService, UsersComponent,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
