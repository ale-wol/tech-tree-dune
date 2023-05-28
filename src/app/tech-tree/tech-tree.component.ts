import { Component, Input } from '@angular/core';
import { TechNode } from '../models/tech-node';

@Component({
  selector: 'app-tech-tree',
  templateUrl: './tech-tree.component.html',
  styleUrls: ['./tech-tree.component.css']
})
export class TechTreeComponent {
  @Input() childs: TechNode[] =[];
}
