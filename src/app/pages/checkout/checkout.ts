import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.scss'],
  imports: [ReactiveFormsModule]
})
export class Checkout {
  checkoutForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      console.log(this.checkoutForm.value);
      alert('Order placed successfully!');
    }
  }
}
