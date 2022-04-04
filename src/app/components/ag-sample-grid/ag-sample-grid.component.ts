import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community/dist/lib/entities/colDef';
import { Observable } from 'rxjs';
import { AggridService } from 'src/app/services/aggrid.service';

@Component({
  selector: 'app-ag-sample-grid',
  templateUrl: './ag-sample-grid.component.html',
  styleUrls: ['./ag-sample-grid.component.scss']
})
export class AgSampleGridComponent{

  @ViewChild('agGrid') agGrid!: AgGridAngular;
  rowData: Observable<any>;


  columnDefs: ColDef[] = [
    {field: 'make', sortable: true, filter: true, checkboxSelection: true},
    {field: 'model', sortable: true, filter: true},
    {field: 'price', sortable: true, filter: true}
];

  constructor(private dataService: AggridService) { 
    this.rowData = this.dataService.getData();
  }

  getSelectedRows(): void {
        const selectedNodes = this.agGrid.api.getSelectedNodes();
          const selectedData = selectedNodes.map(node => node.data);
          const selectedDataStringPresentation = selectedData.map(node => `${node.make} ${node.model} ${node.price}`).join(', ');
          if(selectedDataStringPresentation) {
          alert(`Selected Row: ${selectedDataStringPresentation}`);
          } else {
            alert(`Please select a row`);
          }
   }
}
