import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [
    HeaderComponent, 
    LogoComponent, 
    FooterComponent, 
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
