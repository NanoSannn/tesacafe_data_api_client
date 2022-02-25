import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { MainComponent } from './components/pages/main/main.component';
import { DrinkComponent } from './components/pages/drink/drink.component';
import { CustomerComponent } from './components/pages/customer/customer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddcustomerComponent } from './components/pages/addcustomer/addcustomer.component';
import { EditcustomerComponent } from './components/pages/editcustomer/editcustomer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditDrinkComponent } from './components/pages/edit-drink/edit-drink.component';
import { AddDrinkComponent } from './components/pages/add-drink/add-drink.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AuthInterceptor } from './helper/auth.interceptor';
import { RegisterComponent } from './components/pages/register/register.component';
import { EditSalesComponent } from './components/pages/edit-sales/edit-sales.component';
import { AddSalesComponent } from './components/pages/add-sales/add-sales.component';
import { SalesComponent } from './components/pages/sales/sales.component';
import { AddFavoriteDrinksComponent } from './components/pages/add-favorite-drinks/add-favorite-drinks.component';
import { AddItemsComponent } from './components/pages/add-items/add-items.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainComponent,
    DrinkComponent,
    CustomerComponent,
    AddcustomerComponent,
    EditcustomerComponent,
    EditDrinkComponent,
    AddDrinkComponent,
    LoginComponent,
    RegisterComponent,
    EditSalesComponent,
    AddSalesComponent,
    SalesComponent,
    AddFavoriteDrinksComponent,
    AddItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
