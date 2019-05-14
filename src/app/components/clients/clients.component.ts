import { COMMA, ENTER, TAB } from '@angular/cdk/keycodes';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatChipInputEvent, MatDialog, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Client } from 'src/shared/models/client.interface';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})


export class ClientsComponent implements OnInit {
  displayedColumns: string[] = ['email', 'name', 'clientId', 'status', 'select'];
  dataSource = new MatTableDataSource<Client>();
  selection = new SelectionModel<Client>(true, []);
  private _RawClients: Client[];
  public _RenderClients: Client[];
  public _CurrentClients = {};
  public _criteriaList = [];

  public addOnBlur = true;
  public readonly separatorKeysCodes: number[] = [ENTER, COMMA, TAB];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.loadClients();
  }

  getClientDetail(row) {
    console.log(row);
  }

  loadClients() {

    const clients: Client[] = [
      { clientId: '1', name: 'pablo', email: 'a@a.com', status: 'pending' },
      { clientId: '2', name: 'jose', email: 'a@a.net', status: 'completed'},
      { clientId: '3', name: 'Manuel', email: 'a@a.net', status: 'completed'},
      { clientId: '4', name: 'Marta', email: 'a@a.net', status: 'completed'},
      { clientId: '5', name: 'jose', email: 'a@a.net', status: 'progress'},
      { clientId: '6', name: 'Jesus', email: 'a@a.net', status: 'completed'},
      { clientId: '7', name: 'Alfredo', email: 'a@a.net', status: 'completed'},
    ];

    this._RawClients = clients;
    this._RenderClients = this._RawClients;
    this.dataSource.data = this._RenderClients;
    this.dataSource.paginator = this.paginator;

  }

  closeModalDetail() {
    this.dialog.closeAll();
    this.loadClients();
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      if (this._criteriaList.indexOf(value) === -1) {
        this._criteriaList.push(value.toLowerCase());
      }
    }

    if (input) {
      input.value = '';
    }
    this.filClients();
  }

  remove(criteria: any): void {
    const index = this._criteriaList.indexOf(criteria);

    if (index >= 0) {
      this._criteriaList.splice(index, 1);
    }

    this.filClients();
  }

  filClients() {
    if (!this._criteriaList || this._criteriaList.length === 0) {
      this._RenderClients = this._RawClients;
      this.dataSource.data = this._RenderClients;
      this.dataSource.paginator = this.paginator;
      return;
    }

    const ClientResult = {};

    for (const client of this._RawClients) {
      for (const property of Object.keys(client)) {
        for (const criteria of this._criteriaList) {

          if (client[property] &&
            client[property].toString().toLowerCase().includes(criteria)) {
            ClientResult[client.clientId] = client;
          }

        }
      }
    }

    const arrayClients: Client[] = Object.values(ClientResult);
    this._RenderClients = arrayClients;
    this.dataSource.data = this._RenderClients;
    this.dataSource.paginator = this.paginator;
  }

}
