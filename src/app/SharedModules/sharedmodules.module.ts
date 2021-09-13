import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatrialModule } from './matrial.module';
import { PrimengModule } from './primeng.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PrimengModule, MatrialModule],
  exports: [PrimengModule, MatrialModule],
})
export class SharedmodulesModule {}
