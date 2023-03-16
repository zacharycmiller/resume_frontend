import { Component, Input } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  @Input() id!: number;
  imageUrl!: string;

  ngOnInit(): void {
    this.getImageById(this.id);
  }

  constructor(
    private imageService: ImageService
  ) {}

  getImageById(id: number): void {
    this.imageService.getImageById(this.id).subscribe(response => {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.imageUrl = reader.result!.toString();
      };
      reader.readAsDataURL(response);
    });
  }
}
