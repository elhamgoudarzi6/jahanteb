import { LayoutService } from './../layout.service';
import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../auth/local-storage.service';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  latestNews: any[] = [];
  AllNews: any[] = [];
  displayBasic: boolean|any;
  isLogged: boolean|any;
  displayNotNews:boolean=false;
  Alltags: any[] = [];
  constructor(private service: LayoutService,
    public localStorage: LocalStorageService,
              private spinner: NgxSpinnerService) {}
    ngOnInit(): void {
    this.spinner.show();
    this.isLogged = this.localStorage.getCurrentUser();
    this.service.getLatestNews().subscribe((response:any) => {
      if (response['success'] === true) {
        this.spinner.hide();
        this.latestNews = response['data'];
      }
    });

    this.service.getAllNews().subscribe((response:any) => {
      if (response['success'] === true) {
        this.AllNews = response['data'];
      }
    });

    this.service.getAllTagNews().subscribe((response:any) => {
      if (response['success'] === true) {
        this.Alltags = response['data'];
      }
    });
}

}
