import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../core/material/material.module';
import { MainComponent } from './components/main/main.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MainComponent,
    BenefitsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    SharedModule
  ],
  exports: [MainComponent,
    BenefitsComponent]
})
export class MainModule { }
