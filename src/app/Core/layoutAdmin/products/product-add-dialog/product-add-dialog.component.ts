import { AdminService } from './../../admin.service';
import { MessageService } from 'primeng/api';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-product-add-dialog',
  templateUrl: './product-add-dialog.component.html',
  styleUrls: ['./product-add-dialog.component.scss'],
  providers: [MessageService],
})
export class ProductAddDialogComponent implements OnInit {
  public form: FormGroup;
  categories: any[] = [];
  subCategories: any[] = [];
  discounts: any[] = [];
  featureValues: any[] = [];
  gallery: any[] = [];
  errorMessages = {
    categoryID: [{ type: 'required', message: 'دسته بندی اول محصول را انتخاب کنید.' }],
    subCategoryID: [{ type: 'required', message: 'دسته بندی دوم محصول را انتخاب کنید.' }],
    discountID: [{ type: 'required', message: 'تخفیف محصول را انتخاب کنید.' }],
    title: [{ type: 'required', message: 'عنوان محصول را وارد کنید.' }],
    price: [{ type: 'required', message: 'قیمت محصول را وارد کنید.' }],
    image: [{ type: 'required', message: 'تصویر محصول را آپلود کنید.' }],
  };

  constructor(
    private formBuilder: FormBuilder,
    private service: AdminService,
    public ref: DynamicDialogRef,
    public messageService: MessageService,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getDiscounts();
    this.createform();
  }

  getCategories(): any {
    this.service.getAllCategories().subscribe((response) => {
      if (response.success === true) {
        this.categories = response.data;
      } else {
        this.messageService.add({
          severity: 'error',
          summary: ' دریافت اطلاعات ',
          detail: response.data,
        });
      }
    });
  }

  getDiscounts(): any {
    this.service.getAllDiscounts().subscribe((response) => {
      if (response.success === true) {
        this.discounts = response.data;
      } else {
        this.messageService.add({
          severity: 'error',
          summary: ' دریافت اطلاعات ',
          detail: response.data,
        });
      }
    });
  }

  onCategory(e: any) {
    this.form.controls.categoryID.setValue(e.value._id);
    this.subCategories = e.value.SubCategory;
  }

  onSubCategory(e: any) {
    this.form.controls.subCategoryID.setValue(e.value._id);
  }

  onDiscount(e: any) {
    this.form.controls.discountID.setValue(e.value._id);
    if (e.value._id != '6096ff5214f7e3595e542b41') {
      this.form.controls.discountStatus.setValue(true);
    }
    else{
      this.form.controls.discountStatus.setValue(false);
    }
  }

  createform(): void {
    this.form = this.formBuilder.group({
      categoryID: new FormControl(null, [Validators.required]),
      subCategoryID: new FormControl(null, [Validators.required]),
      discountID: new FormControl(null, [Validators.required]),
      discountStatus: new FormControl(false, [Validators.required]),
      title: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      detail: new FormControl(null),
      features: new FormControl(null),
      featuresValue: new FormControl(null),
      image: new FormControl(null, [Validators.required]),
      help: new FormControl(null),
      gallery: new FormControl(null),
      keywords: new FormControl(null),
      imageDescription: new FormControl(null),
      metaDescription: new FormControl(null)
    });
  }

  imageUploader(event): void {
    const formData = new FormData();
    formData.append('file', event.files[0], event.files[0].name);
    this.service.uploadFile(formData).subscribe((response) => {
      if (response.success === true) {
        this.form.controls.image.setValue(response.imagePath);

        this.messageService.add({
          severity: 'success',
          summary: ' آپلود تصویر محصول ',
          detail: 'تصویر با موفقیت آپلود شد.',
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: ' آپلود تصویر محصول ',
          detail: response.data,
        });
      }
    });
  }

  onMultipleUpload(event): void {
    const formData = new FormData();
    for (let i = 0; i < event.files.length; i++) {
      formData.append('files', event.files[i], event.files[i].name);
    }
    this.service.uploadMultiFiles(formData).subscribe((response) => {

      if (response.success === true) {

        let imgPathList : any[] = [];
        response.imagePath.forEach(element => {
          imgPathList.push('http://api.jahantebkhoram.ir/'+ element.path);
        });

        this.form.controls.gallery.setValue(imgPathList);

        this.messageService.add({
          severity: 'success',
          summary: ' آپلود تصویر محصول ',
          detail: 'تصویر با موفقیت آپلود شد.',
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: ' آپلود تصویر محصول ',
          detail: response.data,
        });
      }
    });
  }

  addFeature(feature, value): void {
    let dup = false;
    if(feature != '' && value != ''){
      this.featureValues.forEach((item)=>{
        if(item.feature == feature && item.value == value){
          dup=true;
        }
      });
      if(!dup){
        this.featureValues.push({
          feature: feature,
          value: value,
        });
      }
    }
  }

  deleteFeature(index: any) {
    this.featureValues.splice(index, 1);
  }

  submitForm(): void {
    let features : any[] = [];
    let values : any[] = [];
    this.featureValues.forEach((item)=>{
      features.push(item.feature);
      values.push(item.value);
    });

    this.form.controls.features.setValue(features);
    this.form.controls.featuresValue.setValue(values);

    this.service.addProduct(this.form.value).subscribe((response) => {
      if (response.success === true) {
        this.ref.close(true);
      } else {
        this.messageService.add({severity: 'error', summary: ' ثبت اطلاعات ', detail: response.data});
      }
    });
  }

}
