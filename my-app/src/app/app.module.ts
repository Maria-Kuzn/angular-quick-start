import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './modules/courses/courses.module';
import { CoreModule } from './modules/core/core.module';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { AuthModule } from './modules/auth/auth.module';
registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CoursesModule,
    AuthModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'ru-RU'},],
  bootstrap: [AppComponent]
})
export class AppModule { }
