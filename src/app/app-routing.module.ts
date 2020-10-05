import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CarComponent } from './components/car/car.component';


const routes: Routes = [
  
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about-us',
    component: AboutComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'car',
    component: CarComponent
  },
  {
    path: '',
    component: HomeComponent,
    // canActivate: [AuthGuard],
    // children: [
    //   { 
    //     path: 'catalogos', component: CatalogosComponent,
    //     children:[
    //     { 
    //       path: 'presentacion', 
    //       component: PresentacionComponent, 
    //       outlet: "crudCatalogo" 
    //     },
    //   ]
    //   },
    //   {
    //     path: 'medicina', component: MedicinaComponent
    //   },
    //   {
    //     path: 'medicina/laboratorios/:id', component: DetalleLaboratorioComponent
    //   },
    //   {
    //     path: 'insumo', component: InsumoComponent
    //   },
    //   {
    //     path: 'insumo/detalle/:id',
    //     component: DetalleInsumoComponent,
    //     children: [
    //       {
    //         path: 'marcas/:idM',
    //         component: DetalleMarcaComponent
    //       }
    //     ]
    //   },
    //   {
    //     path: 'insumo/detalle/marca/:id/:idM', component: DetalleMarcaComponent
    //   },
    //   {
    //     path: 'stock', component: StockComponent,
    //     children: [
    //       {
    //         path: 'medicinas',
    //         component: LoteMedicinasComponent,
    //         outlet: "lotes"
    //       },
    //       {
    //         path: 'insumos',
    //         component: LoteInsumosComponent,
    //         outlet: "lotes"
    //       },
    //     ]
    //   },
    //   {
    //     path: 'movimientos', component: MovimientosComponent,
    //     children: [
    //       {
    //         path: 'mov-medicinas',
    //         component: MovimientosMedicinaComponent,
    //         outlet: "mov"
    //       },
    //       {
    //         path: 'mov-insumos',
    //         component: MovimientosInsumoComponent,
    //         outlet: "mov"
    //       }
    //     ]
    //   },
    //   {
    //     path: 'solicitud', component: SolicitudesComponent,
    //     children: [
    //       {
    //         path: 'med-entregadas',
    //         component: MedicinasEntregadasComponent,
    //         outlet: "sol"
    //       },
    //       {
    //         path: 'ins-entregados',
    //         component: InsumosEntregadosComponent,
    //         outlet: "sol"
    //       },
    //       {
    //         path: 'reg-entrega-med',
    //         component: NuevaEntregaMedicinaComponent,
    //         outlet: "sol"
    //       },
    //       {
    //         path: 'reg-entrega-ins',
    //         component: NuevaEntregaInsumoComponent,
    //         outlet: "sol"
    //       },
    //     ]
    //   },
    //   {
    //     path: 'cargafamiliar', component: CargaFamiliarComponent
    //   }
    // ]
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
