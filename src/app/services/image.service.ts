import { Injectable } from '@angular/core';

import { Image } from '../models/image-model';
import { IMAGE } from '../data/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  getImage(): Image {
    return IMAGE;
  }
}
