import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatIconModule, MatDialog } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { ReportingComponent } from './reporting/reporting.component';
import { UsersComponent } from './users/users.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import {MatDialogModule } from '@angular/material';
import { DataService } from './info.service';

const appRoutes:Routes=[
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'products',component:ProductsComponent},
  {path:'reporting',component:ReportingComponent},
  {path:'users',component:UsersComponent},
  {path:'**',component:PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    ProductsComponent,
    ReportingComponent,
    UsersComponent,
    AddDetailsComponent
  ],
  entryComponents:[AddDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
