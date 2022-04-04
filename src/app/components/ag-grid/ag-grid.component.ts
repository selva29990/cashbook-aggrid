import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { AggridService } from 'src/app/services/aggrid.service';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent {

  @ViewChild('agGrid') agGrid!: AgGridAngular;
  btnClicked = true;
  columnDefs: ColDef[] = [
    { field: 'make', sortable: true, filter: true, checkboxSelection: true, rowGroup: true },
    { field: 'model', sortable: true, filter: true },
    { field: 'price', sortable: true, filter: true }
  ];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true
  };

  autoGroupColumnDef: ColDef = {
    headerName: 'Model',
    field: 'model',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      checkbox: true
    }
  };

  rowData: Observable<any>;

  constructor(private dataService: AggridService) { 
    this.rowData = this.dataService.getData();
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node =>
      {
        if(node.groupData) {
          return { make: node.key, model: 'Group' };
        }
        return node.data;
      });

    const selectedDataStringPresentation = selectedData.map(
      node => `${node.make} ${node.model}`
    ).join(', ');
    if(!!selectedDataStringPresentation){
      window.alert(`Selected row: ${selectedDataStringPresentation}`);
    } else {
      window.alert(`Please select a row`);
    }
  }
}
