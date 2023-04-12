import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http : HttpClient){}
  title = 'manage-excel';
  data = [
    {
      userId: 'rirani',
      jobTitleName: 'Developer',
      firstName: 'Romin',
      lastName: 'Irani',
      preferredFullName: 'Romin Irani',
      employeeCode: 'E1',
      region: 'CA',
      phoneNumber: '408-1234567',
      emailAddress: 'romin.k.irani@gmail.com',
    },
    {
      userId: 'nirani',
      jobTitleName: 'Developer',
      firstName: 'Neil',
      lastName: 'Irani',
      preferredFullName: 'Neil Irani',
      employeeCode: 'E2',
      region: 'CA',
      phoneNumber: '408-1111111',
      emailAddress: 'neilrirani@gmail.com',
    },
    {
      userId: 'thanks',
      jobTitleName: 'Program Directory',
      firstName: 'Tom',
      lastName: 'Hanks',
      preferredFullName: 'Tom Hanks',
      employeeCode: 'E3',
      region: 'CA',
      phoneNumber: '408-2222222',
      emailAddress: 'tomhanks@gmail.com',
    },
  ];

  readExcelFile() {
    this.http.get('assets/template.xlsx', { responseType: 'arraybuffer' }).subscribe(data => {
      const workBook = XLSX.read(data, { type: 'array' });
      const sheetName = workBook.SheetNames[0];
      const sheet = workBook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      console.log(jsonData);
    });
  }
}
