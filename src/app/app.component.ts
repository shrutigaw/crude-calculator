

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
   standalone:true,
   imports:[CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  num1!: number;
  num2!: number;
  operation: string = '';
  result!: number;
  title: any;

  constructor(private http: HttpClient) {}

  setOperation(op: string) {
    this.operation = op;
  }

  calculate() {
    if (!this.num1 || !this.num2 || !this.operation) {
      alert('Please enter numbers and select an operation.');
      return;
    }

    const url = `http://localhost:8080/api/calculator/calculate?num1=${this.num1}&num2=${this.num2}&operation=${this.operation}`;

    this.http.get<number>(url).subscribe((res) => {
      this.result = res;
    });
  }
}
