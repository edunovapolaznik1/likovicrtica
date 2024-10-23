import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LikComponent } from './lik/lik.component';
import { LikoviComponent } from './likovi/likovi.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { LikCreateComponent } from './lik-create/lik-create.component';

@NgModule({
  declarations: [
    AppComponent,
    LikComponent,
    LikoviComponent,
    LikCreateComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
