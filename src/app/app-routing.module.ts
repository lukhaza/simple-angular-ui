import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
// import { PassThrough } from 'stream';


const routes: Routes = [
  { path: '', component: LoginComponent },
  // { path: '/login/succes/:jwt', component: PassThrough },
  // { path: '/login/failure', component: PassThrough },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ]
})
export class AppRoutingModule { }
