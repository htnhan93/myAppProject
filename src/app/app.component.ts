import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tableData = [
    { 'drugId': 'CHI0001', 'drugName': 'Chi..... 1', 'uom': 'Viên', 'lotNo': '123456', 'inventory': '15', 'actually': '15' },
    { 'drugId': 'CHI0002', 'drugName': 'Chi..... 2', 'uom': 'Viên', 'lotNo': '123457', 'inventory': '150', 'actually': '150' },
    { 'drugId': 'CHI0003', 'drugName': 'Chi..... 3', 'uom': 'Viên', 'lotNo': '123458', 'inventory': '1500', 'actually': '1500' },
    { 'drugId': 'CHI0004', 'drugName': 'Chi..... 4', 'uom': 'Viên', 'lotNo': '123459', 'inventory': '150', 'actually': '150' },
    { 'drugId': 'CHI0005', 'drugName': 'Chi..... 5', 'uom': 'Viên', 'lotNo': '123450', 'inventory': '15', 'actually': '15' }
  ]
  constructor() {

  }
}
