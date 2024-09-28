import { Component } from '@angular/core';
import { CartService } from '../shared/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl:'./product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  data =[
    {
      "id": 1,
      "title": "HP",
      "price": 15.999,
      "description": "HP Laptop 15s (15s-fq5047ne), CPU: Core i3-1215U, 4GB DDR4 1DM 3200 Graphics Card: Intel UHD Graphics - UMA, VRAM: Shared, Display: 15.6 FHD SVA 250 nits Narrow Border, 256GB.",
      "category": "men's clothing",
      "imageUrl": "https://m.media-amazon.com/images/I/61AFzAfIofL._AC_SX679_.jpg",
    },
    {
      "id": 2,
      "title": "HP ",
      "price": 32.444,
      "description": "HP Victus 15-fa0031dx Gaming Laptop - 12th i5-12450H 8-Cores, 8GB RAM, 512GB SSD, Nvidia GeForce GTX 1650 4GB GDDR6 Graphics, 15.6 FHD Backlit Keyboard, Windows 11 - Mica Silver.",
      "category": "men's clothing",
      "imageUrl": "https://m.media-amazon.com/images/I/81uTW77d3rL._AC_SX679_.jpg",
    },
    {
      "id": 3,
      "title": "HP",
      "price": 41.984,
      "description": "Hp Victus 15-fa1093dx Gaming Laptop - 13th Intel i5-13420H 8-Cores, 6GB GDDR6 NVIDIA GeForce RTX 3050 Graphics, 8GB RAM, 512GB SSD, 15.6 FHD Backlit Keyboard, Windows 11, Blue.",
      "category": "men's clothing",
      "imageUrl": "https://m.media-amazon.com/images/I/71gfWwWhd4L.__AC_SY300_SX300_QL70_ML2_.jpg",
    },
    {
      "id": 4,
      "title": "DELL",
      "price": 21.374,
      "description": "Dell Vostro 3520 Laptop - 12th Intel Core i5-1235U 10-Cores, 8GB RAM, 256GB SSD, Intel UHD Graphics, 15.6 FHD (1920 x 1080) 120Hz 250 nits Anti-Glare, Ubuntu - Carbon Black.",
      "category": "men's clothing",
      "imageUrl": "https://m.media-amazon.com/images/I/71JPy7gSTyL._AC_SX679_.jpg",
    },
    {
      "id": 5,
      "title": "DELL",
      "price": 28.404,
      "description": "Dell Vostro 3510 15.6 FHD Business Laptop, 11Th Generation Intel Core I5-1135G7, 8GB Ram 512Gb SSD, VGA Nvidia MX350 2GB, Wifi, Bluetooth, Webcam, HDMI, DOS.",
      "category": "jewelery",
      "imageUrl": "https://m.media-amazon.com/images/I/71BnsFvzdbL._AC_SX679_.jpg",
    },
    {
      "id": 6,
      "title": "DELL ",
      "price": 49.499,
      "description": "DELL G15 5530 Gaming Laptop - 13th Intel Core i7-13650HX 14 Cores, NVIDIA GeForce RTX 3050 6GB GDDR6 Graphics, 16GB DDR5-4800 MHz RAM, 512GB SSD, 15.6 FHD (1920x1080) 120Hz.",
      "category": "jewelery",
      "imageUrl": "https://m.media-amazon.com/images/I/51HCEOuV1QL.__AC_SY300_SX300_QL70_ML2_.jpg",
    },
    {
      "id": 7,
      "title": "Lenovo",
      "price": 14.999,
      "description": "Lenovo V15 Laptop - Intel Core i3-10110U, 4GB RAM, 1TB HDD, Integrated Intel UHD Graphics, 15.6 FHD (1920x1080) 220nits Anti-glare, Dos - Iron Grey.",
      "category": "jewelery",
      "imageUrl": "https://m.media-amazon.com/images/I/512rfPA6vgL.__AC_SY300_SX300_QL70_ML2_.jpg",
    },
    {
      "id": 8,
      "title": "Lenovo",
      "price": 21.999,
      "description": "Lenovo V15 G2 Laptop - Ryzen 5 5500U 6-Cores, 8 GB RAM, 1TB HDD + 256 GB SSD PCIe NVMe, Integrated AMD Radeon Graphics, 15.6 FHD (1920x1080) TN.",
      "category": "jewelery",
      "imageUrl": "https://m.media-amazon.com/images/I/51jyxatdxAL.__AC_SX300_SY300_QL70_ML2_.jpg",
    },
    {
      "id": 9,
      "title": "Lenovo ",
      "price": 51.049,
      "description": "Lenovo Legion 5 15ACH6H Laptop - Ryzen 7 5800H 8-Cores, 16 GB RAM, 512 GB SSD, NVIDIA GeForce RTX 3070 8GB GDDR6 Graphics, 15.6FHD (1920x1080).",
      "category": "electronics",
      "imageUrl": "https://m.media-amazon.com/images/I/61FGaOb3lIL._AC_SX679_.jpg",
    },
    {
      "id": 10,
      "title": "Apple",
      "price": 51.499,
      "description": "2022 Apple MacBook Air laptop with M2 chip: 13.6-inch Liquid Retina display, 8GB RAM, 256GB SSD storage, 1080p FaceTime HD camera. Works with iPhone and iPad; Midnight; English.",
      "category": "electronics",
      "imageUrl": "https://m.media-amazon.com/images/I/71uJwr1IrZL._AC_SX679_.jpg",
    },
    {
      "id": 11,
      "title": "Apple",
      "price": 53.944,
      "description": "Apple 2022 MacBook Air laptop with M2 chip: 13.6-inch Liquid Retina display, 8GB RAM, 256GB SSD storage, 1080p FaceTime HD camera. Works with iPhone and iPad; Space Grey; English.",
      "category": "electronics",
      "imageUrl": "https://m.media-amazon.com/images/I/71PWU942AIL.__AC_SX300_SY300_QL70_ML2_.jpg",
    },
    {
      "id": 12,
      "title": "Apple",
      "price": 51.899,
      "description": "2022 Apple MacBook Air laptop with M2 chip: 13.6-inch Liquid Retina display, 8GB RAM, 256GB SSD storage, 1080p FaceTime HD camera. Works with iPhone and iPad; Starlight; English.",
      "category": "electronics",
      "imageUrl": "https://m.media-amazon.com/images/I/71C6vQtP2iL.__AC_SX300_SY300_QL70_ML2_.jpg",
    },
    {
      "id": 13,
      "title": "Asus",
      "price": 11.499,
      "description": "ASUS VivoBook 15 Laptop, Processor-Intel Celeron N4020 1.1GHz, RAM-4GB, Storage-256GB SSD, OS-Windows 11 Home, Display-15.6 FHD, Graphics-Intel UHD 600, Color-Grey.",
      "category": "electronics",
      "imageUrl": "https://m.media-amazon.com/images/I/619qmW9NtPL.__AC_SY300_SX300_QL70_ML2_.jpg",
    },
    {
      "id": 14,
      "title": "Asus",
      "price": 20.499,
      "description": "ASUS Vivobook Go 15, CPU: i3-N305 - 13th Gen intel, 8GB RAM, Display: 15.6-inch FHD 16:9 60Hz, 256GB SSD, Windows 11 (E1504GA-NJ003W) , Color black (X515M-BR001W)",
      "category": "electronics",
      "imageUrl": "https://m.media-amazon.com/images/I/61l1zNb7gmL.__AC_SX300_SY300_QL70_ML2_.jpg",
    },
    {
      "id": 15,
      "title": "Asus",
      "price": 35.999,
      "description": "ASUS TUF Gaming A15, AMD Ryzen 5 7535HS, 4GB GDDR6 NVIDIA GeForce RTX 3050, 6GB GDDR6, 15.6 (1920 x 1080) 16:10 144HZ, 512GB SSD, Windows 11 (FA506NC-HN005W) 1 Year.",
      "category": "women's clothing",
      "imageUrl": "https://m.media-amazon.com/images/I/51l7QbErfvL._AC_SY300_SX300_.jpg",
    }
  ]
 
  message: string | null = null;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.messageSubject.subscribe(msg => {
      this.message = msg;
      setTimeout(() => this.message = null, 3000);
    });
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }

}
