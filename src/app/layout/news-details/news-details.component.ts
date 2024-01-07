import { LayoutService } from './../layout.service';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../auth/local-storage.service';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  latestNews: any[] = [];
  AllNews: any[] = [];
  news: any;
  displayBasic: boolean | any;
  isLogged: boolean | any;
  displayNotNews: boolean = false;
  Alltags: any[] = [];
  newsID: string | any;
  constructor(private service: LayoutService,
    public localStorage: LocalStorageService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.route.paramMap.subscribe(params => this.newsID = params.get('id'));
    this.isLogged = this.localStorage.getCurrentUser();
    this.service.getLatestNews().subscribe((response: any) => {
      if (response['success'] === true) {
        this.spinner.hide();
        this.latestNews = response['data'];
      }
    });

    this.service.getAllTagNews().subscribe((response: any) => {
      if (response['success'] === true) {
        this.Alltags = response['data'];
      }
    });

    this.service.getNews(this.newsID).subscribe((response: any) => {
      if (response['success'] === true) {
        this.news = response['data'];
      }
    });

  }
}
