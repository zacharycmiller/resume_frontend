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
  source!: string;

  ngOnInit(): void {
    this.getImage();
  }

  constructor(
    private imageService: ImageService
  ) {}

  getImage(): void {
    this.image = this.imageService.getImage();
    this.source = "../assets/" + this.image.fileName;
  }
}
