import { Component } from '@angular/core';

@Component({
  selector: 'app-comet',
  templateUrl: './comet.component.html',
})
export class CometComponent {
  public images: Array<string>;

  constructor() {
    this.images = [
      'https://scontent-arn2-1.cdninstagram.com/vp/062da2e9f61c0d29f74e19e3c4510f4b/5B45D5E4/t51.2885-15/s750x750/sh0.08/e35/28765666_1635172026548234_4755716372309213184_n.jpg',
      'https://scontent-arn2-1.cdninstagram.com/vp/9e8c4c431a3144a5b8bd76567399578a/5B3DE4C3/t51.2885-15/s640x640/sh0.08/e35/28754598_2126000457620293_1922155060763033600_n.jpg',
      'https://scontent-arn2-1.cdninstagram.com/vp/bdb9539394406236ec8e4fbcd709c48f/5B3AEE1B/t51.2885-15/s640x640/sh0.08/e35/28435116_153655618659625_7530543280233119744_n.jpg',
      'https://scontent-arn2-1.cdninstagram.com/vp/18966e4153955582ddd25e2d9d1fa48e/5B3A8660/t51.2885-15/s640x640/sh0.08/e35/20969202_492282191130717_2372794020280664064_n.jpg'
    ];
  }
}