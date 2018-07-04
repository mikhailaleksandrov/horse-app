import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  public photosessionImages: Array<string>;
  public walkImages: Array<string>;

  constructor() {
    this.photosessionImages = [
      'https://scontent-arn2-1.cdninstagram.com/vp/44abf2e234fefcd547842494002b6f85/5B2DA6B2/t51.2885-15/e35/20582555_1579691108742349_8178186209160331264_n.jpg',
      'https://scontent-arn2-1.cdninstagram.com/vp/2b3fb4a865636a1920bb74ecd96d5ce6/5B31CD79/t51.2885-15/e35/20759566_258530094651498_7622385800033861632_n.jpg',
      'https://scontent-arn2-1.cdninstagram.com/vp/dc2cf1629b3cb2444367002ba3b30734/5B3ACB23/t51.2885-15/s750x750/sh0.08/e35/21435872_1386739348041828_7262324436613726208_n.jpg'
    ];
    this.walkImages = [
      'https://scontent-arn2-1.cdninstagram.com/vp/28890898c61166c98872a733088bc6dc/5B2D91BC/t51.2885-15/s750x750/sh0.08/e35/20590274_1490313014370428_7145655987934855168_n.jpg',
      'https://scontent-arn2-1.cdninstagram.com/vp/348d551a853668d9852047634d8064ae/5B2E2641/t51.2885-15/s750x750/sh0.08/e35/20686773_145684476014807_7554907676220588032_n.jpg',
      'https://scontent-arn2-1.cdninstagram.com/vp/3063aabd78608f6db65e17ccd8d87188/5B4074DD/t51.2885-15/s750x750/sh0.08/e35/20759884_109528026392267_6697864291086761984_n.jpg',
      'https://scontent-arn2-1.cdninstagram.com/vp/b72fc9f2d7224ef1ef5e3201bc002b38/5B3030EB/t51.2885-15/s750x750/sh0.08/e35/20838280_1089324211211252_3008251903650824192_n.jpg',
      'https://scontent-arn2-1.cdninstagram.com/vp/95df31f98248984af76df6343b52c8ac/5B492F4D/t51.2885-15/s750x750/sh0.08/e35/20969202_492282191130717_2372794020280664064_n.jpg',
      'https://scontent-arn2-1.cdninstagram.com/vp/e274bf7c19cc6241d5b7c88d7f98e4c8/5B353D22/t51.2885-15/s750x750/sh0.08/e35/22860321_1963878823836191_7355826261194702848_n.jpg'
    ];
  }
}