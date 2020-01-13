import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { ConvertToSpacePipe } from './convert-to-space.pipe';



@NgModule({
  declarations: [
    StarComponent,
    ConvertToSpacePipe
  ],
  imports: [
    CommonModule
  ], 
  exports:[
    StarComponent,
    ConvertToSpacePipe
  ]
})
export class SharedModule { }
