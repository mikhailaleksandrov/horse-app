import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-images-gallery',
  templateUrl: './imagesGallery.component.html',
  styles: [`
        .image_slide {
          display: block;
          margin-left: auto;
          margin-right: auto;
          width: 75%;
        }`
    ]
})
export class ImagesGalleryComponent {
    @Input()
    images: Array<string>;

    @Input()
    title: string;
    
    public image_index: number = 0;

  public get canIncrement() : boolean {
    return this.image_index < this.images.length - 1;
  }

  public increment() {
    if (this.canIncrement) {
      this.image_index++;
    }
  }

  public get canDecrement() : boolean {
    return this.image_index > 0;
  }

  public decrement() {
    if (this.canDecrement) {
      this.image_index--;
    }
  }
}