import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MyFormComponent } from './my-form.component';

@NgModule({
  declarations: [MyFormComponent],
  exports: [MyFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MyFormModule { }
