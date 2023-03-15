import { Component } from '@angular/core';

import { Image } from 'src/app/models/image-model';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  image!: Image;
  imageUrl!: string;

  ngOnInit(): void {
    
  }

  constructor(
    private imageService: ImageService
  ) {
    this.imageService.getImageById(999999).subscribe(response => {
      console.log(response.toString())
      const reader = new FileReader();
      reader.onloadend = () => {
        this.imageUrl = reader.result!.toString();
      };
      reader.readAsDataURL(response);
    });
  }

  getImage(id: number): void {
    
  }
}
