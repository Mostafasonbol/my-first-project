import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {
  customer = {
    name: '',
    email: '',
    address: '',
    phone: ''
  };

  termsAccepted = false;
  message: string | null = null; 

  constructor(private router: Router) {}

  purchaseItem() {
    if (this.customer.name && this.customer.email && this.customer.address && this.customer.phone && this.termsAccepted) {
      const customerData = { ...this.customer, termsAccepted: this.termsAccepted };

      localStorage.setItem('customerData', JSON.stringify(customerData));

      this.message = 'Purchase completed successfully!';

      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 3000); 

      this.resetForm();
    } else {
      this.message = 'Please fill in all required fields and accept the terms.';
    }

    
    setTimeout(() => {
      this.message = null;
    }, 3000);
  }

  resetForm() {
    this.customer = { name: '', email: '', address: '', phone: '' };
    this.termsAccepted = false;
  }
}
