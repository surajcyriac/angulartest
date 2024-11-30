import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emptable',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './emptable.component.html',
  styleUrl: './emptable.component.css'
})
export class EmptableComponent {
  
  employees: any[] = [];
  newEmployee: any = { name: '', contact: '', email: '', address: '' };

  addEmployee() {
    this.employees.push({ ...this.newEmployee });
    this.newEmployee = { name: '', contact: '', email: '', address: '' };
  }

}