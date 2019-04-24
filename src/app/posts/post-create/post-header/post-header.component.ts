import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component ({
  selector: 'app-header-list',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.css'],
  animations: [
    trigger( 'fade', [
      transition('void => *', [
        style({ opacity: 0}),
        animate(1200)
      ])
    ])
  ]
})

export class PostHeaderComponent {
logininput = '';
logininput1 = '';
// change one of the logininput into the query variable
onLoginClick() {
this.logininput1 = this.logininput;

}
}
