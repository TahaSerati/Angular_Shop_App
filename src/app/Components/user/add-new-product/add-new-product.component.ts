import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { HttpService } from 'src/app/Services/http.service';
import { IProduct } from 'src/app/interfaces/product-interface';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css'],
})
export class AddNewProductComponent implements OnInit {
  addProductForm: FormGroup;
  sumPickerDisable: boolean = false;
  isMulitiple: boolean = false;
  hasDiscount: boolean = false;

  onAddNewFeature: boolean = false;
  onAddFeatureForm: FormGroup;
  mainCatSelected: string;

  // دسته بندی محصولات
  category = {
    workEquipment: ['shoe', 'glove', 'cloth', 'electronic', 'general'],
    protectionEquipment: ['mask', 'Helmet', 'glasses', 'headPhone', 'belt'],
    trafficEquipment: ['trafficSign', 'parking', 'light'],
  };

  colors = {
    0: 'سفید',
    1: 'سیاه',
    2: 'کرمی',
    3: 'زرد',
    4: 'آبی',
    5: 'بنفش',
    6: 'صورتی',
    7: 'قرمز',
  };

  constructor(private location: Location, private _httpService: HttpService) {}

  ngOnInit() {
    this.onAddFeatureForm = new FormGroup({
      featureName: new FormControl(null),
      featureDescription: new FormControl(null),
    });

    this.addProductForm = new FormGroup({
      productName: new FormControl({ value: null, disabled: true }),
      productMainCategory: new FormControl(null),
      productSubCategory: new FormControl(null),
      productMainCategoryPersian: new FormControl(null),
      productSubCategoryPersian: new FormControl(null),
      productImagesAddress: new FormArray([new FormControl(null)]),
      productDescription: new FormControl(null),
      isMultiple: new FormControl(null),
      colors: new FormArray([
        new FormControl(null),
        new FormControl(null),
        new FormControl(null),
        new FormControl(null),
        new FormControl(null),
      ]),
      productPrice: new FormControl(null),
      hasDiscount: new FormControl(null),
      discountAmount: new FormControl(null),
      discountPrecent: new FormControl(null),
      isAvailable: new FormControl(null),
      availableAmount: new FormControl(null),
      productFeatures: new FormGroup({}),
      searchItems: new FormArray([
        new FormControl(null),
        new FormControl(null),
        new FormControl(null),
        new FormControl(null),
      ]),
    });

    console.log(this.addProductForm.get('productFeatures')['controls']);

    const savedFormData = localStorage.getItem('myForm');
    if (savedFormData) {
      this.addProductForm.patchValue(JSON.parse(savedFormData));
    }

    // Save form data to localStorage on value changes
    this.addProductForm.valueChanges.subscribe((value) => {
      localStorage.setItem('myForm', JSON.stringify(value));
    });

    this.addProductForm.get('isMultiple').valueChanges.subscribe((newValue) => {
      if (newValue) {
        this.isMulitiple = true;
        console.log(newValue);
      } else {
        this.isMulitiple = false;
        console.log(newValue);
      }
    });

    this.addProductForm
      .get('hasDiscount')
      .valueChanges.subscribe((newValue) => {
        if (newValue) {
          this.hasDiscount = true;
          console.log(newValue);
        } else {
          this.hasDiscount = false;
          console.log(newValue);
        }
      });

    this.addProductForm
      .get('productMainCategory')
      .valueChanges.subscribe((newValue) => {
        if (newValue === 'trafficEquipment') {
          this.mainCatSelected = 'trafficEquipment';
        } else if (newValue === 'protectionEquipment') {
          this.mainCatSelected = 'protectionEquipment';
        } else if (newValue === 'workEquipment') {
          this.mainCatSelected = 'workEquipment';
        }
      });
  }

  getProductFeatureKeys() {
    return Object.keys(this.addProductForm.get('productFeatures')['controls']);
  }

  onAddNewFeatureClick() {
    this.onAddNewFeature = !this.onAddNewFeature;
  }

  onAddNewFeatureSubmit() {
    (this.addProductForm.get('productFeatures') as FormGroup).addControl(
      this.onAddFeatureForm.get('featureName').value,
      new FormControl(this.onAddFeatureForm.get('featureDescription').value)
    );
    this.onAddFeatureForm.reset();
    this.onAddNewFeature = false;
  }

  checkIfIsMultiple() {
    if (this.addProductForm.controls['isMultipule'].value != false) {
      this.isMulitiple = true;
    } else {
      this.isMulitiple = false;
    }
  }

  goBack() {
    this.location.back();
  }

  onFormSubmit() {
    // this.addProductForm['controls']['productImagesAddress'].value.splice(0, 1)

    const persianMain = (() => {
      switch (this.addProductForm['controls']['productMainCategory'].value) {
        case 'workEquipment':
          return 'لوازم کار';
        case 'protectionEquipment':
          return 'لوازم ایمنی';
        case 'trafficEquipment':
          return 'لوازم ترافیک';
        default:
          return 'هچکدام';
      }
    })();

    const persianSub = (() => {
      switch (this.addProductForm['controls']['productSubCategory'].value) {
        case 'shoe':
          return 'کفش کار';
        case 'glove':
          return 'دستکش';
        case 'cloth':
          return 'لباس کار';
        case 'electronic':
          return 'لوازم الکترونیکی';
        case 'general':
          return 'لوازم کار';
        case 'mask':
          return 'ماسک';
        case 'Helmet':
          return 'کلاه ایمنی';
        case 'glasses':
          return 'عینک ایمنی';
        case 'headPhone':
          return 'هدفون';
        case 'belt':
          return 'کمربند';
        case 'trafficSign':
          return 'علائم راهنمایی و رانندگی';
        case 'parking':
          return 'پارکینگ';
        case 'light':
          return 'لوازم نوری';
        default:
          return 'هچکدام';
      }
    })();

    this.addProductForm['controls']['productImagesAddress'].value.splice(0, 1);

    const newProduct = {
      productName: this.addProductForm['controls']['productName'].value,
      productMainCategory:
        this.addProductForm['controls']['productMainCategory'].value,
      productSubCategory:
        this.addProductForm['controls']['productSubCategory'].value,
      productMainCategoryPersian: persianMain,
      productSubCategoryPersian: persianSub,
      productImagesAddress:
        this.addProductForm['controls']['productImagesAddress'].value,
      productDescription:
        this.addProductForm['controls']['productDescription'].value,
      isMultiple: this.addProductForm['controls']['isMultiple'].value,
      colors: this.addProductForm['controls']['colors'].value,
      productPrice: this.addProductForm['controls']['productPrice'].value,
      hasDiscount: this.addProductForm['controls']['hasDiscount'].value,
      discountAmount: this.addProductForm['controls']['discountAmount'].value,
      discountPrecent: this.addProductForm['controls']['discountPrecent'].value,
      isAvailable:
        this.addProductForm['controls']['availableAmount'].value.length > 0
          ? true
          : false,
      availableAmount: this.addProductForm['controls']['availableAmount'].value,
      productFeatures: this.addProductForm['controls']['productFeatures'].value,
      searchItems: this.addProductForm['controls']['searchItems'].value,
    };
    this._httpService
      .addNewProduct(newProduct as IProduct)
      .subscribe((res) => console.log(res));

    console.log(this.addProductForm['controls']['productImagesAddress'].value);
  }

  onFormReset() {
    const productFeaturesValues =
      this.addProductForm.get('productFeatures').value;

    this.addProductForm.reset();

    this.addProductForm
      .get('productFeatures')
      .patchValue(productFeaturesValues);
  }

  onAddToSearchItem() {
    (this.addProductForm.get('searchItems') as FormArray).push(
      new FormControl(null)
    );
  }

  onAddToImagesArray() {
    (this.addProductForm.get('productImagesAddress') as FormArray).push(
      new FormControl(null)
    );
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const fileDetails = file.name;
        (<FormArray>this.addProductForm.get('productImagesAddress')).push(
          new FormControl(fileDetails)
        );
      };
    }
  }
}
