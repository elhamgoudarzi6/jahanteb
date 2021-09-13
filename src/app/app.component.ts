import { NgxSpinnerService } from 'ngx-spinner';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'جهان خرم طب';
  constructor(private spinner: NgxSpinnerService) {}
  ngOnInit() {
    // this.spinner.show().then(r =>console.log(r) );
     this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 3 seconds */
      this.spinner.hide();
    }, 3000);
  }
  ngAfterViewInit(): void {
    // this.spinner.show();
  }
}
