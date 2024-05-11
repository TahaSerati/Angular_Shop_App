import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Components/auth/login/login.component';
import { RegisterComponent } from './Components/auth/register/register.component';
import { HeaderComponent } from './Components/pages/header/header.component';
import { CardComponent } from './Components/cards/card-lg/card.component';
import { ProductPanelComponent } from './Components/product/product-panel/product-panel.component';
import { ProductInfoComponent } from './Components/product/product-info/product-info.component';
import { HomeComponent } from './Components/pages/home/home.component';
import { ProductSliderLgComponent } from './Components/prSliders/product-slider-lg/product-slider-lg.component';
import { ProductSliderMdComponent } from './Components/prSliders/product-slider-md/product-slider-md.component';
import { SearchComponent } from './Components/search/search.component';
import { FooterComponent } from './Components/pages/footer/footer.component';
import { NotFoundComponent } from './Components/pages/not-found/not-found.component';
import { CartComponent } from './Components/user/cart/cart.component';
import { DashboardComponent } from './Components/user/dashboard/dashboard.component';
import { OrdersComponent } from './Components/user/orders/orders.component';
import { LikesComponent } from './Components/user/likes/likes.component';
import { AddressComponent } from './Components/user/address/address.component';
import { AdminPanelComponent } from './Components/admin/admin-panel/admin-panel.component';
import { DeleteProductComponent } from './Components/user/delete-product/delete-product.component';
import { ChangeProductComponent } from './Components/user/change-product/change-product.component';
import { AddNewProductComponent } from './Components/user/add-new-product/add-new-product.component';

// PRIMENG 
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputNumberModule } from 'primeng/inputnumber';
import { CardSmComponent } from './Components/cards/card-sm/card-sm.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MATERIAL
import { MaterialModule } from './UI/material/material.module';
import { CategoriesComponent } from './Components/pages/categories/categories.component';
import { CarouselComponent } from './Components/pages/carousel/carousel.component';
import { AlertBoxComponent } from './Components/pages/alert-box/alert-box.component';
import { MegamenuComponent } from './Components/pages/megamenu/megamenu.component';
import { SppinerComponent } from './UI/sppiner/sppiner.component';
import { CategoryPanelComponent } from './Components/admin/category-panel/category-panel.component';
import { AskAlertBoxComponent } from './Components/pages/ask-alert-box/ask-alert-box.component';
import { EditCategoryComponent } from './Components/admin/edit-category/edit-category.component';
import { AddCategoryComponent } from './Components/admin/add-category/add-category.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    CardComponent,
    ProductPanelComponent,
    ProductInfoComponent,
    CartComponent,
    HomeComponent,
    ProductSliderLgComponent,
    ProductSliderMdComponent,
    SearchComponent,
    FooterComponent,
    NotFoundComponent,
    CartComponent,
    DashboardComponent,
    OrdersComponent,
    LikesComponent,
    AddressComponent,
    AdminPanelComponent,
    DeleteProductComponent,
    ChangeProductComponent,
    AddNewProductComponent,
    CardSmComponent,
    CategoriesComponent,
    CarouselComponent,
    AlertBoxComponent,
    MegamenuComponent,
    SppinerComponent,
    CategoryPanelComponent,
    AskAlertBoxComponent,
    EditCategoryComponent,
    AddCategoryComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    // primeng
    InputSwitchModule,
    InputNumberModule,
    BrowserAnimationsModule,

    //Matrial
    MaterialModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
