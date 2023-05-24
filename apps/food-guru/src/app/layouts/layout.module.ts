import { MaterializeModule } from './../plugins/materialize.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';

const layouts = [MainLayoutComponent];
@NgModule({
  declarations: [layouts],
  imports: [CommonModule, MaterializeModule],
  exports: [layouts],
})
export class LayoutModule {}
