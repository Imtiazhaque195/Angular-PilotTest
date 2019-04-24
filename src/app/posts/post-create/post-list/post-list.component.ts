import { Component } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';


@Component ({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  animations: [
    trigger('rotate', [
      transition('void => *', [
        style({
          transform: 'rotateY(180deg)'}),
          animate(1000)
      ])
    ])
  ]
})









export class PostListComponent {

  posts = [
    {title: 'Post #1', content: 'Post #1 content'},
    {title: 'Post #2', content: 'Post #2 content'},
    {title: 'Post #3', content: 'Post #3 content'},
  ];
}
