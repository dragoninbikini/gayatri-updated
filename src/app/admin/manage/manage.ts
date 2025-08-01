import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../authservice/product-service';
import { Services } from '../../authservice/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WatchTypeService } from '../../shared/watch-type';
import { SpectacleType } from '../../shared/spectacle-type';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-manage',
  templateUrl: './manage.html',
  styleUrls: ['./manage.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class manage implements OnInit {
  products: Product[] = [];
  productForm: FormGroup;
  editingProduct: Product | null = null;

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private services: Services,
    private watchTypeService: WatchTypeService,
    private http: HttpClient
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required], 
      watchType: ['', Validators.required],          
      SpectacleType: ['', Validators.required],            
      price: [0, Validators.required],
      description: ['', Validators.required],
        gender: ['', Validators.required],     
        brand: ['', Validators.required],
    });

  }
  
  ngOnInit(): void {
    this.loadProducts();

      this.productForm.get('type')?.valueChanges.subscribe((selectedType) => {
    if (selectedType === 'Watch') {
      this.productForm.get('watchType')?.setValidators([Validators.required]);
      this.productForm.get('SpectacleType')?.clearValidators();
      this.productForm.get('SpectacleType')?.setValue('');
    } else if (selectedType === 'Spectacle') {
      this.productForm.get('SpectacleType')?.setValidators([Validators.required]);
      this.productForm.get('watchType')?.clearValidators();
      this.productForm.get('watchType')?.setValue('');
    } else {
      this.productForm.get('watchType')?.clearValidators();
      this.productForm.get('SpectacleType')?.clearValidators();
    }


    this.productForm.get('watchType')?.updateValueAndValidity();
    this.productForm.get('SpectacleType')?.updateValueAndValidity();
  });

  }
  
  loadProducts() {
    this.productService.getAllProducts().subscribe({
      next: (data) => (this.products = data),
      error: (err) => console.error('Failed to fetch products', err),
    });
  }
  
submitForm() {
  const formData = new FormData();

  formData.append('name', this.productForm.get('name')?.value);
  formData.append('type', this.productForm.get('type')?.value);
  formData.append('price', this.productForm.get('price')?.value);
  formData.append('description', this.productForm.get('description')?.value);
  formData.append('gender', this.productForm.get('gender')?.value);
  formData.append('brand', this.productForm.get('brand')?.value);

  if (this.productForm.get('type')?.value === 'Watch') {
    formData.append('watchType', this.productForm.get('watchType')?.value);
  } else if (this.productForm.get('type')?.value === 'Spectacle') {
    formData.append('spectacleType', this.productForm.get('spectacleType')?.value);
  }

  if (this.selectedImage) {
    formData.append('image', this.selectedImage);
  }

const token = this.services.getToken();
console.log('Token being sent:', token);
  this.http.post('http://localhost:5296/api/product/create', formData, {
    
      headers: {
    Authorization: `Bearer ${token}`
    
  }

  }).subscribe({
    next: () => {
      console.log('Product uploaded successfully');
      this.loadProducts();
      this.productForm.reset();
    },
    error: (err) => {
      console.error('Upload failed', err);
      alert("Upload failed. Are you logged in as admin?");
    }
  });
}


  editProduct(product: Product) {
    this.editingProduct = product;
    this.productForm.patchValue(product);
  }
  
  cancelEdit() {
    this.editingProduct = null;
    this.productForm.reset();
  }
  
  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadProducts();
    });
  }
  
  logout() {
    this.services.logout();
    window.location.href = '/login';
  }
onWatchTypeChange(event: any) {
  const selectedType = event.target.value;
  this.watchTypeService.setWatchType(selectedType)
}
selectedImage: File | null = null;

onImageSelected(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    this.selectedImage = input.files[0];
  }
}

}

