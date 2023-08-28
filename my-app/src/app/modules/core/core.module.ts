import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, LogoComponent, BreadcrumbsComponent, FooterComponent],
  imports: [
    CommonModule,
    ButtonModule,
    BreadcrumbModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
