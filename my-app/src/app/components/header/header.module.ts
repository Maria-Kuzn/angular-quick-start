import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import { HeaderComponent } from './header.component';
import { LogoComponent } from '../logo/logo.component';


@NgModule({
  declarations: [HeaderComponent, LogoComponent],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
