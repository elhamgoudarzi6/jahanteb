import { LayoutService } from './../../../layout/layout.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LocalStorageService } from '../../../auth/local-storage.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('productMenu') productMenu: ElementRef | any;
  public displayMobileMenu: boolean = false;
  categories: any[] = [];
  items: MenuItem[] | any;
  mobileMenuCategories: MenuItem[] = [];
  pathCatalog: any;
  visible = true;
  isLogged: boolean=false;

  constructor(
    private route: Router,
    private service: LayoutService,
    public localStorage: LocalStorageService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
  }

  showMobileMenu(): void {
    this.displayMobileMenu = true;

  }

  goProduct(categoryId: any, subCategoryId: any): any {
    this.router.navigateByUrl(
      '/products/' + categoryId + '/' + subCategoryId
    );
  }

  ngOnInit(): void {
    this.spinner.show();
    if (this.localStorage.getCurrentUser() && this.localStorage.userType != 'user') {
      this.isLogged=true;
    } else {
   
    }
    this.getCatalog();
    this.service.getAllCategory().subscribe((response: any) => {
      if (response.success === true) {
        this.categories = response.data;
        let subList: MenuItem[];
        this.mobileMenuCategories.push({
          label: 'همه محصولات',
          command: () => this.goProduct(0, 0),
        });

        this.categories.forEach((cat) => {
          subList = [];
          if (cat.SubCategory.length > 0) {
            subList.push({
              label: 'همه',
              command: (event) => this.goProduct(cat._id, 0),
            });
            cat.SubCategory.forEach((sub: any) => {
              subList.push({
                label: sub.title,
                command: () => this.goProduct(cat._id, sub._id),
              });
            });
            this.mobileMenuCategories.push({
              label: cat.title,
              items: subList,
            });
          } else {
            this.mobileMenuCategories.push({
              label: cat.title,
              command: () => this.goProduct(cat._id, 0),
            });
          }
        });
      }
    });

    this.items = [
      {
        label: 'صفحه اصلی',
        icon: 'pi pi-pw pi-home',
        command: () => this.route.navigate(['/']),
      },
      {
        label: 'محصولات',
        icon: 'pi pi-fw pi-list',
        items: this.mobileMenuCategories,
      },
      {
        label: 'سوالات متداول',
        icon: 'pi pi-fw pi-question-circle',
        command: () => this.route.navigate(['/faq']),
      },
      {
        label: 'اخبار',
        icon: 'pi pi-fw pi-tags',
        command: () => this.route.navigate(['/news']),
      },
      {
        label: 'کاتالوگ',
        icon: 'pi pi-fw pi-image',
        command: () => { document.location.href = this.pathCatalog; },
      },
      {
        label: 'درباره ما',
        icon: 'pi pi-fw pi-info-circle',
        command: () => this.route.navigate(['/about']),
      },
      {
        label: 'تماس با ما',
        icon: 'pi pi-fw pi-phone',
        command: () => this.route.navigate(['/contact']),
      },
    ];

    // this.spinner.hide();


    var pc = document.getElementById('pcHeader');
    if (pc !== null) {
      var pcSticky = pc.offsetTop;
    }

    var mobile = document.getElementById('mobileHeader');
    if (mobile !== null) {
      var mobileSticky = mobile.offsetTop;
    }

    // function myFunction() {
    //   if (pc !== undefined) {
    //     if (window.pageYOffset > pcSticky) {
    //       pc.classList.add('sticky');
    //     } else {
    //       pc.classList.remove('sticky');
    //     }
    //   }
    //   if (mobile !== undefined) {
    //     if (window.pageYOffset > mobileSticky) {
    //       mobile.classList.add('sticky');
    //     } else {
    //       mobile.classList.remove('sticky');
    //     }
    //   }
    // }

    // window.onscroll = function () {
    //   myFunction();
    // };
  }

  goPanel() {
    if (this.localStorage.getCurrentUser() === true) {
      this.router.navigate(['user/panel']);
    } else {
      this.router.navigate(['/register']);
    }
  }

  openProductsMenu(): void {
    this.productMenu.nativeElement.classList.add('show');
  }

  closeProductsMenu(): void {
    this.productMenu.nativeElement.classList.remove('show');
  }

  toggleProductsMenu(): void {
    this.productMenu.nativeElement.classList.toggle('show');
  }

  getCatalog() {
    this.service.getAllCatalog().subscribe((response: any) => {
      if (response['success'] === true) {
        let result = response['data'][0];
        this.pathCatalog = result.path;
      }
    })
  }
}
