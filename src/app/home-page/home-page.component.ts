import { Component, OnInit } from '@angular/core';
import DATA from '../data/data';

@Component({
  selector: 'pranz-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  rowData: any[];
  columnDefs: any[];
  colData: any[];
  editModeOn = false;
  structuringModeOn = false;
  namePinned = false;
  constructor() {
    this.checkData();
  }
  checkData() {
    if (localStorage.getItem('data') == null) {
      console.log('data refresh');
      localStorage.setItem('data', JSON.stringify(DATA.DATA));
      localStorage.setItem('col_data', JSON.stringify(DATA.COLUMN_DEF));
    }
    this.rowData = JSON.parse(localStorage.getItem('data'));
    this.columnDefs = JSON.parse(localStorage.getItem('col_data'));
    this.colData = JSON.parse(localStorage.getItem('col_data'));
    for (const x of this.columnDefs) {
      if (x.field === 'name' && x.pinned === 'left') {
        this.namePinned = true;
      }
    }
    console.log(this.colData);
  }

  ngOnInit() {
  }

  addRow() {
    this.rowData.push(
      {
            _id: Math.random(),
            index: 0,
            guid: '',
            isActive: false,
            balance: '',
            picture: '',
            age: '',
            eyeColor: '',
            name: '',
            gender: '',
            company: '',
            email: '',
            phone: '',
            address: '',
            registered: '',
            latitude: '',
            longitude: ''
      }
    );
    this.rowData = Object.assign([], this.rowData);
    console.log(this.rowData);
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  pinName() {
    this.gridColumnApi.setColumnPinned('name', 'left');
    this.namePinned = true;
    for (const x of this.colData) {
      if (x.field === 'name') {
        x.pinned = 'left';
      }
    }
  }
  unpinName() {
    this.gridColumnApi.setColumnPinned('name', null);
    this.namePinned = false;
    for (const x of this.colData) {
      if (x.field === 'name') {
        x.pinned = null;
      }
    }
  }
  onColumnEvent(evt) {
    switch (evt.type) {
      case 'columnMoved':
        this.columnMoved(evt);
        break;
    }
  }
  columnMoved(evt) {
    console.log(this.colData);
    const toIndex = evt.toIndex;
    let index = -1;
    for (let i = 0; i < this.colData.length; i++) {
      if (this.colData[i].field === evt.columns[0].colId) {
        index = i;
        break;
      }
    }

    console.log(toIndex, index);
    if ((toIndex > 0) && this.colData[toIndex - 1].field === evt.columns[0].colId) {
      index = toIndex - 1;
    } else {
      index = toIndex + 1;
    }
    console.log(toIndex, index);
    const temp = this.colData[index];
    this.colData[index] = this.colData[toIndex];
    this.colData[toIndex] = temp;
    console.log(this.colData);
  }

  clear() {
    localStorage.clear();
    this.editModeOn = false;
    this.structuringModeOn = false;
    this.namePinned = false;
    this.checkData();
  }

  enableEditing() {
    this.editModeOn = true;
    for (const x of this.columnDefs) {
      x.editable = true;
    }
    this.columnDefs = Object.assign([], this.columnDefs);
  }

  saveValues() {
    this.editModeOn = false;
    for (const x of this.columnDefs) {
      x.editable = false;
    }
    this.columnDefs = Object.assign([], this.columnDefs);
    localStorage.setItem('data', JSON.stringify(this.rowData));
  }

  enableStructuring() {
    this.structuringModeOn = true;
    for (const x of this.columnDefs) {
      x.suppressMovable = false;
    }
    this.columnDefs = Object.assign([], this.columnDefs);
  }
  saveStructure() {
    this.structuringModeOn = false;
    this.columnDefs = Object.assign([], this.colData);
    localStorage.setItem('col_data', JSON.stringify(this.colData));
  }

}
