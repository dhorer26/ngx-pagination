import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  collection = [];
  constructor(private route: ActivatedRoute, private router: Router) {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }
  pageChange(newPage: number) {
    this.router.navigate([''], { queryParams: { page: newPage } });
  }
}
