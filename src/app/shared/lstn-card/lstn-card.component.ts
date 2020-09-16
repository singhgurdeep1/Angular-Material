import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lstn-card',
  templateUrl: './lstn-card.component.html',
  styleUrls: ['./lstn-card.component.scss']
})
export class LstnCardComponent implements OnInit {

  @Input() header: string = 'this is header';
  @Input() footer: string = 'this is footer';

  constructor() { }

  ngOnInit(): void {
  }

}
