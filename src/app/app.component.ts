import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'primeng';
  value!: number;
  color: string | undefined;
  selectedCategories: any[] = [];

  categories: any[] = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' }
  ];

  rows: number = 10;

  onPageChange(event: any) {
    this.rows = event.rows;
  }
  activeIndex: number = 0;
 
}
