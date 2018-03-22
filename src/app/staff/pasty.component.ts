import { Component } from '@angular/core';

@Component({
  selector: 'app-pasty',
  templateUrl: './pasty.component.html',
})
export class PastyComponent {
  public images: Array<string>;

  constructor() {
    this.images = [
      'https://scontent-arn2-1.cdninstagram.com/vp/bd957ce06a062f492674bf2ad636f87e/5B2C963C/t51.2885-15/s640x640/sh0.08/e35/28763622_566366037081238_5403747828272988160_n.jpg',
      'https://scontent-arn2-1.cdninstagram.com/vp/137828336746c947b4597fcea728f438/5B74F205/t51.2885-15/s640x640/sh0.08/e35/20838280_1089324211211252_3008251903650824192_n.jpg',
      'https://scontent-arn2-1.cdninstagram.com/vp/83e5a9e14d85090d63ba988e632234c5/5B3B0198/t51.2885-15/s640x640/sh0.08/e35/20582555_1579691108742349_8178186209160331264_n.jpg',
      'https://scontent-arn2-1.cdninstagram.com/vp/abbe44da456becf0c3a78ad5538dd456/5B28C960/t51.2885-15/s640x640/sh0.08/e35/20482123_530919040632962_4308829878473457664_n.jpg',
      'https://scontent-arn2-1.cdninstagram.com/vp/f51811e6859d510de47d770c57d25c90/5B364F13/t51.2885-15/s640x640/sh0.08/e35/20634150_162234121011301_7221342919532216320_n.jpg'
    ];
  }
}