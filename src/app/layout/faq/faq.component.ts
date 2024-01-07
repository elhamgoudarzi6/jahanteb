import { LayoutService } from './../layout.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faq: any[] = [];

  constructor(private service: LayoutService) {
  }

  ngOnInit(): void {
    this.service.getAllFaq().subscribe((response:any) => {
      if (response['success'] === true) {
        this.faq = response['data'];
      }
    });
  }

}
