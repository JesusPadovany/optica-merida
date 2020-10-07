//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";

//PrimeNG
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MenubarModule } from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

// Directivas
import { UppercaseDirective } from './directives/uppercase.directive';
import { OnlyNumber } from './directives/onlynumber.directive';
import { NumericDirective } from './directives/number.directive';

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CarComponent } from './components/car/car.component';
import { MarcasComponent } from './components/admin/marcas/marcas.component';
import { TipoLentesComponent } from './components/admin/tipo-lentes/tipo-lentes.component';
import { InventarioComponent } from './components/admin/inventario/inventario.component';

@NgModule({
  declarations: [
    AppComponent,
    UppercaseDirective,
    OnlyNumber,
    NumericDirective,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    NavbarComponent,
    ContactComponent,
    FooterComponent,
    ProfileComponent,
    RegisterComponent,
    AboutComponent,
    ShopComponent,
    ProductDetailComponent,
    CarComponent,
    MarcasComponent,
    TipoLentesComponent,
    InventarioComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarouselModule,
    ButtonModule,
    DataViewModule,
    PanelModule,
    ToastModule,
    TableModule,
    ConfirmDialogModule,
    MenubarModule,
    DialogModule,
    InputTextModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
