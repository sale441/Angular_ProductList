import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WarenkorbComponent } from './warenkorb/warenkorb.component';
import { VersandkostenComponent } from './versandkosten/versandkosten.component';
import { ReactiveFormsModule } from '@angular/forms';

//***** für die Form User Arbeit benötigt man unbedingt =====>>>>> import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopBarComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    WarenkorbComponent,
    VersandkostenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
     { path: '', component: ProductListComponent },
     { path: 'products/:Id', component: ProductDetailsComponent },
     { path: 'Warenkorp', component: WarenkorbComponent },
     { path: 'p/:Id', component: ProductDetailsComponent },
     { path: 'versandkosten', component: VersandkostenComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
