import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { AgContainerComponent } from './ag-container/ag-container.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import 'ag-grid-enterprise';
import { AgGridModule } from 'ag-grid-angular';
import {MatButtonModule} from '@angular/material/button';
import { AgSampleGridComponent } from './ag-sample-grid/ag-sample-grid.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [ToolBarComponent, AgContainerComponent, AgGridComponent, AgSampleGridComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule
  ],
  exports: [
    ToolBarComponent,
    AgContainerComponent,
    AgGridComponent,
    AgGridModule
  ],
})
export class ComponentsModule { }
