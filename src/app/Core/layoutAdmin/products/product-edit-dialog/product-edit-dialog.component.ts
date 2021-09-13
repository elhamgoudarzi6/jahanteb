import { MessageService } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { AdminService } from './../../admin.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-edit-dialog',
  templateUrl: './product-edit-dialog.component.html',
  styleUrls: ['./product-edit-dialog.component.scss'],
})
export class ProductEditDialogComponent implements OnInit {
  public form: FormGroup;
  categories: any[] = [];
  subCategories: any[] = [];
  discounts: any[] = [];
  featureValues: any[] = [];
  gallery: any[] = [];
  product: any;
  keywords: string;
  selectedCat: any;
  selectedSub: any;
  selectedDiscount: any;

  errorMessages = {
    categoryID: [
      { type: 'required', message: 'دسته بندی اول محصول را انتخاب کنید.' },
    ],
    subCategoryID: [
      { type: 'required', message: 'دسته بندی دوم محصول را انتخاب کنید.' },
    ],
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
    this.product = this.config.data.product;
    if (this.product.keywords != null) {
      this.keywords = this.product.keywords.split(',');
    }
    this.getCategories();
    this.getDiscounts();

    for (let i = 0; i < this.product.features.length; i++) {
      this.featureValues.push({
        feature: this.product.features[i],
        value: this.product.featuresValue[i],
      });
    }

    this.createform();
  }

  getCategories(): any {
    this.service.getAllCategories().subscribe((response) => {
      if (response.success === true) {
        this.categories = response.data;

        this.subCategories = response.data.filter(
          (x) => x._id === this.product.categoryID
        )[0].SubCategory;
        this.selectedCat = response.data.filter(
          (x) => x._id === this.product.categoryID
        )[0];
        this.form.controls.categoryID.setValue(this.selectedCat._id);
        this.selectedSub = this.subCategories.filter(
          (x) => x._id === this.product.subCategoryID
        )[0];
        this.form.controls.subCategoryID.setValue(this.selectedSub._id);
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
        this.selectedDiscount = this.discounts.filter(
          (x) => x._id === this.product.discountID
        )[0];
        this.form.controls.discountID.setValue(this.selectedDiscount._id);
        if (this.selectedDiscount._id != '6096ff5214f7e3595e542b41') {
          this.form.controls.discountStatus.setValue(true);
        } else {
          this.form.controls.discountStatus.setValue(false);
        }
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
    } else {
      this.form.controls.discountStatus.setValue(false);
    }
  }

  createform(): void {
    this.form = this.formBuilder.group({
      categoryID: new FormControl(this.selectedCat, [Validators.required]),
      subCategoryID: new FormControl(this.selectedSub, [Validators.required]),
      discountID: new FormControl(this.selectedDiscount, [Validators.required]),
      discountStatus: new FormControl(this.product.discountStatus),
      title: new FormControl(this.product.title, [Validators.required]),
      price: new FormControl(this.product.price, [Validators.required]),
      detail: new FormControl(this.product.detail),
      features: new FormControl(null),
      featuresValue: new FormControl(null),
      image: new FormControl(this.product.image, [Validators.required]),
      help: new FormControl(this.product.help),
      gallery: new FormControl(this.product.gallery),
      keywords: new FormControl(this.keywords),
      imageDescription: new FormControl(this.product.imageDescription),
      metaDescription: new FormControl(this.product.metaDescription),
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
      console.log(response);
      if (response.success === true) {
        let imgPathList: any[] = [];
        response.imagePath.forEach((element) => {
          imgPathList.push('http://api.jahantebkhoram.ir/' + element.path);
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
    if (feature != '' && value != '') {
      this.featureValues.forEach((item) => {
        if (item.feature == feature && item.value == value) {
          dup = true;
        }
      });
      if (!dup) {
        this.featureValues.push({
          feature: feature,
          value: value,
        });
      }
    }

    console.log(this.form.value);
  }

  deleteFeature(index: any) {
    this.featureValues.splice(index, 1);
  }

  submitForm(): void {
    let features: any[] = [];
    let values: any[] = [];
    this.featureValues.forEach((item) => {
      features.push(item.feature);
      values.push(item.value);
    });

    this.form.controls.features.setValue(features);
    this.form.controls.featuresValue.setValue(values);

    this.service
      .editProduct(this.product._id, this.form.value)
      .subscribe((response) => {
        if (response.success === true) {
          this.ref.close(true);
        } else {
          this.messageService.add({
            severity: 'error',
            summary: ' ثبت اطلاعات ',
            detail: response.data,
          });
        }
      });
  }
}
