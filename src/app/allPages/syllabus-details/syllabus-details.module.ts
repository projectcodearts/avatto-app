import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SyllabusDetailsPageRoutingModule } from './syllabus-details-routing.module';

import { SyllabusDetailsPage } from './syllabus-details.page';
import { SyllabusDetailsComponent } from 'src/app/components/syllabus-details/syllabus-details.component';

@NgModule({
  imports: [ 
    CommonModule,
    FormsModule,
    IonicModule,
    SyllabusDetailsPageRoutingModule
  ],
  declarations: [SyllabusDetailsPage,SyllabusDetailsComponent]
})
export class SyllabusDetailsPageModule {}
