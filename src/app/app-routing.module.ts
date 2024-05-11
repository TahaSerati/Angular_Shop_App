import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductInfoComponent } from './Components/product/product-info/product-info.component';
import { HomeComponent } from './Components/pages/home/home.component';
import { SearchComponent } from './Components/search/search.component';
import { LoginComponent } from './Components/auth/login/login.component';
import { NotFoundComponent } from './Components/pages/not-found/not-found.component';
import { CartComponent } from './Components/user/cart/cart.component';
import { DashboardComponent } from './Components/user/dashboard/dashboard.component';
import { AddressComponent } from './Components/user/address/address.component';
import { OrdersComponent } from './Components/user/orders/orders.component';
import { LikesComponent } from './Components/user/likes/likes.component';
import { AdminPanelComponent } from './Components/admin/admin-panel/admin-panel.component';
import { AddNewProductComponent } from './Components/user/add-new-product/add-new-product.component';
import { ChangeProductComponent } from './Components/user/change-product/change-product.component';
import { DeleteProductComponent } from './Components/user/delete-product/delete-product.component';
import { ProductPanelComponent } from './Components/product/product-panel/product-panel.component';
import { CategoriesComponent } from './Components/pages/categories/categories.component';
import { authGuard } from './Guards/auth.guard';
import { RegisterComponent } from './Components/auth/register/register.component';
import { CategoryPanelComponent } from './Components/admin/category-panel/category-panel.component';
import { EditCategoryComponent } from './Components/admin/edit-category/edit-category.component';
import { AddCategoryComponent } from './Components/admin/add-category/add-category.component';

const routes: Routes = [
  // pages
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'cart', component: CartComponent, canActivate : [authGuard] },

  // pages  dashboard
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  { path: 'dashboard/address', component: AddressComponent },
  { path: 'dashboard/orders', component: OrdersComponent },
  { path: 'dashboard/likes', component: LikesComponent },

  // pages  admin
  { path: 'adminPanel', component: AdminPanelComponent },
  { path: 'adminPanel/addNewProduct', component: AddNewProductComponent },
  { path: 'adminPanel/changeProduct', component: ChangeProductComponent },
  { path: 'adminPanel/deleteProduct', component: DeleteProductComponent },
  { path: 'adminPanel/categoryPanel', component: CategoryPanelComponent },
  { path: 'adminPanel/categoryPanel/edit/:id', component: EditCategoryComponent },
  { path: 'adminPanel/categoryPanel/addcategory', component: AddCategoryComponent },

  // products
  { path: 'products', component: ProductPanelComponent },
  { path: 'product/:id', component: ProductInfoComponent },
  { path: 'products/:productMainCategory', component: ProductPanelComponent },
  {
    path: 'products/:productMainCategory/:productSubCategory',
    component: ProductPanelComponent,
  },

  { path: 'search', component: SearchComponent },

  // auth
  { path: 'login', component: LoginComponent, canActivate: [authGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [authGuard] },

  // NF
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
