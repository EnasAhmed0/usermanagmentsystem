import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SigupComponent } from './components/sigup/sigup.component';
import { NotesComponent } from './components/notes/notes.component';
import {
  CurrencyPipe,
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  SlicePipe,
  UpperCasePipe,
} from '@angular/common';
import { SearchPipe } from './core/pipes/search.pipe';
import { ProfileComponent } from './components/profile/profile.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UsersComponent } from './components/users/users.component';
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    LoginComponent,
    NotFoundComponent,
    SigupComponent,
    NotesComponent,
    SearchPipe,
    ProfileComponent,
    UpdateUserComponent,
    AddUserComponent,
    UsersComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    UpperCasePipe,
    LowerCasePipe,
    SlicePipe,
    CurrencyPipe,
    DatePipe,
    JsonPipe,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
