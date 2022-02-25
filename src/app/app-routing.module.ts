import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDrinkComponent } from './components/pages/add-drink/add-drink.component';
import { AddFavoriteDrinksComponent } from './components/pages/add-favorite-drinks/add-favorite-drinks.component';
import { AddItemsComponent } from './components/pages/add-items/add-items.component';
import { AddSalesComponent } from './components/pages/add-sales/add-sales.component';
import { AddcustomerComponent } from './components/pages/addcustomer/addcustomer.component';
import { CustomerComponent } from './components/pages/customer/customer.component';
import { DrinkComponent } from './components/pages/drink/drink.component';
import { EditDrinkComponent } from './components/pages/edit-drink/edit-drink.component';
import { EditSalesComponent } from './components/pages/edit-sales/edit-sales.component';
import { EditcustomerComponent } from './components/pages/editcustomer/editcustomer.component';
import { LoginComponent } from './components/pages/login/login.component';
import { MainComponent } from './components/pages/main/main.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { SalesComponent } from './components/pages/sales/sales.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "drink", component: DrinkComponent, canActivate: [AuthGuard] },
  { path: "drink/adddrink", component: AddDrinkComponent, canActivate: [AuthGuard] },
  { path: "drink/edit/:id", component: EditDrinkComponent, canActivate: [AuthGuard] },
  { path: "customer", component: CustomerComponent, canActivate: [AuthGuard] },
  { path: "customer/addcustomer", component: AddcustomerComponent, canActivate: [AuthGuard] },
  { path: "customer/edit/:id", component: EditcustomerComponent, canActivate: [AuthGuard] },
  { path: "customer/:id", component: AddFavoriteDrinksComponent, canActivate: [AuthGuard] },
  { path: "sales", component: SalesComponent, canActivate: [AuthGuard] },
  { path: "sales/addSales", component: AddSalesComponent, canActivate: [AuthGuard] },
  { path: "sales/edit/:id", component: EditSalesComponent, canActivate: [AuthGuard] },
  { path: "sales/:id", component: AddItemsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
