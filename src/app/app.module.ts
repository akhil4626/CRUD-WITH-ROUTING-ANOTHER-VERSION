import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DbdataService } from './dbdata.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewComponentComponent } from './view-component/view-component.component';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { AddComponentComponent } from './add-component/add-component.component';
import { Router, RouterModule } from '@angular/router';


const routes=[
  {
    path:'',component:ViewComponentComponent
  },
  {
    path:'create',component:AddComponentComponent
  },
  {
    path:'update',component:UpdateComponentComponent
  },
  
]
@NgModule({
  declarations: [
    AppComponent,
    ViewComponentComponent,
    UpdateComponentComponent,
    AddComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [DbdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
