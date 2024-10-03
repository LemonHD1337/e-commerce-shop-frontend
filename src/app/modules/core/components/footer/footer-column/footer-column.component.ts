import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-column',
  templateUrl: './footer-column.component.html',
  styleUrl: './footer-column.component.scss'
})
export class FooterColumnComponent {
  @Input() title: string = '';
  @Input() data: string[] = [];
}
